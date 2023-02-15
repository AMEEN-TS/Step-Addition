import React,{useState} from "react"
import './App.css';
import Output from './Output';
import axios from "axios";
import { BaseUrl } from "./API/BaseUrl";

function App() {

  const [first,setFirst]=useState();
  const [second,setSecond]=useState();
  const[result,setResult]=useState()


  let obj=[{
    name:"ameen",
    place:"sndsv",
    nuber:"asnvsns"
  }]
  const object={
    first,
    second
  }
  const Addition= async()=>{
    console.log(first,second);
    const response=await axios.post(`${BaseUrl}/api/add`,object);
    console.log(response.data.data);
    if(response.data.sucess){
      setResult(response.data.data)
    }
  }






  return (
   <div className='main'>
   <div className="box">
      <div className="header">
     <h2>Step Addition</h2>
      </div>
      <div className='body'>
          <div className='bodyfirst'>
            <p>first Number</p>
            <input type="number" name="first" onChange={(e)=>setFirst(e.target.value)}></input>
          </div>
          <div className='bodysecond'>
          <p>second Number</p>
            <input type="number" name="second" onChange={(e)=>setSecond(e.target.value)}></input>
          </div>
          <div className='button'>
            <button onClick={Addition}>Generate steps </button>
          </div>
      </div>
      <div className='result'>
        <div className='result-body'>
          <div className="dataaa">
            {result?(
              <Output result={result}/>
            ):(
              "no data"
            )}
            
          </div>
        </div>
      </div>
   </div>
   </div>
  );
}

export default App;
