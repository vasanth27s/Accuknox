import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { username } from '../Normaldata'

const NavIcons = () => {
    return (
        <div className='flex my-auto '>
            <div className='my-1 mx-5 cursor-pointer text-gray-500 hover:text-gray-700'>
                <FontAwesomeIcon icon={faBell} className='text-2xl' />
            </div>
            <div className='my-1 mx-5 flex cursor-pointer text-gray-500 hover:text-gray-700'>
                <FontAwesomeIcon icon={faUser} className='text-2xl mx-2'/>
                <div className='mx-2 '>
                    {username}
                </div>
            </div>
        </div>
    )
}

export default NavIcons