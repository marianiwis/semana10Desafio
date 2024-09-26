// obtengo el valor del localStorage
const storedValue = localStorage.getItem('inputValue');

// obtengo el elem donde se va a mostrar el datazo
const dataSpan = document.getElementById('data');

// verifico si hay algun vcalor almacenado y desp lo muestro
if (storedValue) {
    // mostrar el dato del localStorage en el <span>
    dataSpan.textContent = storedValue;
} else {
    // mostrar mensaje de que no hay datos almacenados (no lo pide pero iafue)
    dataSpan.textContent = 'No hay datos almacenados.';
}
