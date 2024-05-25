import React from 'react'
import ListItem from './ListItem';


function List({ del, done, works }) {
  if(works.length <= 0 ){
    return(
      <div className='bg-light p-3 rounded text-center'>
        <h6 className='text-secondary'>کاری برای انجام دادن نیست!</h6>
      </div>
    )
  }
  return (
    <div className='list-wrap mt-4'>
      <ul className="list-group">
        {
          works && works.map((work) => (
            <ListItem
              key={work.id}
              id= {work.id}
              title={work.title}
              deleteHandler={del}
              doneHandler={done}
              done={work.done}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default List
