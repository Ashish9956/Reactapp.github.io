import "./App.css";
import Card from "./component/Card";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from "./component/Spinner";
function App() {
const url="https://api.gyanibooks.com/library/get_dummy_notes/";
const [Data,setData]=useState([]);
const [loading,setloading]=useState(true);
async function fetchData(){
    setloading(true);
    const {data}=await axios.get(url);
    // console.log(output);
    console.log(data);
    setData(data);
    setloading(false);

}
useEffect(()=>{
    fetchData();
},[])
  return (
    <div className="w-full h-screen flex-col backdrop-blur-lg bg-purple-50 justify-center justify-items-center items-center mt-auto border-collapse border-stone-100">
      <h1 className="flex justify-center text-xl font-bold ">This is my react project</h1>
      <div className="flex justify-center mt-4">
        {
          loading?(<Spinner/>):(<Card Data={Data}/>)
        }
        
      </div>
    </div>
  );
}

export default App;
