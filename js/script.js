// CREATE AN ARRAY OF EMPLOYEES
let employees = [[99999999, "Carol Jones", 9999, "cjones@techco.com", "Administrative"], 
                 [88888888, "Susie Smith", 8888, "ssmith@techco", "Engineering"], 
                 [77777777, "Lee Hancock", 7777, "lhancock@techco.com", "Executive"], 
                 [66666666, "Janet Franklin", 6666, "jfranklin@techco.com", "Sales"],
                 [55555555, "Karen Hamilton", 5555, "khamilton@techco.com", "Quality Assurance"]];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

empForm.addEventListener('load', () => {
    if (localStorage.length > 0) {
        employees = JSON.parse(localStorage.getItem('empStorage'));
    }
});

// GET DOM ELEMENTS
let empForm = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');
let empCount = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

empForm.addEventListener('load', () => {

    function addTable(employees) {
        let tableBody = document.getElementByTagName("tbody");
    
          let trow = document.createElement('tr');
          tableBody.appendChild(tr);
      
          for (let i = 0; i < 4; i++) {
            let tdcell = document.createElement('td');
            tdcell.innerHTML = "test";
            
            //tdcell.appendChild(document.createTextNode("test"));
            trow.appendChild(tdcell);
          }
    
    }
    addTable();

});



// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    

    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empID, empName, empExt, empEmail, empDept];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empArray = empArray.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    document.querySelector('#addForm').reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        // for debugging
        console.log(e.target.parentNode.parentNode);
        if (confirm(`Are you sure you want to delete employee record?`)) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);

            // REMOVE EMPLOYEE FROM ARRAY
            

            // BUILD THE GRID
            buildGrid();
        }
    }
});



// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT
    count++;
    empCount.value = `(${count})`;

    // STORE THE ARRAY IN STORAGE

    localStorage.setItem('employees', JSON.stringify(employees));

};