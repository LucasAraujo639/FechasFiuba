const AM2 = [
    {name: 'parcial' , fecha: '5-junio', fechaReal:'2023-06-05'},
    {name: 'final' , fecha: '4-julio', fechaReal:'2023-07-04'},
    {name: 'final' , fecha: '11-julio', fechaReal:'2023-07-11'},
    {name: 'final' , fecha: '1-agosto', fechaReal:'2023-08-01'},
    {name: 'final' , fecha: '8-agosto', fechaReal:'2023-08-08'},
    {name: 'final' , fecha: '15-agosto', fechaReal:'2023-08-15'},
  ];
  
  AM2.sort(function(a, b) {
    return new Date(a.fechaReal) - new Date(b.fechaReal);
  });
  
  // Obtener la fecha actual
  const fechaActual = new Date();
  
  // Calcular los días restantes para cada fecha en el arreglo
  AM2.forEach((materia) => {
    const fechaReal = new Date(materia.fechaReal);
    const diferencia = fechaReal - fechaActual;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    // Agregar la propiedad "diasRestantes" a cada objeto del arreglo
    materia.diasRestantes = diasRestantes;
  });
  

  
export default AM2;