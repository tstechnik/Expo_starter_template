import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';
import { useApp } from '@/context/AppContext';

export default function ProfileScreen() {
  const { userProgress, resetProgress } = useApp();

  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.row}>Score: {userProgress.totalScore}</Text>
        <Text style={styles.row}>Completed lessons: {userProgress.completedLessons}</Text>
        <Button title="Reset progress" variant="outline" onPress={() => void resetProgress()} fullWidth />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radius.xl,
    backgroundColor: 'rgba(255,255,255,0.94)',
    padding: theme.spacing.xl,
    gap: theme.spacing.md
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text
  },
  row: {
    ...theme.typography.body,
    color: theme.colors.textSecondary
  }
});

