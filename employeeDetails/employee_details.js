const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

    const displayEmployees = employees.map((employee) => `<p>${employee.id}, ${employee.name}, ${employee.age}, ${employee.department}, $${employee.salary}</p>`).join("");

    document.getElementById("employeesDetails").innerHTML = totalEmployees;

    function calculateTotalSalaries(){
        const salary = employees.reduce((total, salary) => total + salary.salary, 0);
        alert(`Total Salary is: $${salary}`);
    }

    function displayHREmployees(){
        const hrEmployees = employees.filter((employee) => employee.department === "HR");

        const hrDetail = hrEmployees.map(hr => `<p>${hr.id}, ${hr.name}, ${hr.age}, $${hr.salary}</p>`).join("");
        document.getElementById("employeesDetails").innerHTML = hrDetail;
    }


    function findEmployeeById(id){
        const foundEmployee = employees.find(emp => emp.id === id);
        if(foundEmployee){
            document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}, ${foundEmployee.name}, ${foundEmployee.age}, ${foundEmployee.department}, $${foundEmployee.salary}</p>`;
        }else{
            document.getElementById("employeesDetails").innerHTML = "no employee found with this id";
        }
    }