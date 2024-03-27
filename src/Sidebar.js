import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen =useSelector(store=> store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='shadow-xl p-4 w-56'>
       <div>
         <h3 className='font-bold'>Home</h3>
         <h3>shorts</h3>
         <h3>Now playing</h3>
         <h3>Trending</h3>
         <h3>Videos</h3>
       </div>
       <div>
         <h2 className='font-bold py-2'>Subscriptions</h2>
         <h3>user</h3>
         <h3>Subscripttion</h3>
         <h3>Movies</h3>
         <h3>Music</h3>
       </div>
       <div>
         <h2 className='font-bold py-2'>Watch Later</h2>
         <h3>shorts</h3>
         <h3>Subscripttion</h3>
         <h3>Recent</h3>
         <h3>Favorites</h3>
       </div>
    </div>
  )
}

export default Sidebar
