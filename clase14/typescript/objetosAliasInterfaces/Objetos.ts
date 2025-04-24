// de esta forma elñ interpreter infiere el tipo de dato
const persona = {
  nombre: "Nicolas",
  edad: 45,
};

// otra forma es decirle nosotros q tipo de dato
const persona3: {
  nombre: string;
  edad: number;
} = {
  nombre: "Nicolas",
  edad: 45,
};