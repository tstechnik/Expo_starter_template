import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'MathApex Template',
  slug: 'mathapex-template',
  version: '1.0.0',
  scheme: 'mathapextemplate',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  splash: {
    backgroundColor: '#EEF2FF'
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.mathapex.template'
  },
  android: {
    package: 'com.mathapex.template'
  },
  plugins: ['expo-router'],
  experiments: {
    typedRoutes: true
  }
};

export default config;
