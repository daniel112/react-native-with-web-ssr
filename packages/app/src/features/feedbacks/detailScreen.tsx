import { ChevronLeft } from '@tamagui/lucide-icons'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import { Button, Paragraph, YStack, Text } from 'tamagui'

const { useParam } = createParam<{ id: string }>()

export const FeedbackDetailsScreen = () => {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })
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
