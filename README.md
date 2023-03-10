# Alchemy

## 🔦 About

Monorepo for Native mobile and SSR WebApp. Uses Expo + Next.js + Tamagui + Solito app.

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- React Navigation

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)
    - `navigation` Next.js has a `pages/` folder. React Native doesn't. This folder contains navigation-related code for RN. You may use it for any navigation code, such as custom links.

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`

To run with optimizer on in dev mode (just for testing, it's faster to leave it off): `yarn web:extract`. To build for production `yarn:prod`.

To see debug output to verify the compiler, add `// debug` as a comment to the top of any file.

- Expo local dev: `yarn native`

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
yarn add react-native-reanimated
cd ..
yarn
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. Add the module name to the list for `withTM` in the [`apps/next/next.config.js`](apps/next/next.config.js#L47) file.

```ts
withTM([
  'solito',
  'react-native-web',
  'expo-linking',
  'expo-constants',
  'expo-modules-core',
  'expo-crypto', // <-- add this or any other native module
])
```

## NOTES

### Adding new Route/Screen

1. Creating the Shared Screen

- Create the Screen in `/packages/app/src/features/<newFeature>`

2. For Web

- Ensure new page exists under `/apps/next/pages/*`
- import the Screen from step 1

3. For Native Mobile

- Update the React-Navigation Linking config
- Update the React-Navigation Screen stack in `/packages/app/src/navigation/native/index.ts`
