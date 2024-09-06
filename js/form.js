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
    }, 2);
});


let numbr = ()=>{
    const inputValue = document.getElementById('name').value;
    const inputValueAsString = inputValue.toString();
    const isNumber =!isNaN(Number(inputValueAsString));
    return isNumber;
   
}
