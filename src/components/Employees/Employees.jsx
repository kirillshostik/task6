import React from "react";
import classes from "./Employee.module.css"

let Employees = (props) => {
    return (
        <div  className={classes.employeeContainer}>
            {props.employees.map(employee =>
                <div  key={employee.id} className={classes.employee}>
                    <p>{employee.employee_name}</p>
                    <button onClick={() => {props.deleteEmployees(employee.id, props.employees)}} className={classes.delete}>Delete</button>
                </div>
            )}
        </div>
    )
};

export default Employees;
