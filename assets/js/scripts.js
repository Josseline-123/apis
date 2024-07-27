let data;
async function obtenerDatos() {
    const res = await fetch('https://mindicador.cl/api/');
    data = await res.json();

}

const convertirValor = function () {
    const valor = document.querySelector('#valor').value;
    const moneda = document.querySelector('#moneda').value;

    console.log("data:" + data)
    console.log("data{moneda}"+ data[moneda])
    console.log("data{moneda}.valor"+ data[moneda].valor)
    try {
        const valorConvertido = valor / data[moneda].valor;
        console.log('valorConvertido: '+ valorConvertido)

        document.querySelector('#resultado').textContent = `El valor convertido es:
    ${valorConvertido.toFixed(2)}`;
    }
    catch (error) {
        console.log('Hubo un error en la conversion')
    }
}
obtenerDatos();