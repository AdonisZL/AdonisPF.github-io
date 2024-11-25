
//Función para alternar el modo oscuro
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};


//Crea un botón para cambiar al modo oscuro
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Cambiar a modo oscuro';
darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);

//Seleccionar todos los elementos de la tarjeta y agregar un evento de mouseover y mouseout para cambiar el color de fondo y el color del texto
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#f8f9fa';
        card.style.color = '#007bff';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'initial';
        card.style.color = 'initial';
    });
});

//Agregue la capacidad de agregar detectores de eventos de clic a enlaces de contacto
const contactoLink = document.getElementById('contacto-link');
if (contactoLink) {
    contactoLink.addEventListener('click', () => {
        window.location.href = 'adoniszl@outlook.com';
    });
}


//Obtener el elemento del botón utilizado para mostrar la advertencia
const showAlertButton = document.getElementById('showAlertButton');


//Agregue un detector de eventos de clic para el botón que muestra el mensaje de advertencia
showAlertButton.addEventListener('click', function () {

    alert('Aquí hay algunos consejos importantes sobre los pandas, ¡léalos atentamente!');
});


//Seleccionar elementos del formulario
const contactoForm = document.querySelector('form');

//Obtener el elemento del cuadro de entrada
const correoInput = document.getElementById('correo');

//Agregar detector de eventos de entrada
correoInput.addEventListener('input', function () {
    if (correoInput.value.includes('example.com')) {
        contactoForm.style.backgroundColor = '#ffdddd';
    } else {
        contactoForm.style.backgroundColor = 'initial';
    }
});