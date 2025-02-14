import React, { useState, useEffect } from 'react';
import '../../../../style/components.css';
import '../../../../index.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import Link from react-router-dom

function SignupLecturer() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i);

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [lecturerForm, setLecturerForm] = useState({
    Firstname: "",
    MiddleName: "",
    Lastname: "",
    Gender: "",
    Email: "",
    password: "biomedical_lecturer",
    QualificationType: "",
    YearOfStudy: "",
    YearOfCompletion: "",
    ProfessionalQualification: "",
    ProfessionalAffiliation: "",
    EducationLevel: "",
    Institution: "",
    Roles: "",
    Duties: "",
    ResearchAreas: "",
    CurrentResearchArea: "",
    ResearchCollaborations: "",
    CoursesTaught: "",
    CourseYear: "",
    Programs: "",
    DepartmentRole: "",
    DepartmentRoleYear: "",
    ExternalInstitutions: "",
    ExternalInstitutionsNature: "",
    ExternalIndustry: "",
    ExternalIndustryNature: ""
  });
  const [section, setSection] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLecturerForm({
      ...lecturerForm,
      [name]: value
    });
    setErrorMessages({
      ...errorMessages,
      [name]: ""
    });
  };

  useEffect(() => {
    let timercount;
    if(successMessage === true){
      timercount = setTimeout(() => {
        setSuccessMessage(false);
      }, 3000); // Add a duration for the timeout
    }
    
    return () => clearTimeout(timercount);
  }, [successMessage]);

  const validateFields = () => {
    const errors = {};
    if (section === 0) {
      if (!lecturerForm.Firstname) errors.Firstname = "First Name is required.";
      if (!lecturerForm.Lastname) errors.Lastname = "Last Name is required.";
      if (!lecturerForm.Gender) errors.Gender = "Gender is required.";
      if (!lecturerForm.Email) errors.Email = "Email is required.";
    } else if (section === 1) {
      if (!lecturerForm.QualificationType) errors.QualificationType = "Qualification Type is required.";
    } else if (section === 2) {
      if (!lecturerForm.EducationLevel) errors.EducationLevel = "Education Level is required.";
      if (!lecturerForm.Institution) errors.Institution = "Institution is required.";
    } else if (section === 3) {
      if (!lecturerForm.ResearchAreas) errors.ResearchAreas = "Research Areas are required.";
    } else if (section === 4) {
      if (!lecturerForm.CoursesTaught) errors.CoursesTaught = "Courses Taught is required.";
    } else if (section === 5) {
      if (!lecturerForm.DepartmentRole) errors.DepartmentRole = "Department Role is required.";
    } else if (section === 6) {
      if (!lecturerForm.ExternalInstitutions) errors.ExternalInstitutions = "External Institutions are required.";
    }
    return errors;
  };

  const handleNextSection = () => {
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
    } else {
      setSection(section + 1);
    }
  };

  const handlePreviousSection = () => { setSection(section - 1); };

  const handleSubmitToBackend = async (e) => {
    e.preventDefault();
    const errors = validateFields();
    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
    } else {
      try {
        console.log(lecturerForm);
        const res = await axios.post('http://localhost:3300/bdas/signuplecturer', lecturerForm);
        if(res){
          setSuccessMessage(true);
        }
      } catch (err) {
        console.log("Error occurred", err);
      }
    }
  };

  const renderSection = () => {
    switch (section) {
      case 0:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
          
            <h1 className='text-gray-500 text-3xl font-semibold'>Personal Information</h1>
            <div className='mt-2 space-y-4 flex flex-col items-center w-full max-w-md'>
              <div className="mb-4 w-full">
                <label htmlFor="firstname" className='block text-gray-700 font-bold mb-2'>First Name:</label>
                <input
                  type="text"
                  name="Firstname"
                  id="firstname"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.Firstname}
                  onChange={handleInputChange}
                  required
                />
                {errorMessages.Firstname && <p className="text-red-500">{errorMessages.Firstname}</p>}
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="middlename" className='block text-gray-700 font-bold mb-2'>Middle Name:</label>
                <input
                  type="text"
                  name="MiddleName"
                  id="middlename"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  value={lecturerForm.MiddleName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">Last Name:</label>
                <input
                  type="text"
                  name="Lastname"
                  id="lastname"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  value={lecturerForm.Lastname}
                  onChange={handleInputChange}
                  required
                />
                {errorMessages.Lastname && <p className="text-red-500">{errorMessages.Lastname}</p>}
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender:</label>
                <select
                  name="Gender"
                  id="gender"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.Gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errorMessages.Gender && <p className="text-red-500">{errorMessages.Gender}</p>}
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  value={lecturerForm.Email}
                  onChange={handleInputChange}
                  required
                />
                {errorMessages.Email && <p className="text-red-500">{errorMessages.Email}</p>}
              </div>
              <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
                <div>
                  <button
                    className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                    onClick={handlePreviousSection}
                    disabled={section === 0}
                  >
                    Previous
                  </button>
                </div>
                <div>
                  <button
                    className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                    onClick={handleNextSection}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      // Repeat similar changes for other sections...
      case 1:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
       
            <h1 className='text-gray-500 text-3xl font-semibold'>Academic Information</h1>
            <div className='flex flex-col items-center space-y-4 w-full max-w-md mt-6'>
              <div className="mb-4 w-full">
                <label htmlFor="qualificationType" className="block text-gray-700 font-bold mb-2">Qualification Type:</label>
                <select
                  name="QualificationType"
                  id="qualificationType"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.QualificationType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Qualification</option>
                  <option value="Masters">Masters</option>
                  <option value="PHD">PHD</option>
                </select>
                {errorMessages.QualificationType && <p className="text-red-500">{errorMessages.QualificationType}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="yearOfStudy" className="block text-gray-700 font-bold mb-2">Year of Study:</label>
                <input
                  type="date"
                  name="YearOfStudy"
                  id="yearOfStudy"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.YearOfStudy}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="yearOfCompletion" className="block text-gray-700 font-bold mb-2">Year of Completion:</label>
                <input
                  type="date"
                  name="YearOfCompletion"
                  id="yearOfCompletion"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.YearOfCompletion}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="professionalQualification" className="block text-gray-700 font-bold mb-2">Professional Qualification:</label>
                <input
                  type="text"
                  name="ProfessionalQualification"
                  id="professionalQualification"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  value={lecturerForm.ProfessionalQualification}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="professionalAffiliation" className="block text-gray-700 font-bold mb-2">Professional Affiliation:</label>
                <input
                  type="text"
                  name="ProfessionalAffiliation"
                  id="professionalAffiliation"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  value={lecturerForm.ProfessionalAffiliation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
              <div>
                <button
                  className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                  onClick={handlePreviousSection}
                  disabled={section === 0}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleNextSection}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
          
            <h1 className='text-gray-500 text-3xl font-semibold mb-6'>Educational Information</h1>
            <div className='flex flex-col items-center space-y-4 w-full max-w-md'>
              <div className="mb-4 w-full">
                <label htmlFor="educationLevel" className="block text-gray-700 font-bold mb-2">Education Level:</label>
                <input
                  type="text"
                  name="EducationLevel"
                  id="educationLevel"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.EducationLevel}
                  onChange={handleInputChange}
                />
                {errorMessages.EducationLevel && <p className="text-red-500">{errorMessages.EducationLevel}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="institution" className="block text-gray-700 font-bold mb-2">Institution:</label>
                <input
                  type="text"
                  name="Institution"
                  id="institution"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.Institution}
                  onChange={handleInputChange}
                />
                {errorMessages.Institution && <p className="text-red-500">{errorMessages.Institution}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="roles" className="block text-gray-700 font-bold mb-2">Roles:</label>
                <input
                  type="text"
                  name="Roles"
                  id="roles"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.Roles}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="duties" className="block text-gray-700 font-bold mb-2">Duties:</label>
                <input
                  type="text"
                  name="Duties"
                  id="duties"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.Duties}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
              <div>
                <button
                  className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                  onClick={handlePreviousSection}
                  disabled={section === 0}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleNextSection}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
            
            <h1 className='text-gray-500 text-3xl font-semibold mb-6'>Research Information</h1>
            <div className='flex flex-col items-center space-y-4 w-full max-w-md'>
              <div className="mb-4 w-full">
                <label htmlFor="researchAreas" className="block text-gray-700 font-bold mb-2">Research Areas:</label>
                <input
                  type="text"
                  name="ResearchAreas"
                  id="researchAreas"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.ResearchAreas}
                  onChange={handleInputChange}
                />
                {errorMessages.ResearchAreas && <p className="text-red-500">{errorMessages.ResearchAreas}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="currentResearchArea" className="block text-gray-700 font-bold mb-2">Current Research Area:</label>
                <input
                  type="text"
                  name="CurrentResearchArea"
                  id="currentResearchArea"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.CurrentResearchArea}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="researchCollaborations" className="block text-gray-700 font-bold mb-2">Research Collaborations:</label>
                <input
                  type="text"
                  name="ResearchCollaborations"
                  id="researchCollaborations"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.ResearchCollaborations}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
              <div>
                <button
                  className="border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 w-full"
                  onClick={handlePreviousSection}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleNextSection}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
           
            <h1 className='text-gray-500 text-3xl font-semibold mb-6'>Courses Information</h1>
            <div className='flex flex-col items-center space-y-4 w-full max-w-md'>
              <div className="mb-4 w-full">
                <label htmlFor="coursesTaught" className="block text-gray-700 font-bold mb-2">Courses Taught:</label>
                <input
                  type="text"
                  name="CoursesTaught"
                  id="coursesTaught"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.CoursesTaught}
                  onChange={handleInputChange}
                />
                {errorMessages.CoursesTaught && <p className="text-red-500">{errorMessages.CoursesTaught}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="courseYear" className="block text-gray-700 font-bold mb-2">Year:</label>
                <input
                  type="date"
                  name="CourseYear"
                  id="courseYear"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.CourseYear}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="programs" className="block text-gray-700 font-bold mb-2">Programs:</label>
                <input
                  type="text"
                  name="Programs"
                  id="programs"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.Programs}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
              <div>
                <button
                  className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                  onClick={handlePreviousSection}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleNextSection}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
          
            <h1 className='text-gray-500 text-3xl font-semibold mb-6'>Department Role Information</h1>
            <div className='flex flex-col items-center space-y-4 w-full max-w-md'>
              <div className="mb-4 w-full">
                <label htmlFor="departmentRole" className="block text-gray-700 font-bold mb-2">Role:</label>
                <input
                  type="text"
                  name="DepartmentRole"
                  id="departmentRole"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.DepartmentRole}
                  onChange={handleInputChange}
                />
                {errorMessages.DepartmentRole && <p className="text-red-500">{errorMessages.DepartmentRole}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="departmentRoleYear" className="block text-gray-700 font-bold mb-2">Year:</label>
                <input
                  type="date"
                  name="DepartmentRoleYear"
                  id="departmentRoleYear"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.DepartmentRoleYear}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
              <div>
                <button
                  className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                  onClick={handlePreviousSection}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleNextSection}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className='main-container flex flex-col items-center signupbackground h-screen p-4'>
           
            <h1 className='text-gray-500 text-3xl font-semibold mb-6'>External Links</h1>
            <div className='flex flex-col items-center space-y-4 w-full max-w-md'>
              <div className="mb-4 w-full">
                <label htmlFor="externalInstitutions" className="block text-gray-700 font-bold mb-2">Institutions:</label>
                <input
                  type="text"
                  name="ExternalInstitutions"
                  id="externalInstitutions"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.ExternalInstitutions}
                  onChange={handleInputChange}
                />
                {errorMessages.ExternalInstitutions && <p className="text-red-500">{errorMessages.ExternalInstitutions}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="externalInstitutionsNature" className="block text-gray-700 font-bold mb-2">Description:</label>
                <textarea
                  name="ExternalInstitutionsNature"
                  id="externalInstitutionsNature"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.ExternalInstitutionsNature}
                  onChange={handleInputChange}
                  maxLength={500}
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="externalIndustry" className="block text-gray-700 font-bold mb-2">Industry:</label>
                <input
                  type="text"
                  name="ExternalIndustry"
                  id="externalIndustry"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.ExternalIndustry}
                  onChange={handleInputChange}
                />
                {errorMessages.ExternalIndustry && <p className="text-red-500">{errorMessages.ExternalIndustry}</p>}
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="externalIndustryNature" className="block text-gray-700 font-bold mb-2">Description:</label>
                <textarea
                  name="ExternalIndustryNature"
                  id="externalIndustryNature"
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700'
                  value={lecturerForm.ExternalIndustryNature}
                  onChange={handleInputChange}
                  maxLength={500}
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-8 w-full'>
              <div>
                <button
                  className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                  onClick={handlePreviousSection}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleNextSection}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className='flex flex-col items-center reviewbackground m-0 p-0'>
            <h1 className='text-gray-500 text-3xl font-semibold'>Review Your Information</h1>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>Personal Information</h2>
              <p>First Name: {lecturerForm.Firstname}</p>
              <p>Middle Name: {lecturerForm.MiddleName}</p>
              <p>Last Name: {lecturerForm.Lastname}</p>
              <p>Gender: {lecturerForm.Gender}</p>
              <p>Email: {lecturerForm.Email}</p>
            </div>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>Academic Information</h2>
              <p>Qualification Type: {lecturerForm.QualificationType}</p>
              <p>Year of Study: {lecturerForm.YearOfStudy}</p>
              <p>Year of Completion: {lecturerForm.YearOfCompletion}</p>
              <p>Professional Qualification: {lecturerForm.ProfessionalQualification}</p>
              <p>Professional Affiliation: {lecturerForm.ProfessionalAffiliation}</p>
            </div>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>Education Information</h2>
              <p>Education Level: {lecturerForm.EducationLevel}</p>
              <p>Institution: {lecturerForm.Institution}</p>
              <p>Roles: {lecturerForm.Roles}</p>
              <p>Duties: {lecturerForm.Duties}</p>
            </div>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>Research Information</h2>
              <p>Research Areas: {lecturerForm.ResearchAreas}</p>
              <p>Current Research Area: {lecturerForm.CurrentResearchArea}</p>
              <p>Research Collaborations: {lecturerForm.ResearchCollaborations}</p>
            </div>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>Courses Information</h2>
              <p>Courses Taught: {lecturerForm.CoursesTaught}</p>
              <p>Year: {lecturerForm.CourseYear}</p>
              <p>Programs: {lecturerForm.Programs}</p>
            </div>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>Department Role Information</h2>
              <p>Role: {lecturerForm.DepartmentRole}</p>
              <p>Year: {lecturerForm.DepartmentRoleYear}</p>
            </div>
            <div className='mt-4 w-full max-w-md'>
              <h2 className='text-lg font-semibold'>External Links</h2>
              <p>Institutions: {lecturerForm.ExternalInstitutions}</p>
              <p>Nature: {lecturerForm.ExternalInstitutionsNature}</p>
              <p>Industry: {lecturerForm.ExternalIndustry}</p>
              <p>Nature: {lecturerForm.ExternalIndustryNature}</p>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4 w-full'>
              <div>
                <button
                  className='border-2 border-gray-200 px-6 rounded-md font-semibold hover:bg-gray-600 hover:text-white w-full'
                  onClick={handlePreviousSection}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  className='border-2 border-blue-200 px-6 rounded-md font-semibold hover:bg-blue-600 hover:text-white w-full'
                  onClick={handleSubmitToBackend}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='mt-10 h-screen w-screen'>
    
      {renderSection()}
    </div>
  );
}

export default SignupLecturer;