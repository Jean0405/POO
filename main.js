class Persona {
  constructor({ nombre, edad, sexo }) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }

  saludar() {
    return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y sexo ${this.sexo}`;
  }

  renderPersona() {
    const saludoContainer = document.querySelector(".saludo-container");
    let template = document.createElement("div");
    template.setAttribute(
      "class",
      "saludo col-10 d-flex flex-column justify-content-center align-items-center mt-2 p-3"
    );
    template.innerHTML = `
        <p class="fw-bold text-uppercase text-light">${this.nombre}</p>
        <p class="text-light fst-italic" id>${this.edad} años</p>
        <p class="text-light fst-italic">${this.sexo}</p>
    `;
    document.querySelector(".title-saludo").innerHTML = "SALUDITO";
    saludoContainer.appendChild(template);
  }
}

const persona1 = new Persona({});

const FORM = document.querySelector("#form-persona");
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  const persona1 = new Persona(data);
  persona1.renderPersona();
});
