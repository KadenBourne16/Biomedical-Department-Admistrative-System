const db = require('../../database/databaseconfiguration'); // Assuming this is your database connection

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
                    externalIndustryNature VARCHAR(50),
                );
            `;

            await db.query(createTableQuery);
        }

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
            qualificationType, yearOfStudy, yearOfCompletion, professionalQualification, professionalAffiliation,
            educationLevel, institution, roles, duties, researchAreas,
            currentResearchArea, researchCollaborations, coursesTaught, courseYear,
            programs, departmentRole, departmentRoleYear,
            externalInstitutions, externalInstitutionsNature, externalIndustry, externalIndustryNature,
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?
        )
    `;

    const values = [
        lecturerData.Firstname,
        lecturerData.MiddleName,
        lecturerData.Lastname,
        lecturerData.Gender,
        lecturerData.Email,
        lecturerData.QualificationType,
        lecturerData.YearOfStudy,
        lecturerData.YearOfCompletion,
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
        lecturerData.CourseYear,
        lecturerData.Programs,
        lecturerData.DepartmentRole,
        lecturerData.DepartmentRoleYear,
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