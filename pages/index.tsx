import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/src/component/Auth/Login'

const inter = Inter({ subsets: ['latin'] })
// import { useSession } from "next-auth/react"

export default function Home() {
  // const session = useSession()
  return (
    <>
      <Head>
        <title>Hospital Management System | HMS</title>
        <meta name="description" content="Hospital management system for automating daily hospital processes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} `}>
        <Login/>
      </main>
    </>
  )
}
// ${inter.className}