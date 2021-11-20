import { Table, Thead, Tr, Th, Checkbox, Tbody, Td } from '@chakra-ui/react'
import { useState } from 'react'
export default function MyTable (props) {
  const [selected, setSelected] = useState([])
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const onChecked = (id, e) => {
    if (e.target.checked) {
      if (id === 'all') {
        setSelected(state => state.concat(array))
      } else {
        setSelected(state => state.concat(id))
      }
    } else {
      if (id === 'all') {
        setSelected([])
      } else {
        setSelected(state => {
          let newState = [...state]
          const index = state.indexOf(id)
          if (index > -1) {
            newState.splice(index, 1)
            return newState
          }
        })
      }
    }
  }

  console.log(selected)

  return (
  <Table {...props} size='md'>
    <Thead>
      <Tr>
        <Th w='5%'>
          <Checkbox onChange={ (e) => onChecked('all', e) }/>
        </Th>
        <Th w='5%'>No</Th>
        <Th>Title</Th>
        <Th>Status</Th>
        <Th>rating</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        array.map(arr => (
          <Tr key={arr}>
            <Td>
              <Checkbox onChange={(e) => onChecked(arr, e)} isChecked={ selected.includes(arr) } />
            </Td>
            <Td fontSize='sm'>{ arr + 1 }</Td>
            <Td fontSize='sm'>Kimi no na wa</Td>
            <Td fontSize='sm'>Active</Td>
            <Td fontSize='sm'>4.8</Td>
            <Td fontSize='sm'>Edit</Td>
          </Tr>
        ))
      }
      
    </Tbody>
  </Table>
  )
}