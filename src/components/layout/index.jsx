import { Flex } from '@chakra-ui/react'
import Sidebar from '../sidebar'
export default function Layout({ children }) {
  return (
    <Flex w='100vw' bgColor='gray.50'>
      <Flex bgColor='white' h='100vh' overflow='hidden' borderRight='1px solid' borderRightColor='gray.200'>
        <Sidebar />
      </Flex>
      <Flex flex={1} justifyContent='flex-start' alignItems='start' h='100vh' overflowY='auto'>
        { children }
      </Flex>
    </Flex>
  )
}