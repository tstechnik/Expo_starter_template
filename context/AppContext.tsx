import React, { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { UserProgress } from '@/types';
import { defaultUserProgress, userProgressStorage } from '@/services/storage';

type AppContextValue = {
  isReady: boolean;
  userProgress: UserProgress;
  updateUserProgress: (updates: Partial<UserProgress>) => Promise<void>;
  addScore: (points: number) => Promise<void>;
  resetProgress: () => Promise<void>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>(defaultUserProgress);

  useEffect(() => {
    let mounted = true;

    userProgressStorage.get().then((progress) => {
      if (!mounted) return;
      setUserProgress(progress);
      setIsReady(true);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const updateUserProgress = async (updates: Partial<UserProgress>) => {
    const updated = await userProgressStorage.update(updates);
    setUserProgress(updated);
  };

  const addScore = async (points: number) => {
    const updated = await userProgressStorage.update({
      totalScore: Math.max(0, userProgress.totalScore + points),
      lastActiveAt: new Date().toISOString()
    });
    setUserProgress(updated);
  };

  const resetProgress = async () => {
    const updated = await userProgressStorage.reset();
    setUserProgress(updated);
  };

  const value = useMemo<AppContextValue>(() => ({
    isReady,
    userProgress,
    updateUserProgress,
    addScore,
    resetProgress
  }), [isReady, userProgress]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

