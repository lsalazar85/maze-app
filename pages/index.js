import Head from 'next/head'
import Maze from "@/components/Maze";
import Title from "@/components/Title";
import { Main } from '../styles/styles'

const Home = () => (
    <Main>
        <Head>
            <title>Maze App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Title title='Maze Game' />
        <Maze />
    </Main>
)

export default Home
