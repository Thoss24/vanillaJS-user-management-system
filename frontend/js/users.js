// fetch all users
const fetchUsers = async () => {
    const response = await fetch('http://localhost/user-management-system-vanillajs/backend/api.php', {
        method: 'GET'
    });
                                
    if (!response.ok) {
        throw new Error("Something went wrong!")
    };

    const data = await response.json();

    return data
};

// delete user
const deleteUser = async (id) => {
    const response = await fetch('http://localhost/user-management-system-vanillajs/backend/api.php', {
        method: 'DELETE',
        body: JSON.stringify(id)
    });
                                
    if (!response.ok) {
        throw new Error("Something went wrong!")
    };
};

// display users
const displayUsers = async () => {
    
    const data = await fetchUsers();
    const usersList = document.getElementById('users-list');

    const noData = document.createElement('h3')
    
    // remove existing child elements
    while (usersList.firstChild) {
        usersList.removeChild(usersList.firstChild)
    };

    const filteredPosition = document.getElementById('select-users');

    const filteredData = filteredPosition.value === "All" ? data : data.filter((users) => users.position === filteredPosition.value);

    if (filteredData.length === 0 && filteredPosition.value === "All") {
        noData.textContent = "No users in database. Try adding some using the form above!"
        usersList.append(noData)
    };
    if (filteredData.length === 0 && filteredPosition.value !== "All") {
        noData.textContent = `No users of position '${filteredPosition.value}' in database. Try adding some using the form above!`
        usersList.append(noData)
    };

    filteredData.map(element => {
        // user info container
        const userItem = document.createElement('div');
        userItem.className = "user-item";
        userItem.id = element.id;
        
        // user name 
        const nameSection = document.createElement('div');
        nameSection.className = "user-item-details";
        const preName = document.createElement('strong');
        const name = document.createElement('p');
        nameSection.append(preName);
        nameSection.append(name);
        preName.textContent = "Name: ";
        name.textContent = element.name;

        // user position
        const positionSection = document.createElement('div');
        positionSection.className = "user-item-details";
        const prePosition = document.createElement('strong');
        const position = document.createElement('p');
        positionSection.append(prePosition);
        positionSection.append(position);
        prePosition.textContent = "Position: ";
        position.textContent = element.position;

        // user email
        const emailSection = document.createElement('div');
        emailSection.className = "user-item-details";
        const preEmail = document.createElement('strong');
        const email = document.createElement('p');
        emailSection.append(preEmail);
        emailSection.append(email);
        preEmail.textContent = "Email: ";
        email.textContent = element.email;

        // last edited 
        const lastEditedSection = document.createElement('div');
        lastEditedSection.className = "user-item-details";
        const preLastEdited = document.createElement('strong');
        const lastEdited = document.createElement('p');
        lastEditedSection.append(preLastEdited);
        lastEditedSection.append(lastEdited);
        preLastEdited.textContent = "Last Edited: ";
        lastEdited.textContent = element.last_edited;

        // buttons
        const buttonSection = document.createElement('div');
        buttonSection.className = "buttons-section";
        const editButton = document.createElement('button');
        editButton.id = "edit-button";
        editButton.textContent = "Edit";
        const deleteButton = document.createElement('button');
        deleteButton.id = "delete-button";
        deleteButton.textContent = "Delete";
        buttonSection.append(editButton);
        buttonSection.append(deleteButton);

        editButton.addEventListener(('click'), () => {
            window.location.href = `/user-management-system-vanillajs/frontend/views/edit-user.php${"?" + element.id}`
        });

        deleteButton.addEventListener(('click'), () => {
            let confirm = window.confirm(`Are you sure you want to delete '${element.name}' from the database ?`)
            if (confirm === true) {
                deleteUser(element.id)
                location.reload()
            } else {
                return
            }
        });

        userItem.appendChild(nameSection);
        userItem.appendChild(emailSection);
        userItem.appendChild(positionSection);
        userItem.appendChild(lastEditedSection);
        userItem.appendChild(buttonSection);

        usersList.append(userItem);
    });
}
displayUsers()
