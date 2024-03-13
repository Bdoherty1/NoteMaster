# NoteMaster

## Description
This Node.js application, leveraging Inquirer and MySQL, functions as a CMS for effortless management of a company's employee database. Business owners can efficiently view, organize, and plan their company structure with features like:

View departments, roles, and employees.
Add new departments, roles, and employees.
Update employee roles for effective organizational planning.


## Usage

1. **Open the Note Taker:**
   - When you open the Note Taker, you'll be presented with a landing page that includes a link to a notes page.

2. **Access Notes Page:**
   - Click on the link to the notes page, where you will find existing notes listed in the left-hand column.

3. **Enter a New Note:**
   - In the right-hand column, there are empty fields to enter a new note title and the note's text.

4. **Save Note:**
   - After entering a new note title and text, a "Save Note" button and a "Clear Form" button will appear in the navigation at the top of the page.

5. **Save and Display Note:**
   - Clicking on the "Save Note" button will save the new note, and it will appear in the left-hand column with existing notes. The navigation buttons will disappear.

6. **View Existing Note:**
   - Click on an existing note in the list in the left-hand column to view it in the right-hand column.

7. **Create New Note:**
   - Click on the "New Note" button in the navigation to be presented with empty fields for a new note title and text in the right-hand column. The button disappears.

## Installation
No installation required. Simply access the deployed application.


![Example Image](imgs/Screenshot%202024-03-12%20at%207.05.21%20PM.png)
![Example Image](imgs/Screenshot%202024-03-12%20at%207.05.36%20PM.png)

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express

## Future Dev
In the client-side code (client.js), functions like saveNote and clearForm are implemented to handle button actions. The saveNote function sends a POST request to the server to save a new note, while clearForm resets input fields. On the server side (notes.js), routes are defined for retrieving and adding notes, with data being stored in a JSON file. Despite these efforts, the buttons aren't functioning correctly, suggesting a potential disconnect
## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.