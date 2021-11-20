import { Flex } from '@chakra-ui/react'
import MyTable from './table'
import Search from './search'
import Pagination from './pagination'

export default function MovieListPanel () {
  return (
    <Flex flexDir='column' width='100%' boxShadow='md' p={8} borderRadius={8} border='1px solid' borderColor='gray.200' bg='white'>
      <Search />
      <MyTable w='100%' variant='simple' />
      <Flex marginTop={8}>
        <Pagination totalPages={29}/>
      </Flex>
    </Flex>
  )
}