let employeeArr = [];
let adminDepartment = 0;
let marketingDepartment = 0;
let financeDepartment = 0;
let developDepartment = 0;
let employeeNumberArr = [];

let adminSalary = 0;
let marketingSalary = 0;
let financeSalary = 0;
let develoSalary = 0;
let employeeSalaryArr = [];

let averageSalaryArr = [];

let departmentArr=["Administration","Marketing","Development","Finance"];
//note: in each array, index 0--->Administration, 1---> Marketing, 2---> Development, 3---> Finance

// getting data from local storage
function getEmployee() {
    let jsonArr = localStorage.getItem("allEmployee");
    employeeArr = JSON.parse(jsonArr);
    console.log(employeeArr[0]);
    //return employeeArr
    //console.log(employeeArr);
}
getEmployee();
// calculating the # of employees in each department and 
function numberEmployee() {
    //getEmployee();

    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].department == "Administration") {
            adminDepartment++;

        }
        else if (employeeArr[i].department == "Marketing") {
            marketingDepartment++;
        }
        else if (employeeArr[i].department == "Development") {
            developDepartment++;
        }
        else if (employeeArr[i].department == "Finance") {
            financeDepartment++;
        }
    }
    // putting the values in an array 
    employeeNumberArr[0] = adminDepartment;
    employeeNumberArr[1] = marketingDepartment;
    employeeNumberArr[2] = developDepartment;
    employeeNumberArr[3] = financeDepartment;

    return employeeNumberArr;
}
// calculating the total salary for each department
function totalSalary() {
    //getEmployee();
    for (let i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].department == "Administration") {
            adminSalary += employeeArr[i].salary;
        }
        else if (employeeArr[i].department == "Marketing") {
            marketingSalary += employeeArr[i].salary;
        }
        else if (employeeArr[i].department == "Development") {
            develoSalary += employeeArr[i].salary;
        }
        else if (employeeArr[i].department == "Finance") {
            financeSalary + employeeArr[i].salary;
        }
    }
    employeeSalaryArr[0] = adminSalary;
    employeeSalaryArr[1] = marketingSalary;
    employeeSalaryArr[2] = develoSalary;
    employeeSalaryArr[3] = financeSalary;

    return employeeSalaryArr;

}
// calculating the average salary for each department
function averageSalary() {
    //getEmployee();
    let salaryArr = totalSalary();
    let numberArr = numberEmployee();
    for (let i = 0; i < salaryArr.length; i++) {
        averageSalaryArr[i] = salaryArr[i] / numberArr[i];
    }
    return averageSalaryArr;

}

//rendering 

function render() {
    const container = document.getElementById('informationMain');
    container.innerHTML = '';
    //let emp=getEmployee();
    let salaryArr = totalSalary();
    let numberArr = numberEmployee();
    let averageArr = averageSalary();
    if (employeeArr == null) {
        employeeArr = [];
    }

    //creating div element
    const divEl = document.createElement('div');
    container.appendChild(divEl);

    const tableEl = document.createElement('table');
    divEl.appendChild(tableEl);

    //creating the header of the table
    const headerEl=document.createElement('tr');
    tableEl.appendChild(headerEl);
    
    const head1=document.createElement('th');
    headerEl.appendChild(head1);
    head1.textContent="Department Name";
    //head1.textContent="Department Name";

    const head2=document.createElement('th');
    headerEl.appendChild(head2);
    head1.textContent="Average salary";

    const head3=document.createElement('th');
    headerEl.appendChild(head3);
    head1.textContent="Total Salary";

    

    //display info
    for(let i=0;i<3;i++){
    const headerEl2=document.createElement('tr');
    tableEl.appendChild(headerEl2);

    const departName=document.createElement('td');
    headerEl2.appendChild(departName);
    head1.textContent=departmentArr[i];

    const salar=document.createElement('td');
    headerEl2.appendChild(salar);
    head1.textContent=averageArr[i];

    const totall=document.createElement('td');
    headerEl2.appendChild(totall);
    head1.textContent=salaryArr[i];

    }

}
//getEmployee();
render();
//getEmployee();
//console.log(ge);