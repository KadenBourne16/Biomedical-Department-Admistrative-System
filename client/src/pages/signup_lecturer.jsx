import React, { useState } from 'react';
import '../style/components.css';

function SignupLecturer() {
  const [lecturerForm, setLecturerForm] = useState({
    Firstname: "",
    MiddleName: "",
    Lastname: "",
    Gender: "",
    Email: ""
  });
  const [section, setSection] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLecturerForm({
      ...lecturerForm,
      [name]: value
    });
  };

  const handleNextSection = () => {
    setSection(section + 1);
  };

  const handlePreviousSection = () => {
    setSection(section - 1);
  };

  const renderSection = () => {
    switch (section) {
      case 0:
        return (
          <div className='main-container'>
            <h1 className='text-gray-500 text-3xl font-semibold'>Personal Information</h1>
            <div className='mt-2 space-y-4'>
              <div>
                <label htmlFor="firstname" className='specialLabel'>First Name</label>
                <input
                  type="text"
                  name="Firstname"
                  id="firstname"
                  className='specialInputText'
                  value={lecturerForm.Firstname}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="middlename" className='specialLabel'>Middle Name</label>
                <input
                  type="text"
                  name="MiddleName"
                  id="middlename"
                  className="specialInputText"
                  value={lecturerForm.MiddleName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="lastname" className="specialLabel">Last Name</label>
                <input
                  type="text"
                  name="Lastname"
                  id="lastname"
                  className="specialInputText"
                  value={lecturerForm.Lastname}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="gender" className="specialLabel">Gender</label>
                <select
                  name="Gender"
                  id="gender"
                  className='specialInputText pl-9'
                  value={lecturerForm.Gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="specialLabel">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="specialInputText"
                  value={lecturerForm.Email}
                  onChange={handleInputChange}
                />
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <button
                    className='border-2 border-gray-200 px-4 rounded-md font-semibold hover:bg-gray-600 hover:text-white'
                    onClick={handlePreviousSection}
                    disabled={section === 0}
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white'
                    onClick={handleNextSection}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
      default:
        return null;
    }
  };

  return (
    <div className='space-x-4 mt-5'>
      {renderSection()}
    </div>
  );
}

export default SignupLecturer;