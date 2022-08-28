    let nombreUsuario = prompt("Nombre de Usuario?");
    let contrasena = prompt("Password");
    if(nombreUsuario.toLowerCase() === "carolina" && contrasena.toLowerCase() === "paladin"){
      alert("Iniciando sesion");
    }else{
      alert("no puedes ingresar");
      
    }

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;
    
    let ganancias = parseInt(prompt("Ingresar el valor total de los Tattoos realizados:"));
    let insumos = parseInt(prompt("Gastos de insumo"));
   
    let total = ((ganancias - iva(ganancias)) - insumos);

    alert(total);