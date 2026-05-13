import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { GameModeCard } from '@/components/GameModeCard';
import { Screen } from '@/components/ui/Screen';
import { theme } from '@/constants/theme';
import { useProAccess } from '@/context/ProAccessContext';
import type { GameMode } from '@/types';

export default function GamesScreen() {
  const { t } = useTranslation();
  const { isProUnlocked, presentProModal } = useProAccess();

  const modes: GameMode[] = [
    {
      id: 'classic',
      title: t('games.classic'),
      description: t('games.classicDesc'),
      icon: 'target'
    },
    {
      id: 'duel',
      title: t('games.duel'),
      description: t('games.duelDesc'),
      icon: 'sword-cross',
      pro: true
    }
  ];

  return (
    <Screen>
      <Text style={styles.title}>{t('games.title')}</Text>
      <View style={styles.list}>
        {modes.map((mode) => {
          const locked = !!mode.pro && !isProUnlocked;
          return (
            <GameModeCard
              key={mode.id}
              mode={mode}
              locked={locked}
              onPress={() => {
                if (locked) {
                  presentProModal('games');
                }
              }}
            />
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    ...theme.typography.title,
    color: '#FFFFFF',
    marginBottom: theme.spacing.xl
  },
  list: {
    gap: theme.spacing.md
  }
});

