let query = String(window.location.search);

let id = query.slice(1, query.length)

// console.log(id)

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

const displayUser = async () => {

    const data = await fetchUser();

    console.log(data)

}
displayUser()

