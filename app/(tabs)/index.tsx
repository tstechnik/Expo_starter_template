import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { MetricCard } from '@/components/ui/MetricCard';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';
import { useApp } from '@/context/AppContext';
import { haptics } from '@/utils/haptics';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { userProgress, addScore } = useApp();

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.logoMark}>
          <MaterialCommunityIcons name="triangle-wave" size={30} color="#FFFFFF" />
        </View>
        <View>
          <Text style={styles.brand}>{t('app.name')}</Text>
          <Text style={styles.tagline}>{t('app.tagline')}</Text>
        </View>
      </View>

      <View style={styles.hero}>
        <Text style={styles.title}>{t('home.title')}</Text>
        <Text style={styles.subtitle}>{t('home.subtitle')}</Text>
        <Button
          title={t('home.start')}
          onPress={() => {
            void haptics.success();
            void addScore(25);
          }}
          fullWidth
        />
      </View>

      <View style={styles.metrics}>
        <MetricCard icon="star-four-points" label={t('home.score')} value={String(userProgress.totalScore)} />
        <MetricCard icon="fire" label={t('home.dailyGoal')} value={`${userProgress.streakDays}d`} tone="gold" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.xl
  },
  logoMark: {
    width: 54,
    height: 54,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)'
  },
  brand: {
    ...theme.typography.h1,
    color: '#FFFFFF'
  },
  tagline: {
    ...theme.typography.caption,
    color: 'rgba(255,255,255,0.78)'
  },
  hero: {
    borderRadius: theme.radius.xl,
    padding: theme.spacing.xl,
    gap: theme.spacing.lg,
    backgroundColor: 'rgba(255,255,255,0.92)'
  },
  title: {
    ...theme.typography.title,
    color: theme.colors.text
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary
  },
  metrics: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg
  }
});

