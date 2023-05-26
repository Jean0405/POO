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
