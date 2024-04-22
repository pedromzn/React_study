import {useState} from 'react';

function Form(){


    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name);
        console.log(password);
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`);
        console.log('o usuario ta aí');
    }

    const [name, setName] = useState('Fernanda');
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Meu formulario</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                     { /* value={name} já deixa o valor do input preenchido */ }
                    <input type="text" id="name" name="name" placeholder="Digite seu nome"  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
                
            </form>
        </div>
    )
}

export default Form