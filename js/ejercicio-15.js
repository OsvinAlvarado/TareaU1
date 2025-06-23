//Verificación de contraseña
let contraseña = prompt('Ingrese la contraseña: ')
const contraseñaPredefinida = 'UNAH-123456'

if(contraseñaPredefinida === contraseña){
    alert('Su contraseña es correcta');
}else{
    alert('Las contraseñas no coinciden')
}