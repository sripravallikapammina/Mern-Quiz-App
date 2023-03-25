import React from 'react'
import Questions from './Questions'


export default function Quiz() {

  /** Next button event Handler */
  const onNext = () =>{
    console.log("on next button pressed")
  }

  /** Previous button event Handler */
  const onPrev = () => {
    console.log("on prev btn pre")
  }

  return (
    <div className='container'>
       <h1 className='title text-light'> Quiz Application </h1>

       {/** display questions */}
       <Questions/>

       <div className='grid'>
          <button className='btn prev' onClick={onPrev} > Previous </button>
          <button className='btn next' onClick={onNext} > Next </button>
       </div>
    </div>
  )
}
