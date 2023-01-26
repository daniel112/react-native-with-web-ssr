import config from '../../tamagui.config'
import { AlchemyNavigationContainer } from '../navigation/alchemyNavigationContainer'

import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'
import { useColorScheme } from 'react-native'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
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
