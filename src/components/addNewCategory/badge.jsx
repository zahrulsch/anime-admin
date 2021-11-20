import { Box, CloseButton, Text, Tooltip } from '@chakra-ui/react'
export default function Badge ({ name, deleteClick, setToDelete }) {
  return (
    <Box display='flex' bg='gray.300' py={1} px={2} borderRadius={5} justifyContent='space-around' m={1}>
      <Text fontSize='sm'>{name}</Text>
      <Tooltip label='delete'>
        <CloseButton _focus={{boxShadow: 'none', outline: 'none'}} p={0} size='sm' onClick={() => {
          setToDelete(name)
          deleteClick('modal open')
        }} />
      </Tooltip>
    </Box>
  )
}