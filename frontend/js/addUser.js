
const addUser = async (data) => {
    const response = await fetch('http://localhost/user-management-system-vanillajs/backend/api.php', {
        method: 'POST',
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Something went wrong!")
    };
}; 

const handleAddUser = async () => {

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const positionField = document.getElementById('position');

    const user = {
        name: nameField.value,
        email: emailField.value,
        position: positionField.value
    };

    await addUser(user)
};

const addUserEventHandler = () => {
    const addUserButton = document.getElementById('add-user-button');

    addUserButton.addEventListener(('click'), handleAddUser)
};
addUserEventHandler()



