import { Flex, Avatar, Text } from '@chakra-ui/react'

export default function ProfileBadge () {
  return (
    <Flex flexDirection='row' px={5} py={4} bgColor='gray.100' borderRadius='10' alignItems='center' justifyContent='center'>
      <Avatar size='md' />
      <Flex flexDirection='column' paddingLeft={3}>
        <Text fontWeight='bold' fontSize='sm'>Zahrul</Text>
        <Text fontSize='sm'>Administrator</Text>
      </Flex>
    </Flex>
  )
}