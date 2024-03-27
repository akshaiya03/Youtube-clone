import React from 'react'
import { useDispatch } from 'react-redux'
import { togglemenu } from './utils/appslice'


const Head = () => {
 const dispatch=useDispatch()

  const handleSideBar=()=>{
      dispatch(togglemenu())
   }
 
  return (
    <div className='grid grid-flow-col shadow-lg p-3'>
        <div className='flex col-span-1'>

        <div className=''>
        <img 
        className='h-10 p-2 hover:bg-gray-200 hover: rounded-full'
        alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        onClick={()=>handleSideBar()}
        />
        </div>
        <div >
        <img
        className='h-9 p-2 m-1 '
        alt="logo" src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"/>
        </div>
        </div>
        <div className=' col-span-10   px-10'>
        <input 
        className='w-1/2 border border-gray-400  rounded-l-full p-2 mt-2 text-center'
        type="text"/>
        <button className='bg-gray-100 border border-gray-400 rounded-r-full p-2 mt-2 '>
        search
        </button>
        </div>
        <div className='col-span-1'>
            <img 
            className='h-10 p-2 m-2'
            alt="usericon" src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"/>
        </div>
      
    </div>
  )
}

export default Head
