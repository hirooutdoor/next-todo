import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next TODO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NEXT TODO
        </h1>
        <div className={styles.card}>
          <input className={styles.input} type="text" placeholder="Input TODO"/>
          <button className={styles.add_button}>Add</button>
        </div>

        <div className={styles.card}>
          <ul>
            <div className={styles.list_row}>
              <li className={styles.todo_title}>Task Title</li>
              <p className={styles.todo_state}>Not Yet</p>
              <button className={styles.edit_button}>Edit</button>
              <button className={styles.edit_button}>Delete</button>
            </div>
            <div className={styles.list_row}>
              <li className={styles.todo_title}>Task Title</li>
              <p className={styles.todo_state}>In Progress</p>
              <button className={styles.edit_button}>Edit</button>
              <button className={styles.edit_button}>Delete</button>
            </div>
            <div className={styles.list_row}>
              <li className={styles.todo_title}>Task Title</li>
              <p className={styles.todo_state}>Done</p>
              <button className={styles.edit_button}>Edit</button>
              <button className={styles.edit_button}>Delete</button>
            </div>
          </ul>
          
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
