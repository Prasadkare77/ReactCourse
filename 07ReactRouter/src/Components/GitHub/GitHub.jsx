import { response } from 'express'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Prasadkare77')
    //     .then((response) => response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>GitHub Followers:{data.followers}
    <img className='text-center' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default GitHub
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Prasadkare77')
    return response.json()
}