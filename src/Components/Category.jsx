import React, { useEffect, useState } from 'react'
import Widget from './Widget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState } from 'recoil'
import { showAddWidgetScreen } from '../atoms/dashboardAtom'

const Category = ({ categoryName, widgets }) => {
    const [show, setShow] = useRecoilState(showAddWidgetScreen);

    useEffect(() => {
        console.log("redered : Category")

    }, [])

    const handleAddWidget = () => {
        setShow(true)
        console.log("handleAddWidget")
    }

    return (
        <div>
            <h2 className='text-xl font-bold my-1'>
                {categoryName ? categoryName : "No category name"}
            </h2>
            <div className='flex flex-row gap-3'>
                {widgets && widgets.map((elem, index) => {

                    return <Widget key={index} i={index} title={elem.widgetName} isGraph={elem.isGraph} text={elem.widgetText} categoryName={categoryName} />
                })}
                <div className='h-[30vh] w-1/3 flex justify-center items-center bg-white opacity-70 py-2 px-5 rounded-2xl'>
                    <div className='px-5 py-2 text-xl border-gray-300 border-2 rounded-xl text-gray-600 hover:border-gray-800 hover:text-black cursor-pointer '
                        onClick={handleAddWidget} >
                        <FontAwesomeIcon icon={faPlus} className='mr-5' />Add Widget
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category