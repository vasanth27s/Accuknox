import React, { useEffect } from 'react'
import Graphs from './Graphs'
import { useRecoilState } from 'recoil'
import { permanentData } from '../atoms/dataAtom'

const Widget = ({ title, text, isGraph }) => {
  const [data, setData] = useRecoilState(permanentData)

  useEffect(() => {
    console.log("rendered : Widget")
  }, [])

  return (
    <div className='h-[30vh] w-1/3 bg-white py-2 px-5 rounded-2xl'>
      <div className='flex justify-between items-center mt-1'>
        <h2 className='h-1/6 flex items-center font-semibold text-lg'>{title}</h2>
        {/* Trash icon removed */}
      </div>
      <div className='flex h-5/6'>
        <div className='w-[100%]'>
          {isGraph ? <Graphs graphData={text} /> : <h3 className='mt-3'>{text}</h3>}
        </div>
      </div>
    </div>
  )
}

export default Widget
