import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'

import { theme } from '../../styles/theme'
import { Global } from '@emotion/react'
// import Fonts from './Fonts'


function MyApp({Component, pageProps}: AppProps) {
   return (
      
      <>
         <ChakraProvider theme={theme}>
         <Global
            styles={`

               /* latin */
               @font-face {
                  font-family: 'NeueHaas';
                  font-style: black;
                  font-weight: 900;
                  font-display: swap;
                  src: url('fonts/NeueHaas/NeueHaasDisplayBlack.ttf') format('truetype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'NeueHaas';
                  font-style: bold;
                  font-weight: 700;
                  font-display: swap;
                  src: url('fonts/NeueHaas/NeueHaasDisplayBold.ttf') format('truetype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'NeueHaas';
                  font-style: light;
                  font-weight: 300;
                  font-display: swap;
                  src: url('fonts/NeueHaas/NeueHaasDisplayLight.ttf') format('truetype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'NeueHaas';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('fonts/NeueHaas/NeueHaasDisplayMediu.ttf') format('truetype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'NeueHaas';
                  font-style: thin;
                  font-weight: 200;
                  font-display: swap;
                  src: url('fonts/NeueHaas/NeueHaasDisplayThin.ttf') format('truetype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'NeueHaas';
                  font-style: hairline;
                  font-weight: 100;
                  font-display: swap;
                  src: url('fonts/NeueHaas/NeueHaasDisplayXThin.ttf') format('truetype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               @font-face {
                  font-family: 'KissMe';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: url('fonts/KissMe/KissMe.otf') format('opentype');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
               }
               `} />
            <Component {...pageProps}/>
         </ChakraProvider>
      </>
   ) 
}

export default MyApp