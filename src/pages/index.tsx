import React from 'react'
import Head from 'next/head'


import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>ReactJS Structure</h1>
      <p>ReactJS + Next.js</p>
    </Container>
  )
}

export default Home
