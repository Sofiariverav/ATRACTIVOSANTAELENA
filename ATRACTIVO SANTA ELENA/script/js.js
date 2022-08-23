let nombre, email, contraseña;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    console.log('hola');
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value;
    email = document.getElementById('email').value;
    contraseña = document.querySelector('contraseña').value;
    alert(correo)
    ValidarData(nombre, correo, contraseña)
}

function ValidarData(nombre, email, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        alert('error')
        swal("Good job!", "You clicked the button!", "error");
    }
}