import React, { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';

type PendingAction = (() => void) | null;

type ProAccessContextValue = {
  isProUnlocked: boolean;
  isModalVisible: boolean;
  activeSource: string | null;
  presentProModal: (source: string, pendingAction?: PendingAction) => void;
  dismissProModal: () => void;
  unlockProForTemplate: () => void;
};

const ProAccessContext = createContext<ProAccessContextValue | undefined>(undefined);

export function ProAccessProvider({ children }: { children: ReactNode }) {
  const [isProUnlocked, setIsProUnlocked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeSource, setActiveSource] = useState<string | null>(null);
  const pendingActionRef = useRef<PendingAction>(null);

  const dismissProModal = useCallback(() => {
    setIsModalVisible(false);
    setActiveSource(null);
    pendingActionRef.current = null;
  }, []);

  const presentProModal = useCallback((source: string, pendingAction?: PendingAction) => {
    if (isProUnlocked) {
      pendingAction?.();
      return;
    }

    pendingActionRef.current = pendingAction ?? null;
    setActiveSource(source);
    setIsModalVisible(true);
  }, [isProUnlocked]);

  const unlockProForTemplate = useCallback(() => {
    setIsProUnlocked(true);
    setIsModalVisible(false);
    setActiveSource(null);
    const action = pendingActionRef.current;
    pendingActionRef.current = null;
    action?.();
  }, []);

  const value = useMemo<ProAccessContextValue>(() => ({
    isProUnlocked,
    isModalVisible,
    activeSource,
    presentProModal,
    dismissProModal,
    unlockProForTemplate
  }), [activeSource, dismissProModal, isModalVisible, isProUnlocked, presentProModal, unlockProForTemplate]);

  return <ProAccessContext.Provider value={value}>{children}</ProAccessContext.Provider>;
}

export function useProAccess() {
  const context = useContext(ProAccessContext);
  if (!context) {
    throw new Error('useProAccess must be used within ProAccessProvider');
  }
  return context;
}

