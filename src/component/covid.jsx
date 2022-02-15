import React,{useState, useEffect } from 'react'
import './covid.css'

export default function Covid() {

    const [data, getData] = useState([])
    
    const setData = async ()=>{
        try{
          const res =  await fetch('https://data.covid19india.org/data.json')
          const newData = await res.json()
          console.log(newData.statewise);
          getData(newData.statewise);
          
        } catch (err) {
           console.log(err);
        }
      }
      
      useEffect(() => {
        setData()
      }, [])
    
  return (
    <div >
      <h3>COVID-19 Tracker</h3>   
     <table>
    <thead >
      <tr>
        <th className='heading'>STATE</th>
        <th className='heading'>CONFIRMED</th>
        <th className='heading'>RECOVERED</th>
        <th className='heading'>DEATHS</th>
        <th className='heading'>ACTIVE</th>
        <th className='heading'>UPDATED</th>
      </tr>
    </thead>
    
    <tbody>
      {
        data.map((e, index)=>{
          return (
            <tr key={index} className='tr-head'>
        <td className='headings'>{e.state}</td>
        <td className='headings'>{e.confirmed}</td>
        <td className='headings'>{e.recovered}</td>
        <td className='headings'>{e.deaths}</td>
        <td className='headings'>{e.active}</td>
        <td className='headings'>{e.lastupdatedtime}</td>
      </tr>
          )
        })
      }
      
    </tbody>
  </table>

    </div>

  )
}
