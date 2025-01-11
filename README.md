# Web-Application-Mimicking-Google-Sheets

1. Spreadsheet Interface:
UI Design: Use HTML and CSS to create a layout that resembles Google Sheets, including the toolbar, formula bar, and cells.

Drag Functions: Implement drag-and-drop functionality using JavaScript libraries like jQuery UI or plain JavaScript.

Cell Dependencies: Ensure that formulas and functions update based on cell dependencies. You can achieve this with a combination of JavaScript and data-binding frameworks like React.

Basic Cell Formatting: Implement formatting options like bold, italics, font size, and color using CSS and JavaScript event listeners.

Row and Column Management: Enable adding, deleting, and resizing rows and columns with JavaScript functions.

2. Mathematical Functions:
SUM, AVERAGE, MAX, MIN, COUNT: Implement these functions using JavaScript. Create custom functions that parse cell values and calculate the desired result.

3. Data Quality Functions:
TRIM, UPPER, LOWER: Implement these text-manipulation functions using JavaScript string methods.

REMOVE_DUPLICATES: Write a JavaScript function to remove duplicate rows based on selected criteria.

FIND_AND_REPLACE: Implement this feature using JavaScript's String.prototype.replace() method and create a user interface for input.

4. Data Entry and Validation:
Data Types: Allow users to enter numbers, text, and dates with input fields.

Validation Checks: Implement checks to ensure numeric cells contain only numbers, using JavaScript's isNaN() function.

5. Testing:
User Testing: Create a test suite to allow users to test the implemented functions with their data.

Result Display: Clearly display the results of function executions within the spreadsheet.

Bonus Features:
Additional Functions: Implement more advanced mathematical and data quality functions as needed.

Complex Formulas: Add support for complex formulas and cell referencing (relative and absolute).

Save and Load: Implement functionality to save and load spreadsheets using localStorage or server-side storage.

Data Visualization: Incorporate libraries like Chart.jsor D3.jsfor creating charts and graphs.

Evaluation Criteria:
Fidelity to Google Sheets UI: Ensure the application's look and feel match Google Sheets.

Functionality: Complete and accurate implementation of features.

Usability: User-friendly and intuitive interface.

Code Quality: Maintainable and well-documented code.

Bonus Features: Implementation of additional features for extra points.

Readme
Datastructures and Tech Stack: Clearly explain the data structures used (e.g., arrays, objects) and the chosen tech stack (e.g., HTML, CSS, JavaScript, React).

Example Tech Stack:
Frontend: HTML, CSS, JavaScript, React

Backend (if needed): Node.js, Express

Data Storage: LocalStorage, MongoDB (optional)

Libraries: jQuery UI, Chart.js, D3.js


HTML
<!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Google Sheets Clone</title> <link rel="stylesheet" href="styles.css"> 
</head>
 <body>
 <div id="toolbar">
 <!-- Toolbar items -->
 </div> <div id="spreadsheet">
 <table id="sheet"> 
<!-- Dynamic rows and columns will be generated here --> </table> 
</div>
 <script src="script.js">
</script>
 </body>
</html>

CSS
body { 
    font-family: Arial, sans-serif; 
} 
#toolbar{ 
    padding: 10px;
  background: #f1f1f1; 
  border-bottom: 1px solid #ccc;
   } 
   #spreadsheet { 
    margin: 20px; 
   } 
   table { 
    border-collapse: collapse; width: 100%; 
    } 
    td, th { 
        border:1px solid #ccc; 
        padding: 8px; 
        text-align: left; 
 }



 Java Script
document.addEventListener('DOMContentLoaded', () => { 
    const sheet = document.getElementById('sheet');
    const rows = 20; 
    const cols = 10; 
      
  // Create table rows and cells 
     for (let i = 0; i < rows; i++) { 
        const row = document.createElement('tr'); 
        for (let j = 0; j < cols; j++) 
            { 
                const cell = document.createElement('td'); 
                cell.contentEditable = true; 
                row.appendChild(cell);
             }
              sheet.appendChild(row); 
            } 
        });
        function validateCell(cell) 
        {
             const value = cell.textContent; 
             if (!isNaN(value)) { 
                cell.style.backgroundColor = ''; 
              // Valid numeric cell
                 } else { 
                    cell.style.backgroundColor = 'red';
                     // Invalid numeric cell
                      } 
                    }

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

