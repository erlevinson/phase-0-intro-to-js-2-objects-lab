// Write your solution in this file!
const employee = {
    name: "Eric",
    streeAdddress: "2233 West Medill Ave, Chicago, IL"
}

function updateEmployeeWithKeyAndValue (object, key, value){
    return {
        ...object,
        [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value){
    object[key] = value
    return object
}

function deleteFromEmployeeByKey (object, key, value){
    const newEmployee = {...object}
    newEmployee[key] = value
    return newEmployee
    }

function destructivelyDeleteFromEmployeeByKey  (object, key, value){
    object[key] = value
    return object
}