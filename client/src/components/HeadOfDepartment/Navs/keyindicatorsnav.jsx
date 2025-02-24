import React from 'react'

function KeyIndicatorsNav() {
  return (
    <div>
        <div className=''>
            <ul className='flex flex-row space-x-4 justify-center sm:text-blue-500 mt-10'>
                <li className='sm:hover:text-2xl sm:mt-5 cursor-pointer sm:hover:font-bold'>Indicator 1</li>
                <li className='sm:hover:text-2xl sm:mt-5 cursor-pointer sm:hover:font-bold'>Indicator 2</li>
                <li className='sm:hover:text-2xl sm:mt-5 cursor-pointer sm:hover:font-bold'>Indicator 3</li>
                <li className='sm:hover:text-2xl sm:mt-5 cursor-pointer sm:hover:font-bold'>Indicator 4</li>
            </ul>
        </div>
    </div>
  )
}

export default KeyIndicatorsNav;