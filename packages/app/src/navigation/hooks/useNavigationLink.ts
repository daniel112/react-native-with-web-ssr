import { AppRoutes } from 'app/src/navigation/AppRoutes'
import { useLink } from 'solito/link'

type useNavigationLinkProps = {
  route: AppRoutes
  dynamicParam?: string
}

export const useNavigationLink = (props: useNavigationLinkProps) => {
  const href = props.dynamicParam ? `/${props.route}/${props.dynamicParam}` : `/${props.route}`
  console.log({ href })
  return useLink({
    href,
  })
}
