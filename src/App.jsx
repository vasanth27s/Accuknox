import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Category from './Components/Category'
import HeadingBar from './Components/HeadingBar'
import AddWidget from './Components/AddWidget'
import { useRecoilValue } from 'recoil'
import { permanentData } from './atoms/dataAtom'

function App() {
    const data = useRecoilValue(permanentData)
    useEffect(() => {
        console.log("redered : App")
    }, [])

    return (
        <>
            <AddWidget />

            <Navbar />
            <HeadingBar />
            <div className='flex flex-col min-h[94vh] m-10 mt-0 p-5 '>
                
                
                {data.categories.map((elem, index) => {
                    return <Category key={index} categoryName={elem.category} widgets={elem.widgets} />
                })}
            </div>

        </>
    )
}

export default App
