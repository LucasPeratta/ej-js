class Queue {
  cola;
  constructor() {
    this.cola = [];
  }
  enqueue(element) {
    this.cola.push(element);
  }
  dequeue() {
    return this.cola.shift();
  }

  //cambia la cola cola por una cola que recibe
  copiarCola = (cola2) => {
    let i = 0;
    this.cola = [];
    while (this.cola2[i]) {
      this.cola.push(cola2[i++]);
    }
    return this.cola;
  };

  size = () => {
    return this.cola.length;
  };
}

let num = 50000000;

//atender personas (crearle el dni)
const createDni = ({ nombre, nacimiento }) => {
  const dni = {
    nombre: nombre,
    nacimiento: nacimiento,
    numero: num++,
  };

  return dni;
};

const persona0 = {
  nombre: "Lucas",
  nacimiento: "6",
};

const persona1 = {
  nombre: "Franco",
  nacimiento: "5",
};

const persona2 = {
  nombre: "Pablo",
  nacimiento: "10",
};

const colaPersonas = new Queue();

colaPersonas.enqueue(persona0);
colaPersonas.enqueue(persona1);
colaPersonas.enqueue(persona2);

//atender personas
const atenderPersonas = (cant) => {
  const array = [];
  let contador = cant;
  let i = 0;

  if (cant < 1) {
    return [];
  }

  while (contador > 0) {
    let persona = colaPersonas.dequeue();
    let dni = createDni(persona);
    array[i] = dni;
    contador--;
    i++;
  }
  return array;
};

console.log(atenderPersonas(3));
