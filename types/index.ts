export type AppLanguage = 'en' | 'de' | 'tr';

export type UserProgress = {
  totalScore: number;
  completedLessons: number;
  streakDays: number;
  isOnboarded: boolean;
  lastActiveAt: string | null;
};

export type GameMode = {
  id: string;
  title: string;
  description: string;
  icon: string;
  pro?: boolean;
};

