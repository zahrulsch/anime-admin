import { Flex, Link } from '@chakra-ui/react'
import ProfileBadge from './profile-badge'
import GeneralMenu from './general-menu'

export default function Sidebar () {
  return (
    <Flex id='sidebar' flexDirection='column' p={3} mx={3} overflow='hidden scroll' css={{
      '&::-webkit-scrollbar': {
        width: '7px'
      },
      '&::-webkit-scrollbar-track': {
        width: '6px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'transparent',
        borderRadius: '24px'
      },
    }} onMouseOver={
      (e) => {
        if (e.target.id === 'sidebar') {
          document.getElementById('sidebar').classList.add('view-scroll')
        } else {
          setTimeout(() => {
            document.getElementById('sidebar').classList.remove('view-scroll')
          }, 800)
        }
      }
    } onMouseOut={
      () => {
        document.getElementById('sidebar').classList.remove('view-scroll')
      }
    }>
      <Link href='/profile' _hover={{ textDecoration: 'none', color: 'gray.600' }}>
        <ProfileBadge />
      </Link>
      <GeneralMenu />
    </Flex>
  )
}