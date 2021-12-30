import Head from 'next/head'
import Navbar from '../Componants/Navbar'

export default function Resultats() {
  return (
    <div className="resultats-container">
      <Head>
        <title>European Football Logs | Résultats</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <h1>Résultats Page</h1>
    </div>
  )
}