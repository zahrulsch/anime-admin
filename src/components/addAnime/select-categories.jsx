import { Menu, MenuButton, MenuList, Flex, Button, Text, Checkbox, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { findBestMatch } from 'string-similarity'

export default function SelectCategories ({ categories }) {
  const [found, setFound] = useState([])
  const [selected, setSelected] = useState([])

  const onchange = (e) => {
    const name = e.target.value
    const order = findBestMatch(name, categories).ratings.sort((a, b) => b.rating - a.rating).map(e => e.target)
    setFound(order)
  }

  const oncheck = (e, name) => {
    const isChecked = e.target.checked
    if (isChecked) {
      setSelected(state => [...state, name])
    } else {
      const i = selected.indexOf(name)
      if (i > -1) {
        setSelected(state => {
          let n = [...state]
          n.splice(i, 1)
          return n
        })
      }
    }
  }
  console.log(selected)
  return (
    <Menu closeOnSelect={ false }>
      <MenuButton as={ Button } textAlign='left' fontWeight='light' fontSize='sm'>Select categories</MenuButton>
      <MenuList w='100%' p={2}>
        <Input onChange={onchange} mb={2}/>
        {
          !found.length ?
          categories.map(category => {
            return (
              <Flex key={ category } flex={1} justifyContent='space-between' mb={1}>
                <Text fontSize='sm'>{ category }</Text>
                <Checkbox onChange={ (e) => oncheck(e, category) } isChecked={ selected.includes(category) } />
              </Flex>
            )
          })
          :
          found.map(f => {
            return (
              <Flex key={ f } flex={1} justifyContent='space-between' mb={1}>
                <Text fontSize='sm'>{ f }</Text>
                <Checkbox onChange={ (e) => oncheck(e, f) } isChecked={ selected.includes(f) }/>
              </Flex>
            )
          })
        }
      </MenuList>
    </Menu>
  )
}