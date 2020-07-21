import React from "react";
import {connect} from "react-redux";
import Employees from "./Employees";
import {compose} from "redux";
import {getEmployees, addEmployee, deleteEmployees} from "../../redux/employees-reducer";
import AddEmployee from "./AddEmployee";

class EmployeesComponent extends React.Component {
    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        let addNewEmployee = (values) => {
            this.props.addEmployee(values.employee_name)
        };
        return <div>
            <Employees employees={this.props.employees} deleteEmployees={this.props.deleteEmployees}/>
            <AddEmployee onSubmit={addNewEmployee}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        employees: state.employees.employees
}
};

export default compose(connect(mapStateToProps,{getEmployees, addEmployee, deleteEmployees}))(EmployeesComponent)
