const db = require('../../database/databaseconfiguration'); // Assuming this is your database connection
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

exports.signuplecturer = async (req, res) => {
    const lecturerData = req.body;
    console.log(lecturerData);

    try {
        // Check if the table exists
        const [tables] = await db.query("SHOW TABLES LIKE 'lecturer'");
        
        // If the table does not exist, create it
        if (tables.length === 0) {
            const createTableQuery = `
                CREATE TABLE lecturer (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    firstName VARCHAR(255),
                    middleName VARCHAR(255),
                    lastName VARCHAR(255),
                    gender VARCHAR(255),
                    email VARCHAR(255),
                    password VARCHAR(255),  // Added password field
                    qualificationType VARCHAR(255),
                    yearOfStudy DATE,
                    yearOfCompletion DATE,
                    professionalQualification VARCHAR(50),
                    professionalAffiliation VARCHAR(255),
                    educationLevel VARCHAR(255),
                    institution VARCHAR(255),
                    roles VARCHAR(50),
                    duties VARCHAR(255),
                    researchAreas VARCHAR(255),
                    currentResearchArea VARCHAR(255),
                    researchCollaborations VARCHAR(255),
                    coursesTaught VARCHAR(255),
                    courseYear DATE,
                    programs VARCHAR(255),
                    departmentRole VARCHAR(255),
                    departmentRoleYear DATE,
                    externalInstitutions VARCHAR(255),
                    externalInstitutionsNature VARCHAR(255),
                    externalIndustry VARCHAR(50),
                    externalIndustryNature VARCHAR(50)
                );
            `;

            await db.query(createTableQuery);
        }

        // Hash the password before inserting
        const hashedPassword = await bcrypt.hash(lecturerData.password, 10);
        lecturerData.password = hashedPassword;

        // Insert the lecturer data
        await insertLecturerData(lecturerData, res);
    } catch (err) {
        console.error('Error:', err);
        return res.status(500).send('Internal Server Error');
    }
};

const insertLecturerData = async (lecturerData, res) => {
    const insertQuery = `
        INSERT INTO lecturer (
            firstName, middleName, lastName, gender, email,
            password, qualificationType, yearOfStudy, yearOfCompletion, professionalQualification, 
            professionalAffiliation, educationLevel, institution, roles, duties, 
            researchAreas, currentResearchArea, researchCollaborations, coursesTaught, 
            courseYear, programs, departmentRole, departmentRoleYear, 
            externalInstitutions, externalInstitutionsNature, externalIndustry, externalIndustryNature
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?
        )
    `;

    const values = [
        lecturerData.Firstname,  // Change to firstName
        lecturerData.MiddleName,  // Change to middleName
        lecturerData.Lastname,    // Change to lastName
        lecturerData.Gender,      // Change to gender
        lecturerData.Email,       // Change to email
        lecturerData.password,    // Use the hashed password
        lecturerData.QualificationType,
        lecturerData.YearOfStudy,  // Ensure this is in the correct format (if needed)
        lecturerData.YearOfCompletion,  // Ensure this is in the correct format (if needed)
        lecturerData.ProfessionalQualification,
        lecturerData.ProfessionalAffiliation,
        lecturerData.EducationLevel,
        lecturerData.Institution,
        lecturerData.Roles,
        lecturerData.Duties,
        lecturerData.ResearchAreas,
        lecturerData.CurrentResearchArea,
        lecturerData.ResearchCollaborations,
        lecturerData.CoursesTaught,
        lecturerData.CourseYear,  // Ensure this is in the correct format (if needed)
        lecturerData.Programs,
        lecturerData.DepartmentRole,
        lecturerData.DepartmentRoleYear,  // Ensure this is in the correct format (if needed)
        lecturerData.ExternalInstitutions,
        lecturerData.ExternalInstitutionsNature,
        lecturerData.ExternalIndustry,
        lecturerData.ExternalIndustryNature
    ];

    try {
        await db.query(insertQuery, values);
        res.status(201).send('Lecturer data inserted successfully');
    } catch (err) {
        console.error('Error inserting lecturer data:', err);
        return res.status(500).send('Internal Server Error');
    }
};
