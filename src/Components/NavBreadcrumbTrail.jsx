import React from 'react'
import { breadcrumb_stack } from '../Normaldata'

const NavBreadcrumbTrail = () => {
    return (
        <div className='my-auto'>
            {breadcrumb_stack.map((elem, index) => {
                return (
                    <span key={index} className='text-gray-500 cursor-pointer'>
                        {index < breadcrumb_stack.length - 1 && (
                            <>
                                {elem}
                                <span className="mx-2">{'>'}</span>
                            </>
                        )}
                    </span>
                )
            })}
            <strong className="text-blue-600">
                {breadcrumb_stack[breadcrumb_stack.length - 1]}
            </strong>
        </div>
    )
}

export default NavBreadcrumbTrail
