import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';
import { useApp } from '@/context/AppContext';

export default function OnboardingScreen() {
  const { updateUserProgress } = useApp();

  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to MathApex</Text>
        <Text style={styles.text}>Use this screen for grade selection, goals, and parent setup.</Text>
        <Button
          title="Continue"
          onPress={() => {
            void updateUserProgress({ isOnboarded: true });
            router.replace('/(tabs)');
          }}
          fullWidth
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: theme.radius.xl,
    backgroundColor: 'rgba(255,255,255,0.94)',
    padding: theme.spacing.xl,
    gap: theme.spacing.lg
  },
  title: {
    ...theme.typography.title,
    color: theme.colors.text
  },
  text: {
    ...theme.typography.body,
    color: theme.colors.textSecondary
  }
});

