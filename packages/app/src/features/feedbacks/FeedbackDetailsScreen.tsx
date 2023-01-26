import { ChevronLeft } from '@tamagui/lucide-icons'
import { AppRoutes } from 'app/src/navigation/AppRoutes'
import { useNavigationLink } from 'app/src/navigation/hooks/useNavigationLink'
import { createParam } from 'solito'
import { Button, Paragraph, YStack, Text } from 'tamagui'

const { useParam } = createParam<{ id: string }>()

export const FeedbackDetailsScreen = () => {
  const [id] = useParam('id')
  const link = useNavigationLink({ route: AppRoutes.Home })

  return (
    <YStack f={1} jc="center" ai="center" space>
      {/* TODO: check why this text isnt showing on native apps */}
      <Text color={'red'}>Hello world</Text>
      <Paragraph ta="center">{`Details: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
