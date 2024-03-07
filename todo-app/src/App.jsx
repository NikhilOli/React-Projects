import React from 'react'
import Header from './components/Header'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';

const App = () => {
  return (
    <div className='mx-auto'>
      <Header />
      <main className='flex justify-evenly py-5 px-[8%]'>
        <TaskColumn heading="To Do" icon={todoIcon} />
        <TaskColumn heading="Doing" icon={doingIcon} />
        <TaskColumn heading="Done" icon={doneIcon} />
      </main>
    </div>
  )
}

export default App