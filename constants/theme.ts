export const theme = {
  colors: {
    background: '#EEF2FF',
    surface: '#FFFFFF',
    surfaceSoft: '#F8FAFC',
    primary: '#4F46E5',
    primaryDark: '#312E81',
    secondary: '#38BDF8',
    accent: '#F59E0B',
    success: '#22C55E',
    danger: '#EF4444',
    text: '#111827',
    textSecondary: '#64748B',
    border: '#D9E2FF',
    shadow: '#1E1B4B'
  },
  gradients: {
    app: ['#241E62', '#5B43B7', '#EEF2FF'] as const,
    hero: ['#4F46E5', '#7C3AED', '#38BDF8'] as const,
    cardBlue: ['rgba(79,70,229,0.16)', 'rgba(255,255,255,0.96)'] as const,
    cardGold: ['rgba(245,158,11,0.18)', 'rgba(255,255,255,0.96)'] as const
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24,
    full: 999
  },
  typography: {
    title: {
      fontSize: 30,
      lineHeight: 36,
      fontWeight: '900' as const
    },
    h1: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: '900' as const
    },
    h2: {
      fontSize: 19,
      lineHeight: 24,
      fontWeight: '900' as const
    },
    body: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: '600' as const
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: '700' as const
    }
  }
};

