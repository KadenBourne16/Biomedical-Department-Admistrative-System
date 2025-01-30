const db = require('../database/databaseconfiguration'); // Assuming this is your database connection
const jwt = require('../middleware/auth0');

exports.signupstudent = (req, res) => {
    const studentData = req.body;
    console.log(studentData);

    // SQL query to check if the table exists
    const checkTableQuery = `
        SELECT to_regclass('public.student');
    `;

    db.query(checkTableQuery, (err, result) => {
        if (err) {
            console.error('Error checking table existence:', err);
            return res.status(500).send('Internal Server Error');
        }

        // If the table does not exist, create it
        if (result.rows[0].to_regclass === null) {
            const createTableQuery = `
                CREATE TABLE student (
                    id SERIAL PRIMARY KEY,
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

            db.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating table:', err);
                    return res.status(500).send('Internal Server Error');
                }

                // After creating the table, insert the student data
                insertStudentData(studentData, res);
            });
        } else {
            // If the table exists, insert the student data
            insertStudentData(studentData, res);
        }
    });
};

const insertStudentData = (studentData, res) => {
    const insertQuery = `
        INSERT INTO student (
            indexNo, entryMode, entryLevel, currentLevel, program,
            dateOfAdmission, dateOfCompletion, hall, prefix, firstName,
            middleName, lastName, gender, dateOfBirth, placeOfBirth,
            nationality, hometown, cityOfBirth, mobileNumber,
            personalInformation, institutionalEmail, addressLine,
            addressLine2, addressCountry, martialStatus, religion,
            digitalAddress
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
            $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
            $21, $22, $23, $24, $25, $26, $27
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

    db.query(insertQuery, values, (err) => {
        if (err) {
            console.error('Error inserting student data:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.status(201).send('Student data inserted successfully');
    });
};