import Head from 'next/head'

import Maze from "@/components/Maze";
import { Main } from "./styles";

const Home = () => (
  <Main>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Maze />
  </Main>
)

export default Home
