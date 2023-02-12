function Employee(employeeID, fullNmae, department, level,imageURL){
    this.employeeID=employeeID;
    this.fullNmae=fullNmae;
    this.department=department;
    this.level=level;
    this.salary= this.salaryCalculate();
    this.imageURL=new Image(100,200);
    this.imageURL.src=imageURL;
    //document.body.appendChild(this.imageURL);
}

Employee.prototype.salaryCalculate=function(){
    if(this.level=="senior"){
        this.salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
        
    }
    else if(this.level=="mid-senior"){
        this.salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    }
    else if(this.level=="Junior"){
        this.salary = Math.floor(Math.random() * (1000 - 500) ) + 500;
    }
    return this.salary;
}

Employee.prototype.netSalary=function(){
    this.salary=this.salary - this.salary*.075;
}

let emplo=[];

let ghaziSamer=new Employee(1000,"Ghazi Samer","Administration", "senior",'./pictures/aa.jpeg' );
let lanaAli=new Employee(1001,"Lana Ali","Finance", "senior",'./pictures/aa.jpeg');
let tamaraAyoub=new Employee(1002,"Tamara Ayoub","Marketing", "senior",'./pictures/aa.jpeg');
let safiWalid =new Employee(1003,"GSafi Walid","Administration", "mid-senior",'./pictures/aa.jpeg');
let omarZaid=new Employee(1004,"Omar Zaid","Development", "senior",'./pictures/aa.jpeg');
let ranaSaleh=new Employee(1005,"Rana Saleh","Development", "Junior",'./pictures/aa.jpeg');
let hadiAhmad=new Employee(1006,"Hadi Ahmad","Finance", "mid-senior",'./pictures/aa.jpeg');

emplo.push(ghaziSamer);
emplo.push(lanaAli);
emplo.push(tamaraAyoub);
emplo.push(safiWalid);
emplo.push(omarZaid);
emplo.push(ranaSaleh);
emplo.push(hadiAhmad);



Employee.prototype.render=function(){
    for(let i=0;i<emplo.length;i++){
        document.write(`full name: ${emplo[i].fullNmae}, salary:  ${emplo[i].salary}<br>`);
    }
}

ghaziSamer.salaryCalculate();
ghaziSamer.netSalary();

lanaAli.salaryCalculate();
lanaAli.netSalary();

tamaraAyoub.salaryCalculate();
tamaraAyoub.netSalary();

safiWalid.salaryCalculate();
safiWalid.netSalary();

omarZaid.salaryCalculate();
omarZaid.netSalary();

ranaSaleh.salaryCalculate();
ranaSaleh.netSalary();

hadiAhmad.salaryCalculate();
hadiAhmad.netSalary();

lanaAli.render();





