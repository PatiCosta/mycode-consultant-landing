import Head from "next/head";
import { Advantages } from "../components/Advantages";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Form } from "../components/Form";
import { Catalog } from "../components/Catalog";
import { Footer } from "../components/Footer";
import { useRef } from "react";


export default function Home () {
  // const formRef = useRef(null);
  const catalogRef = useRef(null);

  return (
    <>
      <Head>
        <title>My Code - Seja um consultor</title>
      </Head>
      <Header 
        // formRef={formRef} 
        catalogRef={catalogRef} 
      />
      <Form 
        // formRef={formRef} 
      />
      <Banner />
      <Advantages />
      <Catalog catalogRef={catalogRef} />
      <Footer />
    </>
  )
}
