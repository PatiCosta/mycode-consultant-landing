import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
          {/* <!-- HTML Meta Tags --> */}
          <meta name="description" content="Pensado em você, feito para sua pele"/>
          <meta name="keywords" content="venda, revenda, Venda, Revenda, Mycode, Loja, Consultora, mycode, loja, lojas, consultora, revendas, vendas, dinheiro, renda, renda extra, extra, enriquecer, trabalho, grátis, produtos, cosméticos, revendedor, revendedora, consultor, rica, produtos, inscreva-se, seja uma revendedora, seja uma consultora, seja um consultor, seja um revendedor, site, online, vender, revender, lucrar, enriquecer, cosmético, pele, rosto, corpo, skincare, cósmetica, personalizado, seu, sua, cuidado, sustentável"/>

         {/* <!-- Facebook Meta Tags --> */}
         <meta property="og:url" content="https://revendamycode.vercel.app/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="My Code - Seja um(a) consultor(a)"/>
         <meta property="og:site_name" content="My Code - Seja um(a) consultor(a)" />
         <meta property="og:description" content="Pensado em você, feito para sua pele"/>
         <meta property="og:image" itemProp='image' content="https://revendamycode.vercel.app/static/img/ogimage.png"/>

         {/* <!-- Twitter Meta Tags --> */}
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="revendamycode.vercel.app"/>
         <meta property="twitter:url" content="https://revendamycode.vercel.app//"/>
         <meta name="twitter:title" content="My Code - Seja um(a) consultor(a)"/>
         <meta name="twitter:description" content="Pensado em você, feito para sua pele"/>
         <meta name="twitter:image" content="https://revendamycode.vercel.app/static/img/ogimage.png"/>


         <link rel="shortcut icon" href="/static/img/iconMyCode.ico" /> 
         </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}