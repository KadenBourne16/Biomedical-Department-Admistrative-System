const db = require('../../../database/databaseconfiguration'); // Assuming this is your database connection


exports.signupstudent = async (req, res) => {
    const studentData = req.body;
    console.log(studentData);

    try {
        // Check if the table exists
        const [tables] = await db.query("SHOW TABLES LIKE 'student'");
        
        // If the table does not exist, create it
        if (tables.length === 0) {
            const createTableQuery = `
                CREATE TABLE student (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    indexNo VARCHAR(255),
                    entryMode VARCHAR(255),
                    entryLevel VARCHAR(255),
                    currentLevel VARCHAR(255),
                    program VARCHAR(255),
                    dateOfAdmission DATE,
                    dateOfCompletion DATE,
                    hall VARCHAR(255),
                    prefix VARCHAR(50),
                    firstName VARCHAR(255),
                    middleName VARCHAR(255),
                    lastName VARCHAR(255),
                    gender VARCHAR(50),
                    dateOfBirth DATE,
                    placeOfBirth VARCHAR(255),
                    nationality VARCHAR(255),
                    hometown VARCHAR(255),
                    cityOfBirth VARCHAR(255),
                    mobileNumber VARCHAR(50),
                    personalInformation TEXT,
                    institutionalEmail VARCHAR(255),
                    addressLine VARCHAR(255),
                    addressLine2 VARCHAR(255),
                    addressCountry VARCHAR(255),
                    martialStatus VARCHAR(50),
                    religion VARCHAR(50),
                    digitalAddress VARCHAR(255)
                );
            `;

            await db.query(createTableQuery);
        }

        // Insert the student data
        await insertStudentData(studentData, res);
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).send('Internal Server Error');
    }
};

const insertStudentData = async (studentData, res) => {
    const insertQuery = `
        INSERT INTO student (
            indexNo, entryMode, entryLevel, currentLevel, program,
            dateOfAdmission, dateOfCompletion, hall, prefix, firstName,
            middleName, lastName, gender, dateOfBirth, placeOfBirth,
            nationality, hometown, cityOfBirth, mobileNumber,
            personalInformation, institutionalEmail, addressLine,
            addressLine2, addressCountry, martialStatus, religion,
            digitalAddress
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?
        )
    `;

    const values = [
        studentData.indexNo,
        studentData.entryMode,
        studentData.entryLevel,
        studentData.currentLevel,
        studentData.program,
        studentData.dateOfAdmission,
        studentData.dateOfCompletion,
        studentData.hall,
        studentData.prefix,
        studentData.firstName,
        studentData.middleName,
        studentData.lastName,
        studentData.gender,
        studentData.dateOfBirth,
        studentData.placeOfBirth,
        studentData.nationality,
        studentData.hometown,
        studentData.cityOfBirth,
        studentData.mobileNumber,
        studentData.personalInformation,
        studentData.institutionalEmail,
        studentData.addressLine,
        studentData.addressLine2,
        studentData.addressCountry,
        studentData.martialStatus,
        studentData.religion,
        studentData.digitalAddress
    ];

    try {
        await db.query(insertQuery, values);
        res.status(201).send('Student data inserted successfully');
    } catch (err) {
        console.error('Error inserting student data:', err);
        return res.status(500).send('Internal Server Error');
    }
};