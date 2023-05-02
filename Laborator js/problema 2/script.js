function send_data() {
    errList = [];
    hasError = false;

    document.querySelectorAll('.form input').forEach(input => {
        input.classList.remove('error')

        if (input.value.trim() == '') {
            input.classList.add('error');
            const inputName = input.getAttribute('name');
            errList.push(`${inputName} must be entered!`);
            hasError = true;
        }
    })

    const enteredName = document.querySelector('#name');
    const enteredDate = document.querySelector('#birthdate')
    const enteredAge = document.querySelector('#age');
    const enteredEmail = document.querySelector("#email");

    var emailRegex = new RegExp('.+@[A-Za-z]+\.[a-z]+');
    if (emailRegex.test(enteredEmail.value) == false) {
        errList.push("Please enter a valid email!");
        hasError=true;
    }

    var nameRegex = new RegExp('([A-Za-z]+ ){1,}[A-Za-z]+');
    console.log(enteredName.value)
    if (nameRegex.test(enteredName.value) == false) {
        errList.push("Name can only contain letters and spaces!");
        hasError = true;
    }

    setTimeout(() => {
        if(hasError) {
            alert(errList.join('\n'));
        } else {
            alert('OK.');
        }
    })
}
