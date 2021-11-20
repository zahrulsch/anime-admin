import Layout from '../components/layout'
import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

export default function Home () {
  const currentYear = new Date().getFullYear()
  return (
    <Layout>
      <Flex p={4} w='100%' flexDir='column' css={{
        '& > small': {
          textAlign: 'center',
          marginTop: 15,
          display: 'inline-block',
          letterSpacing: '.1em'
        }
      }}>
        <Outlet />
        <small>
          Copyright &copy; {currentYear} mantracode (@zahrulsch)
        </small>
      </Flex>
    </Layout>
  )
}