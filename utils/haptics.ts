import * as Haptics from 'expo-haptics';

async function run(action: () => Promise<void>): Promise<void> {
  try {
    await action();
  } catch {
    // Haptics can be unavailable on simulators and web.
  }
}

export const haptics = {
  light: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)),
  medium: () => run(() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)),
  success: () => run(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)),
  error: () => run(() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error))
};

