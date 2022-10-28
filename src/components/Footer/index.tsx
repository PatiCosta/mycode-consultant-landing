import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { FacebookLogo, InstagramLogo } from "phosphor-react";

export function Footer() {
    return (
        <Flex
            alignItems='center'
            justifyContent='space-between'
            bgColor='darkBrown'
            px={16}
            h='16vh'
            color='beige.500'
        >
            <Flex alignItems='center' gap={2}>
                <Image src={'static/img/MYCODE_TM-LOGO-BEGE-RGB-01.png'} maxW={48} />
                <Link 
                    href='https://www.facebook.com/lovemy.code'
                    target='_blank'
                >
                    <FacebookLogo 
                        size={32} 
                        color="#e6cebe" 
                        weight="duotone" 
                    />
                </Link>
                <Link 
                    href='https://www.instagram.com/lovemy.code/?igshid=YmMyMTA2M2Y%3D'
                    target='_blank'
                >
                    <InstagramLogo size={32} color="#e6cebe" weight="duotone" />
                </Link>
            </Flex>
            {/* <Text fontFamily='KissMe' fontSize='5xl' color='tealBlue'>limpeza</Text> */}
            <Flex alignItems='center' gap={1}>
                <Text>Feito por</Text>
                <Link 
                    color='#F55F5E' 
                    _hover={{textDecoration:'none', color:'#f37070', transition:'360ms'}}
                    href='https://awer.co/'
                    target='_blank'
                >
                    awer.co
                </Link>
            </Flex>
        </Flex>
    )
}