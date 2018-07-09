window.onload = inicializar;
//Inicializamos una variable global.
let formUsers;
let refUsers;
let tbodyTableUsers;
let elementDeleteUser;
//Funcion en donde vamos a Ejecutar el registro de usuario
function inicializar() {
    //Seleccionamos el formulario Usuario.
    formUsers = document.getElementById('form-users');
    //Creamos un evento en donde al hacer click ejecutamos la funcion ubmitUsersFirebase
    formUsers.addEventListener('submit', submitUsersFirebase, false);

    tbodyTableUsers = document.getElementById('tbody-table-users');

   /*  Indicamos la base de datos que vamos conectar que 
    Hace referente al hijo del modo raiz de la base de datos */

    refUsers = firebase.database().ref().child('Usuarios');
   
}

//Funcion donde me registro los Usuarios en la base de Datos
const submitUsersFirebase = (event) => {
    event.preventDefault();
    refUsers.push({
        usersEmail: event.target.usersEmail.value,
        usersLastName: event.target.usersLastName.value,
        usersName: event.target.usersName.value,
        usersPassword: event.target.usersPassword.value,
    });
    //Para borrar una vez que guarda los archivos
    formUsers.reset();
}