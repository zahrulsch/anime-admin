import { Flex, Heading } from '@chakra-ui/react'
import AddForm from './addform'
import PosterPreview from './poster-preview'
export default function AddAnimePanel () {
  return (
    <Flex flexDirection='column' bgColor='white' width='80%' margin='0 auto'>
      <Flex flexDir='column' border='1px solid' borderColor='gray.100' p={5} borderRadius={8} boxShadow='sm'>
        <Heading mb={4} fontSize='2xl' fontWeight='bolder' color='teal' textTransform='uppercase'>Add new anime</Heading>
        <Flex width='100%'>
          {/* container form */}
          <Flex css={{
            '& form' : {
              width: '100%'
            }
          }} width='70%'>
            <AddForm />
          </Flex>
          <Flex width='30%' py={7} px={5} alignSelf='flex-start'>
            <PosterPreview />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}