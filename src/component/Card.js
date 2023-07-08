import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Card = ({Data}) => {

  return (
    <div>
        <h2 className=' text-green-600 font-extrabold text-2xl'>Infromation about The user</h2>
        <div>
          {
            Data.map((d)=>{
              return <Cards {...d}></Cards>
            })
          }
        </div>
    </div>
  )
}

export default Card