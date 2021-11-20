import { Flex, VStack, Text, Accordion, AccordionButton, AccordionPanel, AccordionItem, AccordionIcon, Icon } from '@chakra-ui/react'
import { IoIosAddCircleOutline, IoIosList } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
export default function GeneralMenu () {
  return (
    <Flex flexDirection='column' my={3}>
      <Text fontSize='sm' fontWeight='bold'>GENERAL</Text>
      <Accordion allowMultiple allowToggle defaultIndex={[0, 1]}>
        <AccordionItem>
          <AccordionButton px={0} my={1}>
            <Text fontSize='sm' w={'100%'} textAlign='left' textTransform='uppercase'>Animes</Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <VStack alignItems='start'>
              <NavLink className={({ isActive }) => isActive ? 'active-link': ''} to='/animes'>
                <Flex display='flex' alignItems='center'>
                  <Icon as={ IoIosList } marginRight={2} />
                  <Text fontSize='sm'>Anime list</Text>
                </Flex>
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'active-link': ''} to='/add-anime'>
                <Flex display='flex' alignItems='center'>
                  <Icon as={ IoIosAddCircleOutline } marginRight={2} />
                  <Text fontSize='sm'>Add anime</Text>
                </Flex>
              </NavLink>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton px={0} my={1}>
            <Text fontSize='sm' w={'100%'} textAlign='left' textTransform='uppercase'>Categories</Text>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <VStack alignItems='start'>
              <NavLink className={({ isActive }) => isActive ? 'active-link': ''} to='/categories'>
                <Flex display='flex' alignItems='center'>
                  <Icon as={ IoIosList } marginRight={2} />
                  <Text fontSize='sm'>Category list</Text>
                </Flex>
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'active-link': ''} to='/add-category'>
                <Flex display='flex' alignItems='center'>
                  <Icon as={ IoIosAddCircleOutline } marginRight={2} />
                  <Text fontSize='sm'>Add category</Text>
                </Flex>
              </NavLink>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}