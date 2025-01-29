import React, {useState} from 'react'
import '../style/components.css'

function signup_lecturer() {
  const [lecturerForm, setLecturerForm] = useState({
    "Firsname": "",
    "Lastname": ""
  })
  const [section, setSection] = useState(0)
  const handleNextSection = () => {
    setSection(section + 1)
  }

  const handlePreviousSection = () => {
    setSection(section - 1)
  }

  const renderSection = () => {
    switch(section){
      case 0:
        return(
          <div className='main-container'>
            <h1 className='text-gray-500 text-3xl fo
            nt-semibold'>Personal Information</h1>
            <div className='mt-2 space-y-4'>
              <div>
                <label htmlFor="" className='specialLabel'>First name</label>
                <input type="text" className='specialInputText'/>
              </div>

              <div>
                <label htmlFor="" className='mt-4 specialLabel'>Middle name</label>
                <input type="text" className="specialInputText" />
              </div>
              <div>
                <label htmlFor="" className="specialLabel">Last name</label>
                <input type="text" className="specialInputText" />
              </div>

              <div>
                <button className=''>
                  Previous
                </button>
              </div>
            </div>
          </div>
        )
    }
  }
  return (
    <div className='space-x-4 mt-5'>
      {renderSection()}
    </div>
  )
}

export default signup_lecturer