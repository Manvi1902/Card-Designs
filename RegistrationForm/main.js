let fname = document.querySelector(".fname");
let mname = document.querySelector(".mname");
let lname = document.querySelector(".lname");
let male = document.querySelector(".male");
let female = document.querySelector(".female");
let date = document.querySelector(".date");
let email = document.querySelector(".email");
let mobile = document.querySelector(".mobile");
let country = document.querySelector(".country");
let address = document.querySelector(".address");
let city = document.querySelector(".city");
let state = document.querySelector(".state");
let pin = document.querySelector(".pincode");
let agree_check = document.querySelector(".check");
let registerBtn = document.querySelector("#register");

clearValues();

registerBtn.addEventListener('click', function () {
    // window.location.href = "main.html";
    if (!ifAgree()) {
        insertToLocalStorage();
    } else {
        alert("Please agree to the Terms & Conditions");
    }

});

function insertToLocalStorage() {
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("mname", mname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("date", date.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("mobile", mobile.value);
    localStorage.setItem("country", country.value);
    localStorage.setItem("address", address.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("state", state.value);
    localStorage.setItem("pincode", pin.value);

    if (male.checked) {
        localStorage.setItem("gender", 'male');
        console.log(localStorage.getItem("gender"));
    }
    if (female.checked) {
        localStorage.setItem("gender", 'female');
        console.log(localStorage.getItem("gender"));

    }
}

function clearValues() {
    fname.value = "";
    mname.value = "";
    lname.value = "";
    date.value = "";
    email.value = "";
    mobile.value = "";
    country.value = "";
    address.value = "";
    city.value = "";
    state.value = "";
    pin.value = "";
    male.checked = false;
    female.checked = false;
}


function ifAgree() {
    if (agree_check.checked) {
        return true;
    } else {
        return false;
    }
}

// VALIDATION

document.addEventListener('DOMContentLoaded', function() {  
    const form = document.querySelector('form');  
    
    form.addEventListener('submit', function(event) {  
        let valid = true;  
        const email = document.querySelector('.email');  
        const mobile = document.querySelector('.mobile');  
        const pin = document.querySelector('.pincode');  
        const termsCheckbox = document.querySelector('.uncheck');  

        // Clear previous error messages  
        const errorMessages = document.querySelectorAll('.error-message');  
        errorMessages.forEach(msg => msg.remove());  

        // Validate First Name  
        const firstName = document.querySelector('.fname').value.trim();  
        if (!firstName) {  
            valid = false;  
            showErrorMessage('First Name is required.', document.querySelector('.fname'));  
        }  

        // Validate Last Name  
        const lastName = document.querySelector('.lname').value.trim();  
        if (!lastName) {  
            valid = false;  
            showErrorMessage('Last Name is required.', document.querySelector('.lname'));  
        }  

        // Validate Email  
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
        if (!email.value.match(emailPattern)) {  
            valid = false;  
            showErrorMessage('Please enter a valid email address.', email);  
        }  

        // Validate Mobile Number  
        let mobilePattern = /^\+?[\d]{1,3}[-. ]?\(?[\d]{1,4}?\)?[-. ]?[\d]{1,4}[-. ]?[\d]{1,9}$/;  
        if (!mobile.value.match(mobilePattern)) {  
            valid = false;  
            showErrorMessage('Please enter a valid mobile number.', mobile);  
        }  

        // Validate Pin Code  
        const pinPattern = /^[1-9][0-9]{5}$/;  // Assuming 6 digit Indian pin codes  
        if (!pin.value.match(pinPattern)) {  
            valid = false;  
            showErrorMessage('Please enter a valid 6-digit pin code.', pin);  
        }  

        // Check if terms and conditions are agreed to  
        if (!termsCheckbox.checked) {  
            valid = false;  
            alert('You must agree to the terms and conditions.');  
        }  

        // Prevent form submission if any validation fails  
        if (!valid) {  
            event.preventDefault();  
        }  
    });  

    function showErrorMessage(message, inputElement) {  
        const error = document.createElement('span');  
        error.textContent = message;  
        error.classList.add('error-message');  
        error.style.color = 'red'; // Optional: Style for error message  
        inputElement.insertAdjacentElement('afterend', error);  
    }  
});
