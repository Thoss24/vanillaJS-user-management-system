<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/index.css" />
    <title>User Management System</title>
  </head>
  <body>
    <header>
        <h2>User Management System</h2>
    </header>
    <div class="form-container">
      <form action="" class="new-user-form">
        <legend>Add new user</legend>
        <div class="input-section">
          <label for="name" id="name-label">Name:</label>
          <input type="text" id="name" name="name" onblur="toggleNewUserFormDisabled()"/>
        </div>
        <div class="input-section">
          <label for="email" id="email-label">Email:</label>
          <input type="text" id="email" name="email" onblur="toggleNewUserFormDisabled()"/>
        </div>
        <div class="input-section">
          <label for="position">Position</label>
          <select name="position" id="position">
            <option value="Lecturer">Lecturer</option>
            <option value="Reader">Reader</option>
            <option value="Senior Lecturer">Senior Lecturer</option>
            <option value="Professor">Professor</option>
          </select>
        </div>
        <div>
          <button type="button" id="add-user-button" disabled="false">Add</button>
        </div>
      </form>
    </div>
    <div id="filter-users-container">
      <div>
      <label for="select-users">Filter users:</label>
      <select name="select-users" id="select-users" onchange="displayUsers()">
        <option value="All">All</option>
        <option value="Lecturer">Lecturer</option>
        <option value="Reader">Reader</option>
        <option value="Senior Lecturer">Senior Lecturer</option>
        <option value="Professor">Professor</option>
      </select>
      </div>
    </div>
    <div id="users-list"></div>

    <script src="../js/users.js"></script>
    <script src="../js/addUser.js"></script>
    <script src="../js/newUserFormValidation.js"></script>
  </body>
</html>
