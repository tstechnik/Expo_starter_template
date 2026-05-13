import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { theme } from '@/constants/theme';
import type { GameMode } from '@/types';

type GameModeCardProps = {
  mode: GameMode;
  locked?: boolean;
  onPress: () => void;
};

export function GameModeCard({ mode, locked, onPress }: GameModeCardProps) {
  const { t } = useTranslation();

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.pressable, pressed && styles.pressed]}>
      <LinearGradient colors={theme.gradients.cardBlue} style={styles.card}>
        <View style={styles.iconWrap}>
          <MaterialCommunityIcons name={mode.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={28} color={theme.colors.primary} />
        </View>
        <View style={styles.copy}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{mode.title}</Text>
            {locked ? (
              <View style={styles.proBadge}>
                <MaterialCommunityIcons name="lock" size={11} color="#FFFFFF" />
                <Text style={styles.proText}>{t('pro.badge')}</Text>
              </View>
            ) : null}
          </View>
          <Text style={styles.description}>{mode.description}</Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color={theme.colors.textSecondary} />
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: theme.radius.lg
  },
  pressed: {
    transform: [{ scale: 0.985 }]
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.72)'
  },
  iconWrap: {
    width: 54,
    height: 54,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  copy: {
    flex: 1,
    gap: 4
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text
  },
  description: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary
  },
  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.primaryDark,
    paddingHorizontal: 7,
    paddingVertical: 3
  },
  proText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900'
  }
});

