import { Flex, FormLabel, Icon, Image, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { MdOutlineUpload } from 'react-icons/md'
import { IoMdCloseCircle } from 'react-icons/io'
export default function PosterPreview () {
  const [src, setSrc] = useState(null)
  const toast = useToast()

  const onChange = (e) => {
    console.log(e.target.value)
    const [file] = e.target.files
    const { size, type } = file
    const allowImages = ['image/jpg', 'image/png', 'image/jpeg']
    const maxSize = 153600

    if (!allowImages.includes(type)) {
      toast({
        title: 'Image must be JPEG / PNG format',
        position: 'top',
        status: 'error',
        isClosable: true,
        duration: 2000,
        variant: 'subtle',
      })
    }

    if (size > maxSize) {
      toast({
        title: 'Image size must be 150 kB or lower',
        position: 'top',
        status: 'error',
        isClosable: true,
        duration: 2000,
        variant: 'subtle',
      })
    }

    const url = URL.createObjectURL(e.target.files[0])
    setSrc(url)
  }

  const closePreview = () => {
    setSrc(null)
  }

  return (
    <Flex width='100%' minH='300px' border='1px solid' borderColor='gray.200' borderRadius={8} justifyContent='center' alignItems='center' css={{
      '& input[type=file]': { display: 'none' }
    }} flexDir='column'>
      { !src ? 
        <>
          <Icon as={ MdOutlineUpload } mb={3} boxSize='4em' color='blue.500' border='2px solid var(--chakra-colors-blue-500)' borderRadius={5} />
          <FormLabel htmlFor='poster' cursor='pointer' bg='blue.500' borderRadius={5} p={3} fontWeight='bold' color='gray.50'>Upload poster image</FormLabel>
          <input id='poster' type='file' onChange={ onChange }/>
        </> 
        :
        <Flex css={{
          background: 'inherit',
          width: '100%',
          height: '100%',
          position: 'relative'
        }} justifyContent='center' alignItems='center'>
          <Icon as={ IoMdCloseCircle } onClick={ closePreview } css={{
            position:'absolute',
            top: '0',
            left: '0'
          }} bg='red.400' _hover={{bg: 'red.500'}} color='gray.100' borderRadius={10} cursor='pointer' m={2} p={1} boxSize='1.8em' />
          <Image src={src}/>
        </Flex>
      }
      
    </Flex>
  )
}