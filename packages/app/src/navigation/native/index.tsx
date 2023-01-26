import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '../../features/home/HomeScreen'
import { FeedbackDetailsScreen, FeedbackListScreen } from '../../features/feedbacks'

type RootStackParamList = {
  home: undefined
  feedbackDetails: {
    id: string
  }
  feedbackList: undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>()

/**
 * Sets up the Native Navigation Routes
 */
export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="feedbackDetails"
        component={FeedbackDetailsScreen}
        options={{
          title: 'Feedback Details',
        }}
      />
      <Stack.Screen
        name="feedbackList"
        component={FeedbackListScreen}
        options={{
          title: 'Feedbacks',
        }}
      />
    </Stack.Navigator>
  )
}
