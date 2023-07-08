import React from 'react'

const Cards = ({id,user,title,category
}) => {
  return (
    <div className='flexborder-none border-4 border-light-blue-500 p-5'>
         <img src="imgres.png" alt=""/>
         <div>
           <h2><span className='  text-blue-500 font-bold'>Id NO. : </span> {id}</h2>
           <h2><span className='  text-blue-500 font-bold'>User  :    </span>{user}</h2>
           <div>
           <span className='  text-blue-500 font-bold'>Title :    </span>{title}
           </div>
           <div>
           <span className='  text-blue-500 font-bold'>Category  :    </span>
            {category} 
           </div>

         </div>
    </div>
  )
}

export default Cards