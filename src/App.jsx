import React, { useState } from 'react'
import Layout from './components/Layout'
import Header from './components/Header'
import List from './components/List'
import Form from './components/Form'

function App() {
  const [work, setWork] = useState("")
  const [works, setWorks] = useState([])
  const [error, setError] = useState(null)

  const submitHandler = (event) => {
    event.preventDefault()
    if(work.length <5) {
      setError("کار خود را وارد کنید.(حداقل ۵ کاراکتر)")
      return false
    }
    setWorks([...works, { id: Date.now(), title: work, done: false }])
    setError(null)
    setWork("")
  }
  const deleteHandler = (workId) => {
    if (window.confirm("آیا از حذف آیتم مطمئن هستید؟")) {
      const updateWorks = works.filter((item) => item.id !== workId)
      setWorks(updateWorks)
    }
  }

  const doneHandler = (workId) => {
    const index = works.findIndex((item) => item.id === workId)
    const dublicateWorks = [...works]
    dublicateWorks[index] = {
      id: works[index].id,
      title: works[index].title,
      done: !works[index].done
    }
    setWorks(dublicateWorks)
    console.log(works)
  }

  return (
    <Layout>
      <Header />
      <Form work={work} change={(e) => { setWork(e.target.value) }} submit={submitHandler} error={error}/>
      <List del={deleteHandler} done={doneHandler} works={works} />
    </Layout>
  )
}

export default App
