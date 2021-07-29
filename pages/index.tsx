
import { OrderSortButton } from 'components/button/OrderSort'
import { TodoState } from 'components/button/TodoState'
import { AddForm } from 'components/form/AddForm'
import { TodoList } from 'components/todo/TodoList'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from 'styles/Home.module.css'

export default function Home() {

  const [ inputTodo, setInputTodo ] = useState("");
  const onChangeInputTodo = (e) => setInputTodo(e.value.target);
  const onClickAdd = () => {
    if (inputTodo === "") return;
    const newTodos = [...todos, inputTodo];
    setInputTodo(newTodo);
    setInputTodo("");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next TODO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.appTitle}>NEXT TODO</h1>

        {/* Add Form */}
        <AddForm inputTodo={inputTodo} onChange={onChangeInputTodo} onClick={onClickAdd}/>

        {/* Todo List */}
        <div className={styles.card}>
          <div className={styles.list_head}>

            {/* Status Sort */}
            <div className={styles.stateSort_area}>
              <p>All</p>
              <p>Not Yet</p>
              <p>In Progress</p>
              <p>Done</p>
            </div>
            {/* State Sort */}
            
            {/* Order Sort Button*/}
            <div className={styles.pulldown_orderSort}>
              <OrderSortButton/>
            </div>
            {/* id & name Sort Button*/}
          
          </div>

          {/* List */}
          <TodoList />
          {/* List */}
        
        </div>

        {/* Edit Form */}
        <div className={styles.input_area}>
          <input
            className={styles.input}
            type="text"
            placeholder="Edit what to do here"
          />
          <div className={styles.pull_down}>
            <TodoState />
          </div>
          <button className={styles.add_button}>Save</button>
        </div>
      </main>
        {/* Edit Form */}

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

