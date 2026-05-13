import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@/constants/theme';

type MetricCardProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
  tone?: 'blue' | 'gold';
};

export function MetricCard({ icon, label, value, tone = 'blue' }: MetricCardProps) {
  return (
    <LinearGradient colors={tone === 'gold' ? theme.gradients.cardGold : theme.gradients.cardBlue} style={styles.card}>
      <View style={styles.iconWrap}>
        <MaterialCommunityIcons name={icon} size={22} color={tone === 'gold' ? theme.colors.accent : theme.colors.primary} />
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 116,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.72)'
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)',
    marginBottom: theme.spacing.md
  },
  value: {
    ...theme.typography.h1,
    color: theme.colors.text
  },
  label: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary
  }
});

