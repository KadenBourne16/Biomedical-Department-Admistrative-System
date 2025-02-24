import { useState, useEffect } from "react";
import axios from 'axios';
import SuccessMessageFile from '../../../../components/login_success';
import { useNavigate } from "react-router-dom";
import '../../../../index.css';
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

function SignupStudent() {
  const [formData, setFormData] = useState({
    indexNo: "",
    entryMode: "",
    entryLevel: "",
    currentLevel: "",
    program: "",
    dateOfAdmission: "",
    dateOfCompletion: "",
    hall: "",
    hallName: "",
    hallType: "",
    prefix: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    hometown: "",
    cityOfBirth: "",
    mobileNumber: "",
    institutionalEmail: "",
    addressLine: "",
    addressLine2: "",
    martialStatus: "",
    religion: "",
    password: "biomedical_student"
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutCounter;
    if (successMessage) {
      timeoutCounter = setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    }
    return () => {
      if (timeoutCounter) {
        clearTimeout(timeoutCounter);
      }
    };
  }, [successMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.institutionalEmail.includes('@ktu.edu.gh')) {
      newErrors.institutionalEmail = "Institutional email must contain @ktu.edu.gh";
    }
    if (!/^\d+$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must contain only digits";
    }
    if (formData.prefix === "Mr" && formData.gender === "Female") {
      newErrors.prefix = "Prefix and Gender don't match";
      newErrors.gender = "Gender and prefix don't match";
    }
    if (formData.dateOfAdmission > formData.dateOfCompletion) {
      newErrors.dateOfAdmission = "Date of admission cannot be after date of completion";
      newErrors.dateOfCompletion = "Date of completion cannot be before date of admission";
    }
    if (formData.entryLevel > formData.currentLevel) {
      newErrors.entryLevel = "Entry level cannot be more than current level";
      newErrors.currentLevel = "Current level cannot be more than entry level";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    // Set country and digital address based on formData
    const country = formData.addressLine ? "Ghana" : ""; // Example: Set country based on addressLine
    const digitalAddress = formData.addressLine2 || ""; // Example: Set digital address based on addressLine2

    const dataToSubmit = {
      ...formData,
      addressCountry: country,
      digitalAddress: digitalAddress,
    };

    try {
      const res = await axios.post('http://192.168.205.178:8080/bdas/signupstudent', dataToSubmit);
      if (res) {
        setSuccessMessage(true);
        navigate("/");
      } else {
        console.log("User  not created");
      }
    } catch (err) {
      console.error("Error occurred", err);
      setErrors({ submit: "An error occurred while submitting the form. Please try again." });
    }
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="h-screen">
            <h2 className="text-2xl font-bold mb-4">Program Information</h2>
            <div className="mb-4">
              <label htmlFor="indexNo" className="block text-gray-700 font-bold mb-2">Index No:</label>
              <input
                type="text"
                id="indexNo"
                name="indexNo"
                value={formData.indexNo}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="entryMode" className="block text-gray-700 font-bold mb-2">Entry Mode:</label>
              <select
                id="entryMode"
                name="entryMode"
                value={formData.entryMode}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Entry Mode</option>
                <option value="Direct Entry">Direct Entry</option>
                <option value="Matured Entry">Matured Entry</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="entryLevel" className="block text-gray-700 font-bold mb-2">Entry Level:</label>
              <select
                id="entryLevel"
                name="entryLevel"
                value={formData.entryLevel}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Entry Level</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="currentLevel" className="block text-gray-700 font-bold mb-2">Current Level:</label>
              <select
                id="currentLevel"
                name="currentLevel"
                value={formData.currentLevel}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Current Level</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="program" className="block text-gray-700 font-bold mb-2">Program:</label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Program</option>
                <option value="BTECH Biomedical Engineering">BTECH Biomedical Engineering</option>
                <option value="HND Biomedical Engineering">HND Biomedical Engineering</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfAdmission" className="block text-gray-700 font-bold mb-2">Date of Admission:</label>
              <input
                type="date"
                id="dateOfAdmission"
                name="dateOfAdmission"
                value={formData.dateOfAdmission}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfCompletion" className="block text-gray-700 font-bold mb-2">Date of Completion:</label>
              <input
                type="date"
                id="dateOfCompletion"
                name="dateOfCompletion"
                value={formData.dateOfCompletion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hall" className="block text-gray-700 font-bold mb-2">Residence:</label>
              <select
                id="hall"
                name="hall"
                value={formData.hall}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Residence</option>
                <option value="Apartment">Apartment</option>
                <option value="Hostel">Hostel</option>
              </select>
              {formData.hall === "Apartment" && (
                <div className="mt-2">
                  <label htmlFor="hallName" className="font-semibold">Enter {formData.hall} Address</label>
                  <input
                    type="text"
                    id="hallName"
                    name="hallName"
                    value={formData.hallName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  />
                </div>
              )}
              {formData.hall === "Hostel" && (
                <div className="mt-5">
                  <label htmlFor="hallName">Hostel Name</label>
                  <select
                    id="hallName"
                    name="hallName"
                    value={formData.hallName}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                  >
                    <option value="">Select Hostel</option>
                    <option value="GetFund">GetFund</option>
                    <option value="Universal">Universal</option>
                    <option value="Papobi">Papobi</option>
                    <option value="Elite">Elite</option>
                    <option value="Adehyie">Adehyie</option>
                    <option value="KTwum">K-Twum</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Bio Information</h2>
            <div className="mb-4">
              <label htmlFor="prefix" className="block text-gray-700 font-bold mb-2">Prefix:</label>
              <select
                id="prefix"
                name="prefix"
                value={formData.prefix}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Prefix</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Miss</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="middleName" className="block text-gray-700 font-bold mb-2">Middle Name:</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="placeOfBirth" className="block text-gray-700 font-bold mb-2">Place of Birth:</label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="nationality" className="block text-gray-700 font-bold mb-2">Nationality:</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hometown" className="block text-gray-700 font-bold mb-2">Hometown:</label>
              <input
                type="text"
                id="hometown"
                name="hometown"
                value={formData.hometown}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cityOfBirth" className="block text-gray-700 font-bold mb-2">District:</label>
              <input
                type="text"
                id="cityOfBirth"
                name="cityOfBirth"
                value={formData.cityOfBirth}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-2">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
              {errors.mobileNumber && <p className="text-red-500">{errors.mobileNumber}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="institutionalEmail" className="block text-gray-700 font-bold mb-2">Institutional Email:</label>
              <input
                type="email"
                id="institutionalEmail"
                name="institutionalEmail"
                value={formData.institutionalEmail}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
              {errors.institutionalEmail && <p className="text-red-500">{errors.institutionalEmail}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="addressLine" className="block text-gray-700 font-bold mb-2">Address Line (Postal Address):</label>
              <input
                type="text"
                id="addressLine"
                name="addressLine"
                value={formData.addressLine}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="addressLine2" className="block text-gray-700 font-bold mb-2">Address Line 2 (Digital Address):</label>
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="martialStatus" className="block text-gray-700 font-bold mb-2">Martial Status:</label>
              <select
                id="martialStatus"
                name="martialStatus"
                value={formData.martialStatus}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Martial Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="religion" className="block text-gray-700 font-bold mb-2">Religion:</label>
              <select
                id="religion"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              >
                <option value="">Select Religion</option>
                <option value="Christianity">Christianity</option>
                <option value="Islamic">Islamic</option>
                <option value="Traditionalist">Traditionalist</option>
              </select>
            </div>
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Previous
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="Background1">
      {successMessage && (
        <div>
          <div className={`modal-overlay ${successMessage ? "open" : ""}`}>
            <SuccessMessageFile />
          </div>
        </div>
      )}
      <Link to="/" className="absolute top-4 right-4 text-gray-700 hover:text-blue-500">
        <FaHome className='text-4xl text-blue-500' />
      </Link>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
        {renderStep()}
        {errors.submit && <p className="text-red-500">{errors.submit}</p>}
      </form>
    </div>
  );
}

export default SignupStudent;