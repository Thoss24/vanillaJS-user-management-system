
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/index.css" />
    <title>Document</title>
</head>
<body>
    <div class="edit-user-page">
    <form action="" class="edit-user-form">
        <legend>Edit user</legend>
        <div class="input-section">
          <label for="name" id="name-label">Name:</label>
          <input type="text" id="name" name="name"/>
        </div>
        <div class="input-section">
          <label for="email" id="email-label">Email:</label>
          <input type="text" id="email" name="email"/>
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
          <button type="button" id="add-user-button" onclick="editUserHandler()">Edit</button>
        </div>
      </form>
      </div>
      <script type="text/javascript" src="../js/editUser.js"></script>
</body>
</html>