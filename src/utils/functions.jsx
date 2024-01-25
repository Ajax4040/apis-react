export function validateForm(name, email, message) {
  if (name.length === 0 || email.length === 0 || message.length === 0) {
    return false;
  } else {
    return true;
  }
} //funcion que usare para enviar los datos del formulario a la base de datos

// Función genérica para verificar si alguna propiedad del objeto es una cadena vacía
export function genericValidForm(obj) {
    let flag = false;
  
    // Utiliza Object.values(obj) para obtener un array de los valores del objeto
    Object.values(obj).forEach((element) => {
        console.log(element);
        if (element === '') {
            flag = true;
        }
    });
  
    return flag;
  }
  
