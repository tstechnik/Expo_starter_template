import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/Button';
import { theme } from '@/constants/theme';
import { useProAccess } from '@/context/ProAccessContext';

export function ProUpsellModal() {
  const { t } = useTranslation();
  const { isModalVisible, dismissProModal, unlockProForTemplate } = useProAccess();

  return (
    <Modal visible={isModalVisible} animationType="slide" transparent>
      <View style={styles.scrim}>
        <LinearGradient colors={theme.gradients.hero} style={styles.card}>
          <Pressable onPress={dismissProModal} style={styles.close}>
            <MaterialCommunityIcons name="close" size={22} color="#FFFFFF" />
          </Pressable>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="crown" size={18} color="#FFD965" />
            <Text style={styles.badgeText}>{t('pro.badge')}</Text>
          </View>
          <Text style={styles.title}>{t('pro.title')}</Text>
          <Text style={styles.subtitle}>{t('pro.subtitle')}</Text>
          <Button title={t('pro.unlock')} onPress={unlockProForTemplate} fullWidth />
          <Pressable onPress={dismissProModal}>
            <Text style={styles.later}>{t('pro.close')}</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(15,23,42,0.56)'
  },
  card: {
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: theme.spacing.xl,
    gap: theme.spacing.lg
  },
  close: {
    position: 'absolute',
    top: theme.spacing.lg,
    right: theme.spacing.lg,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)'
  },
  badge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: theme.radius.full,
    backgroundColor: 'rgba(17,24,39,0.38)',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm
  },
  badgeText: {
    color: '#FFFFFF',
    fontWeight: '900'
  },
  title: {
    ...theme.typography.title,
    color: '#FFFFFF',
    paddingRight: 48
  },
  subtitle: {
    ...theme.typography.body,
    color: 'rgba(255,255,255,0.86)'
  },
  later: {
    color: '#FFFFFF',
    fontWeight: '800',
    textAlign: 'center'
  }
});

