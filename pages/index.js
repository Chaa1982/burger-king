import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Fat burgers | Main page</title>
        <meta name="title" content="Fat burgers" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Main page</h1>
        <div className={styles.mainImage}>
          <Image src='/fatburger.png' width={400} height={300} alt='fat burger' />
        </div>
        <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
        <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>

        <Link className={styles.btn} href='/burgers'>All burgers</Link>
      </div>
    </>
  )
}
