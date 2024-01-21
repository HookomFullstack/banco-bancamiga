export const usernameAndPasswordValidate = ({
        values, 
        virtualKeyword,
        errorUsername = 'El campo es requerido', 
        errorPassword = 'El campo clave del correo es requerido' 
    }) => {

    let errors = {}
    
    if (values.username == false) {
        errors.username = errorUsername
    }
    if (values.nroDocument == false) {
        errors.username = errorUsername
    }
    if (values.password == false && virtualKeyword == false) {
        errors.password = errorPassword
    }
    values.nroDocument.replace(/[^0-9]*$/, '')
    return errors

}