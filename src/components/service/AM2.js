
//Matemateica discreta
const AM2 = [
    {name: 'Parcial' , fecha: '11-octubre', fechaReal:'2023-10-11'},
    {name: '1er Recu' , fecha: '25-octubre', fechaReal:'2023-10-25'},
    {name: '2do Recu' , fecha: '8-noviembre', fechaReal:'2023-11-08'},
    {name: 'Final' , fecha: '11-diciembre', fechaReal:'2023-12-11'},
    {name: 'Final' , fecha: '18-diciembre', fechaReal:'2023-12-18'},
    {name: 'Final' , fecha: '5-febrero', fechaReal:'2023-02-05'},
    {name: 'Final' , fecha: '19-febrero', fechaReal:'2023-02-19'},
    {name: 'Final' , fecha: '26-febrero', fechaReal:'2023-02-26'},
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