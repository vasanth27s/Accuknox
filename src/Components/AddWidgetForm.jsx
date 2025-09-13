import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isWidgetGraph } from '../selectors/widgetState'
import { categoryWidgetsState } from '../atoms/dashboardAtom'

const AddWidgetForm = () => {
    const [widgets, setWidgets] = useRecoilState(categoryWidgetsState)
    const isWidget = useRecoilValue(isWidgetGraph)
    let tempTitle = "";
    let tempText = "";

    useEffect(() => {

    }, [widgets])

    const handleAddWidget = () => {
        if (!tempTitle || !tempText){
            console.warn("Title or text not found");
            return;
        }
        const updatedWidgets = [
            ...widgets, {
                widgetName: tempTitle,
                isGraph: false,
                widgetText: tempText,
            }
        ]

        setWidgets(updatedWidgets);
    }

    return (
        <div  className={`${isWidget ? "hidden" : ""}`} >
            <div className='p-3 m-2 border-2 border-gray-300 rounded-lg ' >
                <input 
                id='title' 
                type='text' 
                placeholder='Enter New Widget Title' 
                className='w-full h-full focus:outline-none '
                onChange={(e) => tempTitle = e.target.value}
                ></input>
            </div>
            <div className='p-3 m-2 border-2 border-gray-300 rounded-lg' >
                <textarea 
                id='text' 
                type='' 
                placeholder='Enter New Widget Text' 
                className='w-full h-full focus:outline-none '
                onChange={(e) => tempText = e.target.value}
                ></textarea>
            </div>
            <Button text={"Add Widget"} onClickHandler={handleAddWidget} className={`ml-auto w-1/5`} />
        </div>


    )
}

export default AddWidgetForm