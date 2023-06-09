class Persona {
  constructor({ nombre, edad, sexo }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
  /**
   * Creación de los GETTERS
   */
  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }
  get getSexo() {
    return this.sexo;
  }
  /**
   * Creación de los SETTERS
   */
  set setNombre(newNombre) {
    this.nombre = newNombre;
  }
  set setEdad(newEdad) {
    this.edad = newEdad;
  }
  set setSexo(newSexo) {
    this.sexo = newSexo;
  }

  saludar() {
    return `Mi nombre es ${this.nombre}`;
  }

  static esMayorDeEdad(ed) {
    if (ed >= 18) {
      return `Es mayor de edad`;
    } else {
      return `Es menor de edad`;
    }
  }
}

class Estudiante extends Persona {
  constructor({ nombre, edad, sexo, carrera }) {
    super({ nombre, edad, sexo });
    this.carrera = carrera;
  }

  estudiar() {
    return `Mi carrera cursada es ${this.carrera}`;
  }
}

/**
 * Obtención de los datos del formulario para ser instanciados a la clase
 */
const mensajeP = document.querySelector("#mensaje");
const FORM = document.querySelector("#form-persona");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  const persona1 = new Persona(data);
  const estudiante1 = new Estudiante(data);

  mensajeP.innerHTML = `
  <p class="text-light fst-italic fw-bold">${estudiante1.saludar()}</p>
  <p class="text-light fst-italic">${estudiante1.estudiar()}</p>
  <p class="text-light fst-italic">${Persona.esMayorDeEdad(
    persona1.getEdad
  )}</p>
  `;
  document.querySelector(".saludo-container").classList.add("show");
  FORM.reset();
});

// PUNTO 2 CLASE ANIMALES
class Animal {
  constructor({ nombre, edad }) {
    this.nombre = nombre;
    this.edad = edad;
  }
  get getNombre() {
    return this.nombre;
  }
  get getEdad() {
    return this.edad;
  }

  hacerSonido() {
    return `El animal hace sonido`;
  }
}

class Perro extends Animal {
  constructor({ nombre, edad, raza }) {
    super({ nombre, edad });
    this.raza = raza;
  }
  get getRaza() {
    return this.raza;
  }

  moverCola() {
    return `El perro está moviendo la cola`;
  }
}

/**
 * Obtención de los datos del formulario para ser instanciados a la clase
 */
const mensajeP2 = document.querySelector("#mensaje2");
const FORM_ANIMAL = document.querySelector("#form-animal");
FORM_ANIMAL.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  const animal1 = new Animal(data);
  const perro1 = new Perro(data);

  mensajeP2.innerHTML = `
  <p class="text-light fst-italic fw-bold">${animal1.getNombre} (${
    perro1.getRaza
  })</p>
  <p class="text-light fst-italic">${animal1.getEdad} años</p>
  <p class="text-light fst-italic">${animal1.hacerSonido()}</p>
  <p class="text-light fst-italic">${perro1.moverCola()}</p>
  `;
  document.querySelector(".saludo-containerAnimal").classList.add("show");
  FORM_ANIMAL.reset();
});

// PUNTO 3 CLASE FIGURA
class Figura {
  constructor({ color, area }) {
    this.color = color;
    this.area = area;
  }

  get getColor() {
    return this.color;
  }

  calcularArea() {
    return this.area;
  }
}

class Circulo extends Figura {
  constructor({ color, area, radio }) {
    super({ color, area });
    this.radio = radio;
  }

  get getRadio() {
    return this.radio;
  }

  calcularArea() {
    return Math.trunc(Math.pow(this.radio, 2) * Math.PI);
  }
}

class Rectangulo extends Figura {
  constructor({ color, largo, ancho }) {
    super({ color });
    this.largo = largo;
    this.ancho = ancho;
  }
  calcularArea() {
    return Number(this.largo) * Number(this.ancho);
  }
}

const mensajeP3 = document.querySelector("#mensaje3");
const FORM_FIGURA = document.querySelector("#form-figuraCirculo");
FORM_FIGURA.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  const { color, area } = data;

  const figura1 = new Figura({ color, area });
  const circulo1 = new Circulo(data);

  mensajeP3.innerHTML = `
  <p class="text-light fst-italic fw-bold">Circulo color ${figura1.getColor}</p>
  <p class="text-light fst-italic">Área de la figura <strong>${figura1.calcularArea()}</strong> M²</p>
  <p class="text-light fst-italic">Área del circulo <strong>${circulo1.calcularArea()}</strong> M²</p>
  `;
  document
    .querySelector(".saludo-containerFigura")
    .classList.remove(".saludo-container");
  document.querySelector(".saludo-containerFigura").classList.add("show");
  FORM_FIGURA.reset();
});

const mensajeP4 = document.querySelector("#mensaje4");
const FORM_RECTANGULO = document.querySelector("#form-figuraRectangulo");
FORM_RECTANGULO.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  const rectangulo1 = new Rectangulo(data);

  mensajeP4.innerHTML = `
  <p class="text-light fst-italic"> El área del rectangulo <strong>${rectangulo1.calcularArea()}</strong> M²</p>
  `;
  document
    .querySelector(".saludo-containerRectangulo")
    .classList.remove(".saludo-container");
  document.querySelector(".saludo-containerRectangulo").classList.add("show");
  FORM_RECTANGULO.reset();
});

// PUNTO 4 CLASE VEHICULO
class Vehiculo {
  constructor({ marca, modelo, velocidad }) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }

  get getMarca() {
    return this.marca;
  }
  get getModelo() {
    return this.modelo;
  }
  get getVelocidad() {
    return this.velocidad;
  }

  acelerar() {
    return Number(this.velocidad) + 10;
  }

  static convertirKmHEnMph(velocidad) {
    return Number(velocidad) / 1.60934;
  }
}

class coche extends Vehiculo {
  constructor({ velocidad, combustible }) {
    super({ velocidad });
    this.combustible = combustible;
  }

  acelerar() {
    return Number(this.velocidad) + 20;
  }
}

const mensajeP5 = document.querySelector("#mensaje5");
const FORM_VEHICULO = document.querySelector("#form-vehiculo");
FORM_VEHICULO.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  const vehiculo1 = new Vehiculo(data);
  const coche1 = new coche(data);

  mensajeP5.innerHTML = `
  <p class="text-light fst-italic"> El área del rectangulo <strong>${vehiculo1.acelerar()}  km/h</strong></p>
  <p class="text-light fst-italic"> El área del rectangulo <strong>${coche1.acelerar()} km/h</strong></p>
  <p class="text-light fst-italic"> El área del rectangulo <strong>${Vehiculo.convertirKmHEnMph(
    coche1.getVelocidad
  )} mph</strong></p>
  `;

  console.log(
    vehiculo1.acelerar(),
    coche1.acelerar(),
    Vehiculo.convertirKmHEnMph(coche1.getVelocidad)
  );
  document
    .querySelector(".saludo-containerVehiculo")
    .classList.remove(".saludo-container");
  document.querySelector(".saludo-containerVehiculo").classList.add("show");
  // FORM_VEHICULO.reset();
});

// PUNTO 5 CLASE EMPLEADO
class Empleado {
  static ID = 0;
  constructor({ nombre, edad, sueldo }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldo = sueldo;
    this.ID = Empleado.generarIdEmpleado();
  }

  calcularSalarioAnual() {
    return Number(this.sueldo) * 12;
  }

  static generarIdEmpleado() {
    return Empleado.ID++;
  }
}

class Gerente extends Empleado {
  constructor({ nombre, edad, sueldo, departamento }) {
    super({ nombre, edad, sueldo });
    this.departamento = departamento;
  }

  calcularSalarioAnual() {
    return (Number(this.sueldo) + Number(this.sueldo) * 0.1) * 12;
  }
}

const mensajeP6 = document.querySelector("#mensaje6");
const FORM_EMPLEADO = document.querySelector("#form-empleado");
FORM_EMPLEADO.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));

  const empleado1 = new Empleado(data);
  const gerente1 = new Gerente(data);

  mensajeP6.innerHTML = `
  <p class="text-light fst-italic"> El salario anual del empleado: <strong>${empleado1.calcularSalarioAnual()} COP</strong></p>
  <p class="text-light fst-italic"> El salario anual del gerente: <strong>${gerente1.calcularSalarioAnual()} COP</strong></p>
  <p class="text-light fst-italic"> ID: <strong>${Empleado.generarIdEmpleado()}</strong></p>
  `;

  document
    .querySelector(".saludo-containerEmpleado")
    .classList.remove(".saludo-container");
  document.querySelector(".saludo-containerEmpleado").classList.add("show");
});
