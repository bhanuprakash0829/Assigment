function taxCalculator(){
    let name = document.getElementById("employname").value;
    let employeeSalary = parseInt(document.getElementById("salary").value);
    //Employee Salary less than 300000
    if(employeeSalary<300000){
            let deduction1=0;
            let deduction2=0;
            document.getElementById("deduction1").value=`${deduction1}`;
            document.getElementById("deduction2").value=`${deduction2}`;
            document.getElementById("totalamount").value= `${name}, you no need to pay tax`;
        }
    //Employee Salary less than 600000
        else if(employeeSalary<600000){
            let deduction1=0;
            let deduction2=(employeeSalary-300000)*0.1;
            let totalamount=deduction1+deduction2;
            document.getElementById("deduction1").value=`${deduction1}`;
            document.getElementById("deduction2").value=`${deduction2}`;
            document.getElementById("totalamount").value=`${name}, you need to pay tax of ${totalamount}`;
        }
    //Employee Salary greater than 600000
        else if(employeeSalary>=600000){
            let deduction1=30000;
            let deduction2=(employeeSalary-600000)*0.2;
            let totalamount=deduction1+deduction2;
            document.getElementById("deduction1").value=`${deduction1}`;
            document.getElementById("deduction2").value=`${deduction2}`;
            document.getElementById("totalamount").value=`${name}, you need to pay tax of ${totalamount}`;
        }
}

