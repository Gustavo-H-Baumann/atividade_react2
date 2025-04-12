import React, {useState} from 'react'

function Contador() {
    const [valor, setvalor] = useState(0);

    return (
      <div className='contador'>
          <button  onClick={() => setvalor(valor + 1)}>Adicionar 1</button>
          <div className='display'>Valor Atual: {valor}</div>
          <button onClick={() => setvalor(valor - 1)}>Subtrair 1</button>
      </div>
    );
}

export default Contador
