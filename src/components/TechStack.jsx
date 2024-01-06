import React from 'react'
import flutter from "../assets/flutter.png";
import appwrite from "../assets/appwrite.png";

const TechStack = () => {
  return (
    <div className='bg-gray-900 rounded-xl justify-center m-16 p-10'>
        <div className='flex justify-center mb-10'>
            <h1 className="text-white text-3xl font-semibold underline">Tech Stack</h1>
        </div>

        <div className='justify-center flex flex-wrap'>
        <img src={flutter} className="m-2" alt="" />
        <img src={appwrite} className="m-2" alt="" />

        </div>
    </div>
  )
}

export default TechStack