# MathApex Expo Mobile Template

Clean Expo Router starter for new MathApex-style mobile apps.

## What is included

- Expo SDK 54 / React Native 0.81 baseline
- Expo Router with tabs
- MathApex-style theme tokens, gradients, cards, and buttons
- Lightweight app state context
- Local storage helper with AsyncStorage
- i18n setup with English, German, and Turkish starter strings
- Pro access modal stub, ready to replace with RevenueCat
- Haptics utility with safe no-op fallback

## Start a new app

```bash
cp -R mathapex-expo-template my-new-app
cd my-new-app
npm install
npm run start
```

You can also start it directly with Expo:

```bash
npx expo start
```

Then update:

- `package.json` name
- `app.config.ts` app name, slug, bundle identifiers
- `constants/theme.ts` brand colors
- `i18n/locales/*.json` product copy

## Suggested workflow

1. Build new feature screens inside `app/`.
2. Put reusable UI in `components/`.
3. Put business logic in `services/`.
4. Keep all colors, radius, spacing, and typography in `constants/theme.ts`.
5. Use `ProAccessContext` for paid feature gates, then swap the stub with the production RevenueCat integration when needed.
