# Web-Application-Mimicking-Google-Sheets
Project Structure
plaintext
GoogleSheetsClone/
│
├── index.html
├── styles.css
└── script.js
Step 1: Create index.html
html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Sheets Clone</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="toolbar">
        <!-- Toolbar items will go here -->
    </div>
    <div id="spreadsheet">
        <table id="sheet">
            <!-- Dynamic rows and columns will be generated here -->
        </table>
    </div>
    <script src="script.js"></script>
</body>
</html>
Step 2: Create styles.css
css
body {
    font-family: Arial, sans-serif;
}
#toolbar {
    padding: 10px;
    background: #f1f1f1;
    border-bottom: 1px solid #ccc;
}
#spreadsheet {
    margin: 20px;
}
table {
    border-collapse: collapse;
    width: 100%;
}
    
td, th {
    border: 1px solid #ccc;
    padding: 8px; 
    text-align: left;
    }
}


Step 3: Create script.js
javascript
document.addEventListener('DOMContentLoaded', () => {
    const sheet = document.getElementById('sheet');
    const rows = 20; 
    const cols = 10; 
   Create table rows and cells
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            cell.contentEditable = true;
            cell.addEventListener('blur', () => validateCell(cell));
            row.appendChild(cell);
        }
        sheet.appendChild(row);
    }
});
function validateCell(cell) {
    const value = cell.textContent;
    if (!isNaN(value)) {
        cell.style.backgroundColor = ''; // Valid numeric cell
    } else {
        cell.style.backgroundColor = 'red'; // Invalid numeric cell
    }
}
Step 4: Implement Mathematical Functions
Add these functions in script.js:
javascript
function sum(range) {
    let total = 0;
    for (let cell of range) {
        total += parseFloat(cell.textContent) || 0;
    }
    return total;
}
function average(range) {
    let total = sum(range);
    return total / range.length;
}
function max(range) {
    let values = range.map(cell => parseFloat(cell.textContent) || 0);
    return Math.max(...values);
}
function min(range) {
    let values = range.map(cell => parseFloat(cell.textContent) || 0);
    return Math.min(...values);
}
function count(range) {
    return range.filter(cell => !isNaN(parseFloat(cell.textContent))).length;
}
Step 5: Implement Data Quality Functions
Add these functions in script.js:
javascript
function trim(cell) {
    cell.textContent = cell.textContent.trim();
}
function upper(cell) {
    cell.textContent = cell.textContent.toUpperCase();
}
function lower(cell) {
    cell.textContent = cell.textContent.toLowerCase();
}
function removeDuplicates(range) {
    let uniqueValues = new Set();
    for (let cell of range) {
        uniqueValues.add(cell.textContent);
    }
    return Array.from(uniqueValues);
}

function findAndReplace(range, findText, replaceText) {
    for (let cell of range) {
        cell.textContent = cell.textContent.replace(new RegExp(findText, 'g'), replaceText);
    }
}

Step 6: Add Event Listeners for Interactivity
Update script.js to include event listeners for data entry, validation, and user interactions.

Running Your Project
Open your project folder in a code editor (e.g., Visual Studio Code).

Open index.html in your web browser to see your Google Sheets clone in action.
