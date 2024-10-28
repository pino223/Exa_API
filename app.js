function Nuevo_Chiste()
{
    fetch('https://v2.jokeapi.dev/joke/Any?lang=es')
    .then(respuesta => respuesta.json())
    .then(datos =>{
        if(datos.type === "single")
        {
            document.getElementById('chiste').innerText = datos.joke
        }
        else
        {
            document.getElementById('chiste').innerText = `${datos.setup} - ${datos.delivery}`
        }
    })
}