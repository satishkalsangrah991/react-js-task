// import React from 'react'
// import { useState } from 'react';

// const TodoDragDrop = () => {
//     const TODO = 'TODO';
//     const DOING = 'DOING';
//     const DONE = 'DONE';
//     const [value, setValue] = useState('');
//     const [tasks, setTasks] = useState([]);
//     const [dragTask, setDragTask] = useState(null);
//     const [updateItem, setUpdateItem] = useState(null);
// let api = []
//     const handleKeyDown = (e) => {
// if(e.keyCode===13){
//     let obj ={
//         title: value,
//         status: TODO,
//         id: Date.now()
//     }
//     setTasks((prevTasks) => [...prevTasks, obj]);

//     setValue("")
// }

//     }

//     // console.log(tasks)

//     const onDragOver = (e) => {
//         e.preventDefault();

//       }

//       const handleDrag = (e, task) => {
//         setDragTask(task);
//       }

//       const handleDragNDrop = (status) => {
//         let copyTask = [...tasks];
//         copyTask = copyTask.map((item) => {
//           if (dragTask.id === item.id) {
//             item.status = status
//           }
//           return item;
//         });
//         setTasks(copyTask);
//         setDragTask(null);
//       }
//       const 
//       handleOnDrop = (e) => {
//         const status = e.target.getAttribute('data-status');//TODO,DOING,DONE
//         console.log('dropping ', status);
//         api.push(status)
//         if (status === TODO) {
//           handleDragNDrop(TODO);
//         } else if (status === DOING) {
//           handleDragNDrop(DOING);
//         } else if (status === DONE) {
//           handleDragNDrop(DONE);
//         }
//       }

//       console.log(dragTask)
//       console.log(api)
//   return (
//    <>
//     <div className='container mx-auto mt-12'>
    
// <div className='max-w-[600px] mx-auto'>
//     <input 
//       type='text'
//         value={value}
//         onKeyDown={handleKeyDown}
//   onChange={(e)=>setValue(e.target.value)}
// className='w-full rounded-md py-2 px-4 border-2 bg-gray-100 outline-none focus:outline-blue-500 focus:border-none'
    
//     />


// <div className='fle grid grid-cols2 sm:grid-cols-3 my-12 gap-10 justify-between'>
// <div 
//   onDrop={handleOnDrop}
//           onDragOver={onDragOver}
//           data-status={TODO}>
// <h1 className='bg-green-500 text-white px-8 py-2 rounded-md'>Todo</h1>
// <div 

//       className='flex flex-col space-y-3 mt-5'>

// {
//     tasks.length > 0 && tasks.map((task)=>{
    
//         return(
//             <>
//             { task.status === TODO &&
//             <div 
            
//             key={task.id}
//             draggable
//             onDrag={(e) => handleDrag(e, task)}
//             className='bg-gray-50 border p-2 rounded-md flex gap-2 flex-wrap justify-between'>
//     <h1 className='bg-green500 text-whie px8 py2 roundedmd truncate w-[100px]'>{task.title}</h1>
//       <div className='cursor-pointer'>
//          <span>✏️</span>
//          <span>🗑️</span>
// </div>
//             </div>
//             }
//             </>
//         )
      
//     })
// }





// </div>
// </div>

// <div>
// <h1 className='bg-green-500 text-white px-8 py-2 rounded-md'>Doing</h1>
// <div 
 
//       className='flex flex-col space-y-3 mt-5'>

// {
//     tasks.length > 0 && tasks.map((task)=>{
    
//         return(
//             <>
//             { task.status === DOING &&
//             <div 
//              onDrop={handleOnDrop}
//           onDragOver={onDragOver}
//           data-status={TODO}
//             key={task.id}
//             draggable
//             onDrag={(e) => handleDrag(e, task)}
//             className='bg-gray-50 border p-2 rounded-md flex gap-2 flex-wrap justify-between'>
//     <h1 className='bg-green500 text-whie px8 py2 roundedmd truncate w-[100px]'>{task.title}</h1>
//       <div className='cursor-pointer'>
//          <span>✏️</span>
//          <span>🗑️</span>
// </div>
//             </div>
//             }
//             </>
//         )
      
//     })
// }





// </div>
// </div>
// <div>
// <h1 className='bg-green-500 text-white px-8 py-2 rounded-md'>Done</h1>
// <div className='flex flex-col space-y-3 mt-5'>

// {
//     tasks.length>0 && tasks.map((task)=>{
    
//         return(
//             <>
//             { task.status === DONE &&
//             <div className='bg-gray-50 border p-2 rounded-md flex gap-2 flex-wrap justify-between'>
// <h1 className='bg-green500 text-whie px8 py2 roundedmd truncate w-[100px]'>{task.title}</h1>
// <div className='cursor-pointer'>
// <span>✏️</span>
// <span>🗑️</span>
// </div>
//             </div>
//             }
//             </>
//         )
      
//     })
// }





// </div>
// </div>
//     </div>

// </div>
//     </div>
//    </>
//   )
// }

// export default TodoDragDrop


import { useState } from 'react';
import './drag.css';
// ✏️ 🗑️

function TodoDragDrop() {
  const TODO = 'TODO';
  const DOING = 'DOING';
  const DONE = 'DONE';
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [dragTask, setDragTask] = useState(null);
  const [updateItem, setUpdateItem] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {//Enter pressed
      if (updateItem) {//user is coming for an update
        const obj = {
          title: value,
          id: updateItem.id,
          status: updateItem.status
        }
        const copyTask = [...tasks];
        const filterList =
          copyTask.filter((item) => item.id !== updateItem.id);
        setTasks((prevTask) => [...filterList, obj]);
        setUpdateItem(null);
      } else {
        const obj = {
          title: value,
          status: TODO,
          id: Date.now()
        }
        setTasks((prevTasks) => [...prevTasks, obj]);
      }
      setValue('')
    }
  }

  const handleDrag = (e, task) => {
    setDragTask(task);
  }

  const handleDragNDrop = (status) => {
    let copyTask = [...tasks];
    copyTask = copyTask.map((item) => {
      if (dragTask.id === item.id) {
        item.status = status
      }
      return item;
    });
    setTasks(copyTask);
    setDragTask(null);
  }
  const handleOnDrop = (e) => {
    const status = e.target.getAttribute('data-status');//TODO,DOING,DONE
    console.log('dropping ', status);
    if (status === TODO) {
      handleDragNDrop(TODO);
    } else if (status === DOING) {
      handleDragNDrop(DOING);
    } else if (status === DONE) {
      handleDragNDrop(DONE);
    }
  }
  const onDragOver = (e) => {
    e.preventDefault();
  }

  const deleteTask = (item) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((task) => task.id != item.id);
    setTasks(copyTask);
  }

  const updateTask = (task) => {
    setUpdateItem(task);
    setValue(task.title);
  }
  console.log('updateItem ', updateItem);
  return (
    <>
    <div className="container mx-auto text-center">
      <h1>Task Manager</h1>
      <input
        onChange={handleChange}
        type='text'
        value={value}
        onKeyDown={handleKeyDown}
        placeholder='Add Todo...'
        className='bg-gray-100 py-3 my-5 w-1/2 rounded-sm px-4'
      />

      <div className='flex justify-center w-[70%] mx-auto'>
        <div className='todo w-1/3 h-[400px]'
          onDrop={handleOnDrop}
          onDragOver={onDragOver}
          data-status={TODO}
        >
          <h2 className='todo-col py-2.5 px-0 bg-[#f6f3c1]'>Todo</h2>
          {
            tasks.length > 0 && tasks.map((task) => (
              task.status === TODO && <div
                onDrag={(e) => handleDrag(e, task)}
                draggable
                key={task.id}
                className='task-item'>
                {task.title}
                <div>
                  <span className='btn'
                    onClick={() => updateTask(task)}
                  >✏️</span>
                  <span
                    onClick={(e) => deleteTask(task)}
                    className='btn'>🗑️</span>
                </div>
              </div>
            ))
          }
        </div>

        <div className='doing w-1/3 h-[400px] mx-2.5 my-0'
          data-status={DOING}
          onDrop={handleOnDrop}
          onDragOver={onDragOver}
        >
          <h2 className='doing-col py-2.5 px-0 bg-[#c1e4f6] '>Doing</h2>
          {
            tasks.length > 0 && tasks.map((task) => (
              task.status === DOING && <div
                onDrag={(e) => handleDrag(e, task)}
                draggable
                key={task.id}
                className='task-item'>
                {task.title}
                <div>
                  <span className='btn'
                    onClick={() => updateTask(task)}
                  >✏️</span>
                  <span className='btn'
                    onClick={(e) => deleteTask(task)}
                  >🗑️</span>
                </div>
              </div>
            ))
          }
        </div>

        <div className='done w-1/3 h-[400px]'
          data-status={DONE}
          onDrop={handleOnDrop}
          onDragOver={onDragOver}
        >
          <h2 className='done-col py-2.5 px-0 bg-[#0cf0b3]'>Done</h2>
          {
            tasks.length > 0 && tasks.map((task) => (
              task.status === DONE && <div
                onDrag={(e) => handleDrag(e, task)}
                draggable
                key={task.id}
                className='task-item'>
                {task.title}
                <div>
                  <span className='btn'
                    onClick={() => updateTask(task)}
                  >✏️</span>
                  <span className='btn'
                    onClick={(e) => deleteTask(task)}
                  >🗑️</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
<TodoApp/>
    </>



  );
}

export default TodoDragDrop;


const TodoApp = ()=>{
    const[value,setValue] = useState("")
const [state,setState] = useState([])
const [show ,setShow] = useState(false)
const [id1 ,setId1] = useState(null)
const handleAdd = (e)=>{
e.preventDefault()
if(value === '') return alert("fill")
let obj = {
    title:value,
    id:Date.now()
}
setState((pre)=>[...pre,obj])
setValue("")
}

const handleUpdate = (e)=>{
    e.preventDefault()
    let obj =state.map((val,id)=>{
        if(val.id === id1){
            return {...val,title:value}
        }
        return val
    })
    setState(obj)
    setShow(false)
    setValue("")
    }

const deleteData = (did)=>{
const remData = state.filter((val)=>val.id !== did)
setState(remData)
}

const updateData= (id)=>{
setShow(true)
const data = state.find((val)=>{
    return val.id === id
})
console.log(data)
setValue(data.title)
setId1(id)

}
console.log(id1)

return(
    <>
      <div className="container mx-auto mt-12">
<div className='max-w-[500px] mx-auto'>
<input 
type='text'
placeholder='Todo...'
required
value={value}
onChange={(e)=>setValue(e.target.value)}
className='w-full p-4 bg-gray-100 outline-none focus:outline-blue-500 rounded-md'/>
{(!show) &&
                    
                    <button
                        onClick={handleAdd}
                        className='my-2 bg-gray-800 text-white py-1.5 px-8 rounded-lg'>Add</button>
}

{(show) &&           
                        <button
                            onClick={handleUpdate}
                            className='my-2 bg-gray-800 text-white py-1.5 px-8 rounded-lg'>Edit</button>}



</div>


<div className='max-w-[900px] mx-auto my-10'>
<div className='grid sm:grid-cols-3 xl:grid-cols-4 gap-4'>
{state.length >0 && state.map((val,i)=>{
    return(
        <>
        <div
        key={val.id}
         className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{val.title}</div>
         
        </div>
        <div className="px-6 pt-4 pb-2">
          <button 
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          onClick={()=>updateData(val.id)}
          >
          Edit 
          </button>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          onClick={()=>deleteData(val.id)}>
          Delete
          </button>

        </div>
      </div>
        </>
    )
})}
</div>
</div>
      </div>  
    </>
)

}