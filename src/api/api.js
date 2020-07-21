import * as axios from "axios";

export const employeesAPI = {
    getEmployees() {
        return axios.get('https://cors-anywhere.herokuapp.com/http://dummy.restapiexample.com/api/v1/employees').then(response => {
            return response.data;
        })
    }
};
