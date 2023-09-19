//Probabiliadyestadictica

const Algebra = [
    {name: 'Parcial' , fecha: '11-noviembre', fechaReal:'2023-11-04'},
    {name: '1er Recu' , fecha: '25-noviembre', fechaReal:'2023-11-25'},
    {name: '2do Recu' , fecha: '14-diciembre', fechaReal:'2023-12-14'},
    {name: 'Final' , fecha: '14-diciembre', fechaReal:'2023-12-14'},
    {name: 'Final' , fecha: '21-diciembre', fechaReal:'2023-12-21'},

  ];
  
  Algebra.sort(function(a, b) {
    return new Date(a.fechaReal) - new Date(b.fechaReal);
  });
  
  // Obtener la fecha actual
  const fechaActual = new Date();
  
  // Calcular los días restantes para cada fecha en el arreglo
  Algebra.forEach((materia) => {
    const fechaReal = new Date(materia.fechaReal);
    const diferencia = fechaReal - fechaActual;
    const diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  
    // Agregar la propiedad "diasRestantes" a cada objeto del arreglo
    materia.diasRestantes = diasRestantes;
  });
  

  
export default Algebra;