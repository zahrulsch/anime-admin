import { Flex, Input, FormLabel, Textarea } from '@chakra-ui/react'
import SelectCategories from './select-categories'
export default function AddForm () {
  const cats = ['slice of life', 'comedy', 'harem', 'ecchi', 'fun art', 'action', 'romance', 'hentai']

  return (
    <form>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='title'>Title</FormLabel>
        <Input _placeholder={{ fontSize: 'sm' }} fontSize='sm' type='text' id='title' placeholder='Anime title'/>
      </Flex>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='alt-title'>Alternative title</FormLabel>
        <Input _placeholder={{ fontSize: 'sm' }} fontSize='sm' type='text' id='alt-title' placeholder='Anime alternative title'/>
      </Flex>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='studio'>Studio</FormLabel>
        <Input _placeholder={{ fontSize: 'sm' }} fontSize='sm' type='text' id='studio' placeholder='Studio'/>
      </Flex>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='date'>Release date</FormLabel>
        <Input _placeholder={{ fontSize: 'sm' }} fontSize='sm' type='date' id='date' placeholder='Anime release date'/>
      </Flex>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='rating'>Anime rating</FormLabel>
        <Input _placeholder={{ fontSize: 'sm' }} fontSize='sm' type='number' id='rating' placeholder='Anime rating'/>
      </Flex>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='alt-title'>Categories</FormLabel>
        <SelectCategories categories={ cats }/>
      </Flex>
      <Flex flexDirection='column' mb={3}>
        <FormLabel fontWeight='semibold' color='gray.500' htmlFor='alt-title'>Synopsis</FormLabel>
        <Textarea fontSize='sm' minH='300px'/>
      </Flex>
    </form>
  )
}