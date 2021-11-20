import { Flex, Heading, FormControl, FormLabel, Icon, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { VscAccount, VscKey, VscEyeClosed, VscEye } from 'react-icons/vsc'
import { MdAlternateEmail } from 'react-icons/md'
import { useState } from 'react'

export default function Register () {
  const [passView, setPassView] = useState(false)
  const [data, setData] = useState({
    email: '', username: '', password: ''
  })
  
  return (
    <Flex w='100vw' h='100vh' justifyContent='center' alignItems='center'>
      <Flex flexDir='column' bgColor='white' w={{ base: '20%', md: '18%', lg: '20%'}} p={5} borderRadius={8} boxShadow='md' alignItems='center'>
        <Heading mb={5}>Register</Heading>
        <form style={{ width: '100%' }}>
          <FormControl mb={3}>
            <FormLabel htmlFor='username' color='gray.800'>Username</FormLabel>
            <Flex w='100%' border='1px solid' borderColor='gray.200' alignItems='center' borderRadius={5}>
              <Icon as={VscAccount} bgColor='gray.200' boxSize={9} p={2} me={2} />
              <input value={data.username} onChange={e => setData(state => ({ ...state, username: e.target.value }))} id='username' name='username' type='text' style={{width: '100%', outline: 'none', bgColor: 'transparent'}}/>
            </Flex>
          </FormControl>
          <FormControl mb={3}>
            <FormLabel htmlFor='email' color='gray.800'>Email</FormLabel>
            <Flex w='100%' border='1px solid' borderColor='gray.200' alignItems='center' borderRadius={5}>
              <Icon as={MdAlternateEmail} bgColor='gray.200' boxSize={9} p={2} me={2} />
              <input value={data.email} onChange={e => setData(state => ({ ...state, email: e.target.value }))} id='email' name='email' type='email' style={{width: '100%', outline: 'none', bgColor: 'transparent'}}/>
            </Flex>
          </FormControl>
          <FormControl mb={3}>
            <FormLabel htmlFor='password' color='gray.800'>Password</FormLabel>
            <Flex w='100%' border='1px solid' borderColor='gray.200' alignItems='center' borderRadius={5}>
              <Icon as={VscKey} bgColor='gray.200' boxSize={9} p={2} me={2} />
              <input value={data.password} onChange={e => setData(state => ({ ...state, password: e.target.value }))} id='password' name='password' type={passView ? 'text': 'password'} style={{width: '100%', outline: 'none'}}/>
              <Icon cursor='pointer' as={passView ? VscEyeClosed: VscEye} boxSize={8} p={2} onClick={() => setPassView(state=>!state)} />
            </Flex>
          </FormControl>
          {/* <Link to='/forgot-password'>
            <Text textAlign='right' _hover={{ color: 'gray.600' }} color='gray.500' fontSize='sm' letterSpacing={.2} mb={3}>Forgot password</Text>
          </Link> */}
          <Button borderRadius={6} type='submit' colorScheme='blue' fontWeight='light' w='100%'>SUBMIT</Button>
        </form>
        <Link to='/login'>
          <Text fontSize='sm' _hover={{color: 'gray.600'}} letterSpacing={.2} color='gray.500' mt={3}>You already have an account?</Text>
        </Link>
      </Flex>
    </Flex>
  )
}