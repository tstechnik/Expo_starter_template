import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';

export default function LearnScreen() {
  return (
    <Screen>
      <View style={styles.emptyCard}>
        <MaterialCommunityIcons name="book-open-variant" size={42} color={theme.colors.primary} />
        <Text style={styles.title}>Learning Path</Text>
        <Text style={styles.text}>Add lessons, quizzes, and units here.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  emptyCard: {
    borderRadius: theme.radius.xl,
    backgroundColor: 'rgba(255,255,255,0.94)',
    padding: theme.spacing.xl,
    gap: theme.spacing.md,
    alignItems: 'center'
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text
  },
  text: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center'
  }
});

