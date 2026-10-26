# Project Blaster (mobile app)

A barcode-scanning monster game for iOS and Android, built with [Expo](https://expo.dev) (React Native) and TypeScript.

Right now the app has one screen: it opens the camera, scans a product barcode (UPC/EAN) or QR code, and shows the code it read.

## Run it on your phone

You need [Node.js](https://nodejs.org) (LTS version) on your computer and the **Expo Go** app on your phone (App Store / Google Play).

```bash
cd mobile
npm install        # download dependencies (first time, or after package.json changes)
npx expo start     # start the dev server; prints a QR code
```

- **iPhone:** scan the QR code with the Camera app.
- **Android:** scan the QR code from inside Expo Go.

Your phone and computer must be on the same Wi-Fi. If they can't see each other, run `npx expo start --tunnel`.

Save a file and the app reloads on the phone automatically.

## Project layout

| Path | What it is |
|---|---|
| `src/app/` | Screens. Each file is a screen (Expo Router). `_layout.tsx` sets up navigation. |
| `src/app/index.tsx` | The barcode scanner screen. |
| `app.json` | App name, icons, permissions. Native iOS/Android settings live here — the `ios/` and `android/` folders are generated, never edited by hand. |
| `package.json` | Dependencies and scripts. |

Put non-screen code (components, game logic, database code) in other folders under `src/`, not in `src/app/`.

## Checks to run before committing

```bash
npm run lint       # code style and common mistakes
npm run typecheck  # TypeScript type errors
```

## Adding packages

Use `npx expo install <package>` instead of `npm install <package>`. It picks the version that matches this Expo SDK (58).

## Building a real app (later)

Expo's cloud service, EAS, builds installable apps without needing a Mac or Android Studio:

```bash
npx eas-cli@latest build --platform android   # or ios
```

App Store publishing requires an Apple Developer account ($99/year); Google Play requires a one-time $25 account.
