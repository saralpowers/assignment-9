// CREATE AN ARRAY OF EMPLOYEES
let startEmployees = [[99999999, "Carol Jones", 9999, "cjones@techco.com", "Administrative"], 
                       [88888888, "Susie Smith", 8888, "ssmith@techco", "Engineering"], 
                       [77777777, "Lee Hancock", 7777, "lhancock@techco.com", "Executive"], 
                       [66666666, "Janet Franklin", 6666, "jfranklin@techco.com", "Sales"],
                       [55555555, "Karen Hamilton", 5555, "khamilton@techco.com", "Quality Assurance"]];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATING ARRAY

if (localStorage.getItem('employees') !== null) {
    startEmployees = JSON.parse(localStorage.getItem('employees'));
}

// GET DOM ELEMENTS
let empForm = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');
let empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(startEmployees);

// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = parseInt(document.querySelector('#id').value);
    let empName     = document.querySelector('#name').value;
    let empExt      = parseInt(document.querySelector('#extension').value);
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empID, empName, empExt, empEmail, empDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    startEmployees.push(newEmployee);

    // BUILD THE GRID
    buildGrid(startEmployees);

    // RESET THE FORM
    document.querySelector('#addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        // for debugging
        console.log(e.target.parentNode.parentNode);

        // CONFIRM THE DELETE
        if (confirm(`Are you sure you want to delete employee record?`)) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let rowIndex = e.target.parentNode.parentNode.rowIndex;
            
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            //empTable.deleteRow(rowIndex);
            // REMOVE EMPLOYEE FROM ARRAY
            startEmployees.splice(rowIndex - 1, 1);
            
            // BUILD THE GRID
            buildGrid(startEmployees);
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(startEmployees) {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove();

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of startEmployees) {
        tbody.innerHTML += 
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class = "btn btn-sm btn-danger delete">X</button></td>
        </tr>`
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${startEmployees.length})`;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(startEmployees));
};