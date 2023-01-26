import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { AppRoutes } from 'app/src/navigation/AppRoutes'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

export function AlchemyNavigationContainer({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme()
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: AppRoutes.Home,
              feedbackList: AppRoutes.Feedbacks,
              feedbackDetails: `${AppRoutes.FeedbackDetails}/:id`,
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
