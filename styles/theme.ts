import { extendTheme } from '@chakra-ui/react'

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "#caded8",
      boxShadow: "0 0 0 2px #caded8"
    },
    _autofill: {
      textFillColor: "#e6cebe",
      transition: "background-color 5000s ease-in-out 0s",
    },
  }
});

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: "#caded8",
      boxShadow: "0 0 0 1px #caded8"
    },
    _autofill: {
      textFillColor: "#e6cebe",
      transition: "background-color 5000s ease-in-out 0s",
    },
  }
});

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: "#caded8",
      boxShadow: "0 1px 0 0 #caded8"
    },
    _autofill: {
      textFillColor: "#e6cebe",
      transition: "background-color 5000s ease-in-out 0s",
    },
  }
});

export const theme = extendTheme({
  fonts: {
    heading: `'NeueHaas', sans-serif`,
    body: `'NeueHaas', sans-serif`,
  },
  components: {
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed
      }
  }},
  colors: {
    beige: {
      300: "#F4E9E2",
      500: "#e6cebe"
    },
    tealBlue:"#caded8",
    darkBrown: "#100c0b",
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgColor:'beige.300',
        color: 'darkBrown',
        },
      // styles for the `a`
      a: {
        // color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
 })