import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { theme } from '@/constants/theme';

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

function tabIcon(name: IconName) {
  return ({ color, size }: { color: string; size: number }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          minHeight: 62,
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF'
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '800'
        }
      }}
    >
      <Tabs.Screen name="index" options={{ title: t('tabs.home'), tabBarIcon: tabIcon('home-variant') }} />
      <Tabs.Screen name="learn" options={{ title: t('tabs.learn'), tabBarIcon: tabIcon('book-open-page-variant') }} />
      <Tabs.Screen name="games" options={{ title: t('tabs.games'), tabBarIcon: tabIcon('gamepad-variant') }} />
      <Tabs.Screen name="profile" options={{ title: t('tabs.profile'), tabBarIcon: tabIcon('account-circle') }} />
    </Tabs>
  );
}

