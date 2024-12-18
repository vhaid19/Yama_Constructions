const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yamavisitors'
});

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e);
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const phone = document.getElementById('Phone').value

    // Perform validation checks
    if (!name || !email || !comment || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if(phone.length > 10){
        alert('Please enter a valid phone number.');
        return
    }

   let ans = numbr()

    if(ans===true){
        alert("Please don't enter any number and symbols")
        return;
    }

    // If validation passes, submit the form
    console.log(`Form submitted with values: name=${name}, email=${email}, comment=${comment}`);
    // You can also send an AJAX request or perform other actions here

    
    setTimeout(() => {
        document.getElementById("myForm").reset();
    }, 1000);
});


let numbr = ()=>{
    const inputValue = document.getElementById('name').value;
    const inputValueAsString = inputValue.toString();
    const isNumber =!isNaN(Number(inputValueAsString));
    return isNumber;
}


// Data storing in database

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
            console.error('Error executing insert query:', err);
        } else {
            console.log('User added successfully, inserted ID:', results);
        }
    });

    // End the connection after query execution is complete
    connection.end();
}


