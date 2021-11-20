import { extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Open Sans',
        color: 'gray.600'
      }
    }
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'gray.600'
      }
    },
    FormLabel: {
      baseStyle: {
        color: 'gray.600',
      }
    },
    Accordion: {
      baseStyle: {
        container: { border: 0 },
        button: { _focus: { boxShadow: 'none' }}
      }
    },
    Checkbox: {
      baseStyle: {
        boxShadow: 'none'
      }
    }
  }
})
export default theme