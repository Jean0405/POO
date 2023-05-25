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
  persona1.saludar();
  const estudiante1 = new Estudiante(data);
  mensajeP.innerHTML = `
  <p class="text-light fst-italic fw-bold">${estudiante1.saludar()}</p>
  <p class="text-light fst-italic">${estudiante1.estudiar()}</p>
  `;
  console.log(estudiante1.estudiar());
});
