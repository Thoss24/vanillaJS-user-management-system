let query = String(window.location.search);

let id = query.slice(1, query.length)

const dateTime = () => {
    const now = new Date()
    const year = now.getFullYear().toString()

    const month = String(now.getMonth() + 1).padStart(2, '0');

    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');

    const minutes = String(now.getMinutes()).padStart(2, '0');

    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dateTimeString = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    return dateTimeString
};

const fetchUser = async () => {
    const response = await fetch(`http://localhost/user-management-system-vanillajs/backend/api.php?id=${id}`, {
        method: 'GET'
    });
                                
    if (!response.ok) {
        throw new Error("Something went wrong!")
    };

    const data = await response.json();

    return data
};

const editUser = async (data) => {
    const response = await fetch(`http://localhost/user-management-system-vanillajs/backend/api.php?id=${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    });
                                
    if (!response.ok) {
        throw new Error("Something went wrong!")
    };
};

const editUserHandler = async () => {

    console.log(id)

    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const positionInput = document.getElementById('position')

    const user_id = id
    const name = nameInput.value
    const email = emailInput.value
    const position = positionInput.value
    const last_edited = dateTime()

    const editedUser = {
        id: user_id,
        name: name,
        email: email,
        position: position,
        last_edited: last_edited
    }

    await editUser(editedUser)
    window.location.href = `/user-management-system-vanillajs/frontend/views/`
}

const displayUser = async () => {

    const data = await fetchUser();

    const name = data[0].name
    const position = data[0].position
    const email = data[0].email
    const last_edited = dateTime()

    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const positionInput = document.getElementById('position')

    nameInput.value = name
    emailInput.value = email
    positionInput.value = position

}
displayUser()


