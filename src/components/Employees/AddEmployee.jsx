import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from "./Employee.module.css"

const addEmployeeForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={classes.addEmployeeForm}>
        <p>Add employee</p>
        <div>
            <label>Name</label>
            <Field
                component={'input'}
                name={'employee_name'}
                type='text'
                placeholder='Name'
            />
        </div>
        <div>
            <button type="submit" disabled={props.pristine || props.submitting}>
                Add
            </button>
            <button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>
                Clear Values
            </button>
        </div>
    </form>
};

export default reduxForm({form: 'addEmployee'})(addEmployeeForm)
