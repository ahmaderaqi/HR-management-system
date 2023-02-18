let employeeArr = [];

function Employee(fullNmae, department, level, imageURL) {
    this.employeeID = this.getIdNumber();
    this.fullNmae = fullNmae;
    this.department = department;
    this.level = level;
    this.salary = this.salaryCalculate();
    //this.imageURL=new Image(100,200);
    this.imageURL = imageURL;
    //document.body.appendChild(this.imageURL);
    employeeArr.push(this);
}

Employee.prototype.salaryCalculate = function () {
    if (this.level == "Senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;

    }
    else if (this.level == "Mid-Senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    }
    else if (this.level == "Junior") {
        this.salary = Math.floor(Math.random() * (1000 - 500)) + 500;
    }
    return this.salary;
}

Employee.prototype.netSalary = function () {
    this.salary = this.salary - this.salary * .075;
}
let arrId = [];
Employee.prototype.getIdNumber = function () {
    this.employeeID = Math.floor(Math.random() * (9999 - 1000)) + 1000;
    for (let i = 0; i < arrId.length; i++) {
        if (this.employeeID == arrId[i]) {
            this.employeeID = Math.floor(Math.random() * (9999 - 1000)) + 1000;
            i = 0;
        }
    }

    return this.employeeID;

}





//let emplo=[];

// let ghaziSamer=new Employee(1000,"Ghazi Samer","Administration", "senior",'./pictures/aa.jpeg' );
// let lanaAli=new Employee(1001,"Lana Ali","Finance", "senior",'./pictures/aa.jpeg');
// let tamaraAyoub=new Employee(1002,"Tamara Ayoub","Marketing", "senior",'./pictures/aa.jpeg');
// let safiWalid =new Employee(1003,"GSafi Walid","Administration", "mid-senior",'./pictures/aa.jpeg');
// let omarZaid=new Employee(1004,"Omar Zaid","Development", "senior",'./pictures/aa.jpeg');
// let ranaSaleh=new Employee(1005,"Rana Saleh","Development", "Junior",'./pictures/aa.jpeg');
// let hadiAhmad=new Employee(1006,"Hadi Ahmad","Finance", "mid-senior",'./pictures/aa.jpeg');

// emplo.push(ghaziSamer);
// emplo.push(lanaAli);
// emplo.push(tamaraAyoub);
// emplo.push(safiWalid);
// emplo.push(omarZaid);
// emplo.push(ranaSaleh);
// emplo.push(hadiAhmad);



function render() {
    const container = document.getElementById('employee');
    container.innerHTML = '';
    getEmployee();
    if(employeeArr==null){
        employeeArr=[];
    }
    // create a div as a container
    // const divContainer=document.createElement('div');
    //container.appendChild(divContainer);
    for (let i = 0; i < employeeArr.length; i++) {
        const divEl = document.createElement('div');
        container.appendChild(divEl);
        divEl.classList.add("divAttr");


        //display image
        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', employeeArr[i].imageURL);
        imgEl.width = "150";
        imgEl.height = "150";
        imgEl.classList.add("imgAtrr");

        //display name and ID

        const nameEl = document.createElement('h3');
        divEl.appendChild(nameEl);
        nameEl.textContent = `Name: ${employeeArr[i].fullNmae} - ID: ${employeeArr[i].employeeID}`;

        // display department and level
        const departEl = document.createElement('h3');
        divEl.appendChild(departEl);
        departEl.textContent = `Department: ${employeeArr[i].department} - Level: ${employeeArr[i].level}`;

        // salary
        const salaryEl = document.createElement('h3');
        divEl.appendChild(salaryEl);
        salaryEl.textContent = employeeArr[i].salary;


        // hr line
        const hrEl = document.createElement('hr');
        divEl.appendChild(hrEl);

    }

    // if(this.department=="Administration"){
    //     divContainer.classList.add("adminClass");
    // }
    // else if(this.department=="Marketing"){
    //     divdivContainerEl.classList.add("marketClass");
    // }
    // else if(this.department=="Finance"){
    //     divContainer.classList.add("financeClass");
    // }
    // else if(this.department=="Development"){
    //     divContainer.classList.add("deveClass");
    // }

}

let employeeForm = document.getElementById('employeeForm');
employeeForm.addEventListener('submit', addNewEmployee);

function addNewEmployee(e) {
    e.preventDefault();
    let fullName = e.target.fName.value;
    let imgUrl = e.target.url.value;
    let department = e.target.department.value;
    let level = e.target.level.value;

    let newEmplyeee = new Employee(fullName, department, level, imgUrl);
    newEmplyeee.salaryCalculate();
    newEmplyeee.netSalary();
    newEmplyeee.getIdNumber();
    //render();
    let jsonArr = JSON.stringify(employeeArr);
    localStorage.setItem("allEmployee", jsonArr);
    render();
    e.target.fName.value = "";
    e.target.url.value = "";


    

}

function getEmployee() {
    let jsonArr = localStorage.getItem("allEmployee");
    employeeArr = JSON.parse(jsonArr);
    //console.log(employeeArr);
}

getEmployee();
render();


// ghaziSamer.salaryCalculate();
// ghaziSamer.netSalary();

// lanaAli.salaryCalculate();
// lanaAli.netSalary();

// tamaraAyoub.salaryCalculate();
// tamaraAyoub.netSalary();

// safiWalid.salaryCalculate();
// safiWalid.netSalary();

// omarZaid.salaryCalculate();
// omarZaid.netSalary();

// ranaSaleh.salaryCalculate();
// ranaSaleh.netSalary();

// hadiAhmad.salaryCalculate();
// hadiAhmad.netSalary();

// lanaAli.render();





