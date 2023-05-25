const FisicaI = [
    {name: 'parcial' , fecha: '6-junio', fechaReal:'2023-06-06'},
    {name: 'parcial' , fecha: '4-julio', fechaReal:'2023-07-04'},
    {name: 'final' , fecha: '6-julio', fechaReal:'2023-07-06'},
    {name: 'final' , fecha: '13-julio', fechaReal:'2023-07-13'},
    {name: 'final' , fecha: '20-julio', fechaReal:'2023-07-20'},
    {name: 'final' , fecha: '27-julio', fechaReal:'2023-07-27'},
    {name: 'final' , fecha: '3-agosto', fechaReal:'2023-08-03'},
  ];
  
  FisicaI.sort(function(a, b) {
    return new Date(a.fechaReal) - new Date(b.fechaReal);
  });
  
  // Obtener la fecha actual
  const fechaActual = new Date();
  
  // Calcular los días restantes para cada fecha en el arreglo
  FisicaI.forEach((materia) => {
    const fechaReal = new Date(materia.fechaReal);
    const diferencia = fechaReal - fechaActual;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    // Agregar la propiedad "diasRestantes" a cada objeto del arreglo
    materia.diasRestantes = diasRestantes;
  });
  

  
export default FisicaI;