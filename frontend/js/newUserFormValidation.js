const toggleNewUserFormDisabled = () => {
    const nameInputField = document.getElementById('name');
    const nameInputLabel = document.getElementById('name-label')

    const emailInputField = document.getElementById('email');
    const emailInputLabel = document.getElementById('email-label')

    const addUserButton = document.getElementById('add-user-button');

    let nameValid = nameInputField.value.length >= 1;
    let emailValid = emailInputField.value.includes('@');

    if (nameValid && emailValid) {
        addUserButton.disabled = false
    }

    if (!nameValid) {
        addUserButton.disabled = true
        nameInputLabel.style.color = "#8B0000"
        nameInputLabel.textContent = "Invalid!"
    } else {
        nameInputLabel.style.color = ""
        nameInputLabel.textContent = "Name: "
    }

    if (!emailValid) {
        addUserButton.disabled = true
        emailInputLabel.style.color = "#8B0000"
        emailInputLabel.textContent = "Invalid!"
    } else {
        emailInputLabel.style.color = ""
        emailInputLabel.textContent = "Email: "
    }
   
}
