import { Box, Flex, Grid, IconButton, Image, Text, useBreakpointValue } from "@chakra-ui/react";
// import { CaretLeft, CaretRight } from "phosphor-react";
// import { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const pdf = 'https://revendamycode.vercel.app/static/document/catalog_compressed.pdf#view=FitH' 

export function Catalog({catalogRef}) {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    const catalogWidth = useBreakpointValue({
        base: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
    })

    // function onDocumentLoadSuccess({ numPages }) {
    // setNumPages(numPages);
    // setPageNumber(1);
    // }

    // function changePage(offset) {
    // setPageNumber(prevPageNumber => prevPageNumber + offset);
    // }

    // function previousPage() {
    // changePage(-1);
    // }

    // function nextPage() {
    // changePage(1);
    // }

    return (
        <Grid
            templateColumns={{base: '1fr', sm: '1fr', md: '1fr', lg: '50% 50%'}}
            h={{base: '100%', sm: '100%', lg: '100vh'}}
            ref={catalogRef}
        >
            <Flex 
                alignItems='start' 
                direction='column'
                h='100%'
                w='100%'
                py={{base: 2, sm: 2, md: 2, lg: 8}}
            >
                <Flex 
                    bgColor='darkBrown' 
                    w={{base: '100vw', sm: '100vw', lg: 80}} 
                    justifyContent={{base:'center', sm: 'center', lg: 'end' }}
                    color='tealBlue'
                >
                    <Image 
                        src={'static/img/MYCODE_TM-LOGO-AZUL-TEAL-RGB-01.png'} 
                        maxW={72} 
                        display={{base: 'none', sm: 'none', lg: 'inline-block'}}
                    />
                    <Image 
                        src={'static/img/MYCODE_TEMPLATE-OFFLINE-04-01.jpg'} 
                        display={{base: 'inline-block', sm: 'inline-block', lg: 'none'}}
                        w='100vw'
                    />
                </Flex>
                <Flex alignItems='center' mt={16} px={{base: 4, sm: 4, lg: 16}}>
                    <Box h={1} bgColor='darkBrown' w={24} mr={2} display={{base: 'none', sm: 'none', lg: 'block'}}></Box>
                    <Text fontSize={{base: '2xl', sm: '2xl', md: '4xl'}}>Veja nosso cat??logo</Text>
                </Flex>
                <Text fontSize={{base: 'md', sm: 'md', md: 'xl'}} fontWeight='thin' mt={4} pl={{base: 4, sm: 4, lg: 16}} pr={{base: 4, sm: 4, lg: 32}}>
                    E descubra como mudamos a vida das pessoas por meio de bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Flex
                    alignItems='center'
                    justifyContent='center'
                    gap={4}
                    w='100%'
                    mt={{base: 8, sm: 8, lg: 16}}
                    pr={{base: 4, sm: 4, lg: 28}}
                    pl={{base: 4, sm: 4, lg: 16}}
                >
                    <Image 
                        h={28}
                        w={48}
                        borderRadius='full'
                        src={'static/img/MYCODE_TEMPLATE-OFFLINE-01-02.jpeg.sb-c17d9043-6Q8HAF.jpg'} 
                        objectFit='cover'
                    />
                    <Image 
                        h={28}
                        w={48}
                        borderRadius='full'
                        src={'static/img/enecta-cannabis-extracts-80wCkpt-IKE-unsplash.jpeg'} 
                        objectFit='cover'
                    />
                    <Image 
                        h={28}
                        w={48}
                        borderRadius='full'
                        src={'static/img/nati-melnychuk-dFBhXJHKNeo-unsplash.jpeg'} 
                        objectFit='cover'
                    />
                </Flex>
                <Flex alignItems='center' mt='auto' pl={16} display={{base: 'none', sm: 'none', lg: 'flex'}}>
                    <Box h={.5} bgColor='darkBrown' w={24} mr={2}></Box>
                    <Text fontSize='2xl' fontWeight='medium' fontFamily='KissMe'>por que personalizamos tudo, menos o skincare?</Text>
                </Flex>
            </Flex>
            <Flex 
                w='100%' 
                h='100vh'
                justifyContent='center' 
                alignItems='center' 
                direction='column'
                pr={{base: 4, sm: 4, lg: 16}}
                pl={{base: 4, sm: 4, md: 0, lg: 0}}
                py={8}
            >
                {/* <Document
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={{
                        cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                        cMapPacked: true,
                      }}
                >
                    <Page 
                        pageNumber={pageNumber} 
                        width={catalogWidth}
                        loading='loading'
                    />
                </Document>
                <Flex
                    w='100%'
                    pt={2}
                    color='darkBrown'
                    gap={8}
                    alignItems='center'
                    justifyContent='center'
                >
                    <IconButton 
                        aria-label='Previous catalog page' 
                        icon={<CaretLeft size={32} color="#100c0b" weight="duotone" />} 
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        colorScheme='transparent'
                    />
                    <Text>{pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}</Text>
                    <IconButton 
                        aria-label='Next catalog page' 
                        icon={<CaretRight size={32} color="#100c0b" weight="duotone" />} 
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                        colorScheme='transparent'
                    />
                </Flex> */}
                <iframe 
                    src='https://drive.google.com/file/d/1xKMhqXK9waw6LsJnSjtaJ2PfR7Poo-gJ/preview' 
                    width={catalogWidth} 
                    height="100%" 
                    allow="autoplay"
                />
            </Flex>
        </Grid>
    )
}