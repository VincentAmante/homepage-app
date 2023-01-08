/**
 * File contains various methods for validation forms
 *  - Stored in this file for reusability and centralisation of validation methods
 */

// Validates email based on a regex
export function validateEmail(email: string){
    let emailRegex = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    
    return (emailRegex.test(email)) ? [] : ['Email not considered valid']
}


export function validatePassword(password:string){  
    let errors = []

    // Requirements: 1+ Uppercase, 1+ Lowercase, 1+ Number, special characters [@$!%*?&] allowed, 8+ characters
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[@$!%*?&]?)(?=.*[a-zA-Z]).{8,}$/)
    if (password.length < 8) {
        errors.push('Password must have at least 8 characters')
    }

    if (!regex.test(password)){
        console.log(regex.test(password))
        errors.push('Password must have at least 1 lowercase, 1 uppercase, 1 number each (english characters)')
    }

    return errors
}

// Validates that passwords are equal
export function validatePasswordConfirm(password: string, passwordToConfirm: string){
    return (password === passwordToConfirm) ? [] : ['Passwords are not equal']
}

// Validates that a name is provided
export function validateName(name: string){
    return (name.length >= 1) ? [] : ['You must enter a name here']
}