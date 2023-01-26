import config from '../../tamagui.config'
import { AlchemyNavigationContainer } from '../navigation/alchemyNavigationContainer'

import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'
import { useColorScheme } from 'react-native'

/**
 * Root App Provider for both Web and Native Platforms
 *
 * Sets up the Theming (Web/Native) and Navigation(Native only)
 * Web Navigation is handled by nextJS
 */
export function RootProvider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
      {...rest}
    >
      <AlchemyNavigationContainer>{children}</AlchemyNavigationContainer>
    </TamaguiProvider>
  )
}
