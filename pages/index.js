import Head from 'next/head'

import Maze from "@/components/Maze";
import Title from "@/components/Title";
import Loader from "@/components/Loader/Loader";

import useMaze from "../hooks/useMaze";
import { Main } from "./styles";

const Home = () => {
    const { playerPosition  } = useMaze()
    return(
        <Main>
            <Head>
                <title>Maze App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!playerPosition  ? (
                <Loader/>
            ) : (
                <>
                    <Title title='Maze Game' />
                    <Maze />
                </>
            )}
        </Main>
    )
}

export default Home
