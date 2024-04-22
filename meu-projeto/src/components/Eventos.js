import Button from "./Eventos/Button";

function Eventos({numero}){

    function meuEvento(){
        document.getElementById('Teste').style.color = "red"

        console.log(`Ativado :) ${numero}`);
    }

    function segundoEvento(){
        console.log('ativando o segundo Evento');
    }

    return(
        <div>
            <p id="Teste">Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primero Evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
            <button onClick={meuEvento}>Ativar Evento</button>
        </div>
    )
}

export default Eventos;