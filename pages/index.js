import Head from 'next/head'

import Maze from "@/components/Maze";
import Title from "@/components/Title";

import { GlobalStyle } from "../styles/GlobalStyles";
import { Main } from "./styles";

const Home = () => (
  <Main>
      <GlobalStyle />
    <Head>
      <title>Maze App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title text="Waze App" />
    <Maze />
  </Main>
)

export default Home
