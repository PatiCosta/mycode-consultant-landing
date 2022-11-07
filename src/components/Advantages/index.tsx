import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";


export function Advantages() {
    return (
        <Grid
            w='100%'
            px={{base: 4, sm: 4, md: 4, lg: 16}}
            py={8}
            alignItems='center'
            gap={8}
            templateColumns={{base: '1fr', sm: '1fr', md: '1fr', lg: '224px 224px 1fr 1fr 1fr'}}
        >
            <Image 
                h={32}
                w={48}
                borderRadius='full'
                src={'static/img/MYCODE_TEMPLATE-MIDIAS-01-18.jpg'} 
                objectFit='cover'
                display={{base: 'none', sm: 'none', md: 'none', lg: 'inline-block'}}
            />
            <Image 
                h={32}
                w={48}
                borderRadius='full'
                src={'static/img/drew-hays-agGIKYs4mYs-unsplash.jpeg'} 
                objectFit='cover'
                display={{base: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'inline-block'}}
            />
            <Flex 
                direction='column' 
                justify="flex-start" 
                h='100%' 
                px={{base: 0, sm: 0, md: 0, lg: 4}} 
                borderLeft={{base: '0px solid', sm: '0px solid', md: '0px solid', lg: '1px solid'}} 
                borderColor='darkBrown'
            >
                <Flex alignItems='center' gap={2}>
                    <Box h='2px' w='56px' bgColor='darkBrown' display={{base: 'block', sm: 'block', md: 'block', lg: 'none'}}></Box>
                    <Text fontSize='xl'>Produção cuidadosa</Text>
                </Flex>
                <Text fontWeight='thin' mt={2}>Nós nunca testamos nossos produtos em animais ou insetos.</Text>
            </Flex>
            <Flex 
                direction='column' 
                justify="flex-start" 
                h='100%' 
                px={{base: 0, sm: 0, md: 0, lg: 4}} 
                borderLeft={{base: '0px solid', sm: '0px solid', md: '0px solid', lg: '1px solid'}} 
                borderColor='darkBrown'
            >
                <Flex alignItems='center' gap={2}>
                    <Box h='2px' w='56px' bgColor='darkBrown' display={{base: 'block', sm: 'block', md: 'block', lg: 'none'}}></Box>
                    <Text fontSize='xl'>Cósmeticos sustentáveis</Text>
                </Flex>
                <Text fontWeight='thin' mt={2}>Nós usamos matérias primas de origem vegetal.</Text>
            </Flex>
            <Flex 
                direction='column' 
                justify="flex-start" 
                h='100%' 
                px={{base: 0, sm: 0, md: 0, lg: 4}} 
                borderLeft={{base: '0px solid', sm: '0px solid', md: '0px solid', lg: '1px solid'}} 
                borderColor='darkBrown'
            >
                <Flex alignItems='center' gap={2}>
                    <Box h='2px' w='56px' bgColor='darkBrown' display={{base: 'block', sm: 'block', md: 'block', lg: 'none'}}></Box>
                    <Text fontSize='xl'>Personalizado para você</Text>
                </Flex>
                <Text fontWeight='thin' mt={2}>Um produto verdadeiramente feito para você e para sua pele</Text>
            </Flex>
        </Grid>
    )
}