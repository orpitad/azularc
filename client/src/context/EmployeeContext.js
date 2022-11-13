import React, {useContext, createContext, useReducer, useEffect} from "react";
import axios from "axios";

const initialState = {
    employee: []
}

const employeeReducer = (state, action) => {
    switch(action.type) {
        case 'SET_EMPLOYEE':
            return {
                ...state,
                employee: action.payload
            } 
        default:
            return state;
    }
}


export const EmployeeContext = createContext(initialState) ;


export const EmployeeProvider = (props) => {
    const [state, dispatch] = useReducer(employeeReducer, initialState);
    // useEffect(() => {
    //     console.log("P")
    //     getEmployees();
    //   }, []);
    const getEmployees = async() => {
        try {
            const result = await axios.get('/api/employees');
                console.log(result)
            if(result.data) {
                dispatch({type: 'SET_EMPLOYEE', payload: result.data});
            }
        } catch (error) {
            console.log(error)
        }
    }
    const createNewEmployee = (emp) => {
        console.log('CRAE', emp)
        dispatch({
            type:"SET_EMPLOYEE",
            payload:[emp, ...state.employee]
        });
    }
    const value = {
        ...state,
        getEmployees,
        createNewEmployee
      }; 

    return (
        <EmployeeContext.Provider value={value}>{props.children}</EmployeeContext.Provider>
    )
}

export function useEmployeeContext() {
    return useContext(EmployeeContext);
}