document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    //guardo el valor en el localstorage
    localStorage.setItem('inputValue', inputText);
});