import { OrderSortButton } from 'components/button/OrderSort'
import { TodoState } from 'components/button/TodoState'
import { AddForm } from 'components/form/AddForm'
import { EditForm } from 'components/form/EditForm'
import { TodoList } from 'components/todo/TodoList'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from 'styles/Home.module.css'

type TodoType = {
  title: string
  status: string
}

export default function Home() {
  const [todos, setTodos] = useState<Array<TodoType>>([])
  const [inputTodo, setInputTodo] = useState<string>('')
  const [todoStatus, setTodoStatus] = useState<string>('')
  const [isEditing, setIsEditing] = useState<boolean>(false)
  // object state to set so we know which todo item we are editing
  // const [editTitle, setEditTitle] = useState({});
  // const [editStatus, setEditStatus] = useState({});
  const [currentTodo, setCurrentTodo] = useState<Array<TodoType>>([])

  const newTodo = {
    title: inputTodo,
    status: todoStatus
  }

  // const editTodo = {
  //   title: editTitle,
  //   status: editStatus
  // }

  const onChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputTodo(e.target.value)

  const onChangeTodoStatus = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setTodoStatus(e.target.value)

  const onChangeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setEditTitle({ ...editTitle, title: e.target.value });
    setCurrentTodo({ ...currentTodo, title: e.target.value})
  }

  const onChangeEditStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //setEditStatus({ ...editStatus, status: e.target.value });
    setCurrentTodo({ ...currentTodo, status: e.target.value})
  }

  // Add Function //
  const onClickAdd = () => {
    if (!inputTodo || todoStatus === '') return
    // alert(inputTodo); //for verification
    // alert(todoStatus); //for verification
    // console.log(newTodo) //for verification
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setInputTodo('') //clear input
    setTodoStatus('') //clear status
  }

  // Delete Function //
  const onClickDelete = (index: number) => {
    //alert(index) //for verification
    //Ask Yes or No *** Add later ***
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  // Edit Function //
  const onClickEdit = (index: number) => {
    alert(index) //for verification      
    setIsEditing(true)
    console.log(currentTodo)
    setCurrentTodo([ ...todos, newTodo ])
  }

  // Cancel Function //
  const onClickCancel = (index: number) => {
    alert(index) //for verification
    setIsEditing(false)
  }

  // Submit Function //
  const onClickSubmit = (index: number) => {
    if (!inputTodo || todoStatus === '') return
    alert(index) //for verification
    const newTodos = [...todos]
    newTodos[index].title,
    newTodos[index].status
    setTodos(newTodos);
    setIsEditing(false)
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
        <AddForm
          inputTodo={inputTodo}
          todoStatus={todoStatus}
          onChange={onChangeInputTodo}
          onClick={onClickAdd}
          onChangeTodoStatus={onChangeTodoStatus}
        />

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
              <OrderSortButton />
            </div>
            {/* id & name Sort Button*/}
          </div>

          {/* List */}
          <TodoList
            todos={todos}
            isEditing={isEditing}
            onClickDelete={onClickDelete}
            onClickEdit={onClickEdit}
            onClickCancel={onClickCancel}
            onClickSubmit={onClickSubmit}
            onChangeEditTitle={onChangeEditTitle}
            onChangeEditStatus={onChangeEditStatus}
            // isEditing={isEditing}
          />
          {/* List */}
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
