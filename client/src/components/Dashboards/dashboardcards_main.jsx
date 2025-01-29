import React from 'react';
import { FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const Dashboard = () => {
  const lecturers = [
    { name: "Dr. John Smith", position: "Professor", course: "Mathematics" },
    { name: "Ms. Jane Doe", position: "Lecturer", course: "Physics" },
    { name: "Dr. Emily Johnson", position: "Senior Lecturer", course: "Chemistry" },
    { name: "Mr. Michael Brown", position: "Assistant Professor", course: "Biology" },
    { name: "Ms. Sarah Davis", position: "Lecturer", course: "Computer Science" },
  ];

  const students = [
    { name: "Alice Williams", index: "S12345", programme: "Engineering" },
    { name: "Bob Jones", index: "S12346", programme: "Mathematics" },
    { name: "Charlie Brown", index: "S12347", programme: "Physics" },
    { name: "Diana Prince", index: "S12348", programme: "Chemistry" },
    { name: "Ethan Hunt", index: "S12349", programme: "Computer Science" },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Analysis Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2"><FaCalendarAlt className="inline mr-2" /> Academic Event</h2>
          <p>Details about upcoming academic events will be displayed here.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2"><FaChalkboardTeacher className="inline mr-2" /> Proficient Lecturers</h2>
          <ul>
            {lecturers.map((lecturer, index) => (
              <li key={index} className="mb-2">
                {lecturer.name} - {lecturer.position} ({lecturer.course})
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2"><FaUserGraduate className="inline mr-2" /> Best Students</h2>
          <ul>
            {students.map((student, index) => (
              <li key={index} className="mb-2">
                {student.name} - {student.index} ({student.programme})
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;