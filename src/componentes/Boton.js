import React from 'react';

function Boton ({ texto , esBotonDeClic , manejarClick } ){
    return(
      <button className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick = { manejarClick }>
        {texto}
      </button>
    )
}
export default Boton;
