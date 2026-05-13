import AsyncStorage from '@react-native-async-storage/async-storage';
import type { UserProgress } from '@/types';

const USER_PROGRESS_KEY = 'mathapex_template_user_progress';

export const defaultUserProgress: UserProgress = {
  totalScore: 0,
  completedLessons: 0,
  streakDays: 0,
  isOnboarded: false,
  lastActiveAt: null
};

async function readJson<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(key: string, value: T): Promise<T> {
  await AsyncStorage.setItem(key, JSON.stringify(value));
  return value;
}

export const userProgressStorage = {
  get: () => readJson(USER_PROGRESS_KEY, defaultUserProgress),
  set: (progress: UserProgress) => writeJson(USER_PROGRESS_KEY, progress),
  update: async (updates: Partial<UserProgress>) => {
    const current = await userProgressStorage.get();
    return writeJson(USER_PROGRESS_KEY, { ...current, ...updates });
  },
  reset: () => writeJson(USER_PROGRESS_KEY, defaultUserProgress)
};

