import { Flex, Icon, Input, Button } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
export default function Search () {
  return (
    <Flex my={4} justifyContent='center' css={{
      '& form': {width: '50%'}
    }}>
      <form>
        <Flex overflow='hidden' borderRadius={8} border='1px solid var(--chakra-colors-gray-200)'>
          <Input fontSize='sm' border='none' _focus={{ outline: 'none' }} type='text' placeholder='Search...'/>
          <Button type='submit' bgColor='teal.500' borderRadius='none' _hover={{ background: 'teal' }}>
            <Icon as={ BsSearch } color='gray.200'/>
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}