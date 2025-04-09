const variableGlobal = "Soy una variable global!";

function funcionExterior() {
  const variableEnFuncionExterior = "Estoy en la función exterior!";

  function funcionInterior() {
    const variableEnFuncionInterior = "Estoy en la función interior!";

    console.log(variableEnFuncionInterior); // Se puede encontrar en la función Interior
    console.log(variableEnFuncionExterior); // Se puede encontrar en la función Exterior
    console.log(variableGlobal); // Se puede encontrar en el scope global
  }

  funcionInterior();
}

funcionExterior();