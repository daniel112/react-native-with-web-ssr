import 'expo-dev-client'
import React from 'react'
import { NativeNavigation } from 'app/src/navigation/native'
import { RootProvider } from 'app/src/provider/RootProvider'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <RootProvider>
      <NativeNavigation />
    </RootProvider>
  )
}
