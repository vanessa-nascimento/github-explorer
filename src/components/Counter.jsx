import {useState} from 'react';
//tudo do react que começa com use, é um hook
//imutabilidade - não podemos alterar diretamente o valor daquela variavel

export function Counter() {
    const [counter, setCounter] = useState(0);
    
    //let it change - por isso se chama let

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}