import { Box, Flex, Grid, IconButton, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const pdf = 'https://revendamycode.vercel.app/static/document/catalog_compressed.pdf' 

export function Catalog({catalogRef}) {
    const catalogWidth = useBreakpointValue({
        base:'100%',
        sm:'100%',
        md:'100%',
        lg:'100%',
        xl:'100%'
    })

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
    }

    function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
    changePage(-1);
    }

    function nextPage() {
    changePage(1);
    }

    return (
        <Grid
            templateColumns='55% 45%'
            h='100vh'
            ref={catalogRef}
        >
            <Flex 
                alignItems='start' 
                direction='column'
                h='100%'
                w='100%'
                py={8}
            >
                <Flex bgColor='darkBrown' w={80} justifyContent='end'>
                    <Image src={'static/img/MYCODE_TM-LOGO-AZUL-TEAL-RGB-01.png'} maxW={72} />
                </Flex>
                <Flex alignItems='center' mt={16} pl={16}>
                    <Box h={1} bgColor='darkBrown' w={24} mr={2}></Box>
                    <Text fontSize='4xl'>Veja nosso catálogo</Text>
                </Flex>
                <Text fontSize='xl' fontWeight='thin' mt={4} pr={32} pl={16}>
                    E descubra como mudamos a vida das pessoas por meio de bla bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
                <Flex
                    alignItems='center'
                    gap={4}
                    w='100%'
                    mt={16}
                    pr={28}
                    pl={16}
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
                <Flex alignItems='center' mt='auto' pl={16}>
                    <Box h={.5} bgColor='darkBrown' w={24} mr={2}></Box>
                    <Text fontSize='2xl' fontWeight='medium' fontFamily='KissMe'>por que personalizamos tudo, menos o skincare?</Text>
                </Flex>
            </Flex>
            <Flex 
                w='100%' 
                justifyContent='center' 
                alignItems='center' 
                direction='column'
                pr={16}
                py={8}
            >
                <Document
                    file={pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    // options={{
                    //     cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                    //     cMapPacked: true,
                    //   }}
                >
                    <Page 
                        pageNumber={pageNumber} 
                        width={480} 
                        // loading={
                        //     <Image src={'static/img/MYCODE_TEXTURAS-03.png'} maxW={500} maxH='100%' objectFit='cover' />
                        // }
                        loading='loading'
                    />
                </Document>
                <Flex
                    w='510px'
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
                </Flex>
                {/* <iframe src="../../assets/DiplomaPatricia.pdf" 
                width={catalogWidth} height="92%" allow="autoplay" style={{border:"2px solid red"}}></iframe> */}
            </Flex>
        </Grid>
    )
}