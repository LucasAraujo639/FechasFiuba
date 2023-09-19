//algortimos y programacion II

const FisicaI = [
    {name: 'Parcialito1' , fecha: '29-septiembre', fechaReal:'2023-09-29'},
    {name: 'Parcialito2' , fecha: '30-octubre', fechaReal:'2023-10-30'},
    {name: 'Parcialito3' , fecha: '24-noviembre', fechaReal:'2023-11-24'},
    {name: 'Recu Parcialito1' , fecha: '27-noviembre', fechaReal:'2023-11-27'},
    {name: 'Recu Parcialito2' , fecha: '1-diciembre', fechaReal:'2023-12-01'},
    {name: 'Recu Parcialito3' , fecha: '4-diciembre', fechaReal:'2023-12-04'},
    {name: 'Parcialito(1,2,3)' , fecha: '15-diciembre', fechaReal:'2023-12-15'},    
    {name: 'Final' , fecha: '15-diciembre', fechaReal:'2023-12-15'},
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