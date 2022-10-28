import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";


export function Advantages() {
    return (
        <Grid
            w='100vw'
            px={16}
            py={8}
            alignItems='center'
            gap={8}
            templateColumns='224px 224px 1fr 1fr 1fr'
        >
            <Image 
                h={32}
                w={48}
                borderRadius='full'
                src={'static/img/MYCODE_TEMPLATE-MIDIAS-01-18.jpg'} 
                objectFit='cover'
            />
            <Image 
                h={32}
                w={48}
                borderRadius='full'
                src={'static/img/drew-hays-agGIKYs4mYs-unsplash.jpeg'} 
                objectFit='cover'
            />
            <Flex direction='column' justify="flex-start" h='100%' px={4} borderLeft='1px solid' borderColor='darkBrown'>
                <Text fontSize='xl'>Produção cuidadosa</Text>
                <Text fontWeight='thin' mt={2}>Nós nunca testamos nossos produtos em animais ou insetos.</Text>
            </Flex>
            <Flex direction='column' justify="flex-start" h='100%' px={4} borderLeft='1px solid' borderColor='darkBrown'>
                <Text fontSize='xl'>Cósmeticos sustentáveis</Text>
                <Text fontWeight='thin' mt={2}>Nós usamos matérias primas de origem vegetal.</Text>
            </Flex>
            <Flex direction='column' justify="flex-start" h='100%' pl={4} borderLeft='1px solid' borderColor='darkBrown'>
                <Text fontSize='xl'>Personalizado para você</Text>
                <Text fontWeight='thin' mt={2}>Um produto verdadeiramente feito para você e para sua pele</Text>
            </Flex>
        </Grid>
    )
}