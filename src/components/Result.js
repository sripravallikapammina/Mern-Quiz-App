import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'

export default function Result() {

  const onRestart = () =>(
    console.log('onReset')
  )
  return (
    <div className='container'>
       <h1 className='title text-light'> Quiz Application </h1>

       <div className='result flex-center'>
        <div className="flex" >
          <span> UserName</span>
          <span className='bold' >Pravallika</span>
        </div>
        <div className="flex" >
          <span> Total Quiz points</span>
          <span className='bold' >50</span>
        </div>
        <div className="flex" >
          <span> Total Questions</span>
          <span className='bold' >05</span>
        </div>
        <div className="flex" >
          <span> Total Attempts </span>
          <span className='bold' >03</span>
        </div>
        <div className="flex" >
          <span> Quiz Result</span>
          <span className='bold' >Passed</span>
        </div> 
       </div>

       <div className='start' >

        <Link className='btn' to={'/'} onClick={onRestart} > Restart </Link>

       </div>
    </div>

  )
}
