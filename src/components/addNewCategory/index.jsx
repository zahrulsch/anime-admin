import { Flex, Input, Text, Button, useDisclosure } from '@chakra-ui/react'
import Badge from './badge'
import DeleteModal from './deleteModal'
import {useState} from 'react'

import { AiOutlinePlus } from 'react-icons/ai'

const AddNewCategory = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
  const [selectToDelete, setSelectToDelete] = useState('')
  const categories = ['slice of life', 'comedy', 'harem', 'ecchi', 'fun art', 'action', 'romance', 'hentai', 'horror', 'issekai']
  return (
    <Flex alignSelf='center' w='80%' bg='white' flexDir='column' p={5} boxShadow='sm' borderRadius={8} css={{
      '& form': {
        width: '100%'
      }
    }}>
      <Text fontWeight='bold' color='teal' mb={3}>ADD NEW CATEGORY</Text>
      {/* exists category */}
      <Flex direction={['column', 'row']} px={2} py={2} mb={2} flexWrap='wrap' border='1px solid var(--chakra-colors-gray-200)' borderRadius={5}>
        {
          categories.map(category => (
            <Badge name={category} key={category} deleteClick={onOpen} setToDelete={setSelectToDelete} />
          ))
        }
      </Flex>
      <DeleteModal isOpen={isOpen} onClose={onClose} selectToDelete={selectToDelete}/>
      <form>
        <Flex>
          <Input me={2} type='text' fontSize='sm' placeholder='Input new category...'/>
          <Button colorScheme='teal' type='submit'>
            <AiOutlinePlus />
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}
export default AddNewCategory