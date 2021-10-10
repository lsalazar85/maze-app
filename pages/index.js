import Head from 'next/head'

import Maze from "@/components/Maze";

import { GlobalStyle } from "../styles/GlobalStyles";
import { Main } from "./styles";

const Home = () => (
  <Main>
      <GlobalStyle />
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Maze />
  </Main>
)

export default Home
