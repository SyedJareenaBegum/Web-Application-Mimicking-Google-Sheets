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