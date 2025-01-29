import React, { useState} from 'react';
import { FaKey,FaCalendarAlt, FaChalkboardTeacher, FaBook, FaUserGraduate, FaUsers, FaNewspaper, FaHome,  } from 'react-icons/fa';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import {Link} from 'react-router-dom'


const SideNav = () => {
  const [academicOpen, setAcademicOpen] = useState(false);
  const [lecturersOpen, setLecturersOpen] = useState(false);

  return (
    <div className="flex flex-col w-64 h-screen bg-blue-800 text-white space-y-5">
      <div className="p-4 text-lg font-bold justify-center">Biomedical Department Administrative System</div>
      <nav className="flex-1">
        <ul className="space-y-5 font-semibold">
        <Link
              to="home"
            >
            <li className="p-2 hover:bg-blue-700 cursor-pointer flex">
                 <FaHome className="mr-2" /> Home
            </li>
        </Link>
        <li className="p-2 hover:bg-blue-700 cursor-pointer flex">
            <FaKey className="mr-2" /> Key Indicators
          </li>
          <li>
            <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-blue-700" onClick={() => setAcademicOpen(!academicOpen)}>
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" /> Academic Calendar
              </span>
              {academicOpen ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            {academicOpen && (
              <ul className="pl-4 transition-all duration-300 ease-in-out">
                <li className="p-2 hover:bg-blue-700">Set Academic Calendar</li>
                <li className="p-2 hover:bg-blue-700">View Academic Calendar</li>
                <li className="p-2 hover:bg-blue-700">Modify Academic Calendar</li>
              </ul>
            )}
          </li>
          <li>
            <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-blue-700" onClick={() => setLecturersOpen(!lecturersOpen)}>
              <span className="flex items-center">
                <FaChalkboardTeacher className="mr-2" /> Lecturers
              </span>
              {lecturersOpen ? <MdExpandLess /> : <MdExpandMore />}
            </div>
            {lecturersOpen && (
              <ul className="pl-4 transition-all duration-300 ease-in-out">
                <li className="p-2 hover:bg-blue-700">View Lecturers Information</li>
                <li className="p-2 hover:bg-blue-700">Add Lecturers</li>
                <li className="p-2 hover:bg-blue-700">Add Lab Assistants</li>
              </ul>
            )}
          </li>
          <li className="p-2 hover:bg-blue-700 cursor-pointer flex">
            <FaBook className="mr-2" /> Course Allocation System
          </li>
          <li className="flex p-2 hover:bg-blue-700 cursor-pointer">
            <FaUserGraduate className="mr-2" /> Student Profiles
          </li>
          <li className="flex p-2 hover:bg-blue-700 cursor-pointer">
            <FaUsers className="mr-2" /> Allocate Career Advisors/Mentors
          </li>
          <li className="flex p-2 hover:bg-blue-700 cursor-pointer">
            <FaBook className="mr-2" /> View Syllabus
          </li>
          <li className="flex p-2 hover:bg-blue-700 cursor-pointer">
            <FaNewspaper className="mr-2" /> View and Update News
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;