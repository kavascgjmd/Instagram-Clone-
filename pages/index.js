import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Feed from '../Components/Feed'
import { AuthContext } from '../context/auth'
import { useContext } from 'react'
import { useRouter } from 'next/router'
export default function Home() {
  const {user} = useContext(AuthContext)
  const Redirect = ()=>{
    const router = useRouter();
    router.push('/login');
    return null;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>AniRel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        user ?.uid ? <Feed/> : <Redirect/>
      }
     
</div>
   )
}
