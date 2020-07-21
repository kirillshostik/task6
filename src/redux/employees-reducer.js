import {employeesAPI} from "../api/api";

const SET_EMPLOYEES = 'SET_EMPLOYEES';
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';


let initialState = {
    employees: [],
    id: null
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMPLOYEES: {
            return {
                ...state,
                employees: [...action.employees],
                id: action.employees.length
            }

        }
        case ADD_EMPLOYEE:{
            let employee_name = action.employee_name;
            return {
                ...state,
                employees: [...state.employees, {id: state.id+1, employee_name}],
                id: state.id+1
            }
        }
        case DELETE_EMPLOYEE: {
           return {
               ...state,
               employees: [...action.employees],
               id: state.id
           }
        }
        default:
            return state;
    }
};

export let setEmployees = (employees) => {
    return {type: SET_EMPLOYEES, employees}
};

export let addEmployee = (employee_name) => {
    return {type: ADD_EMPLOYEE, employee_name}
};
export let deleteEmployee = (employees) => {
    return {type: DELETE_EMPLOYEE, employees}
};

export const getEmployees = () => {
    return (dispatch) => {
        employeesAPI.getEmployees().then(data => {
            dispatch(setEmployees(data.data))
        })
    }
};

export const deleteEmployees = (id, employees) => {
    return (dispatch) => {
        let removeIndex = employees.map(employee =>employee.id).indexOf(id);
        ~removeIndex && employees.splice(removeIndex, 1);
        dispatch(deleteEmployee(employees));
    }
};

export default employeesReducer;
