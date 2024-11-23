const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yamavisitors'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

// Query to fetch existing data from the database
connection.query('SELECT * FROM visiter_info', (err, results) => {
    if (err) {
        console.error('Error executing query:', err.stack);
    } else {
        console.log('Query results:', results);
    }
});

// Fix DOM access
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userComment = document.getElementById("comment");
const submit = document.getElementById("Submit");

// Add event listener correctly (don't call featdata immediately)
submit.addEventListener('click', () => {  
    featdata();
});

// Correctly fetch input values inside the featdata function
function featdata() {
    const userNameValue = userName.value; // Get the actual value from input field
    const userEmailValue = userEmail.value;
    const userCommentValue = userComment.value;

    // Prepare the query
    const insertQuery = `INSERT INTO visiter_info (Name, Email_id, Comments) VALUES (?, ?, ?)`;
    const values = [userNameValue, userEmailValue, userCommentValue];

    // Execute the insert query
    connection.query(insertQuery, values, (err, results) => {
        if (err) {
            console.error('Error executing insert query:', err.stack);
        } else {
            console.log('User added successfully, inserted ID:', results.insertId);
        }
    });

    // End the connection after query execution is complete
    connection.end();
}


