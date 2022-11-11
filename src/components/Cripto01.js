import React, { useState } from 'react';


function Cripto01() {
    //Se busca transposicion simple
    //cifrar
    //const mensaje = "OAAULUVCFEECMOJLQELEAAENLAP";
    
    const [msg, setMsg] = useState("");
    //mensaje sin espacios
    var mensaje = ""; 
    if (msg.length%2===0) {
        mensaje = msg.split(/\s+/).join('');
    }else{
        mensaje = msg.split(/\s+/).join('');
        mensaje = mensaje + "x";
    }

    //dividir la cantidad de letras en la mitad
    //si es impar el bloque1 +1
    //tendria 14 elementos de la variable mensaje
    // y el otro bloque el resto
    let longVar = mensaje.length;
    var bloque1 = "";
    var bloque2= "";
    var criptograma= "";
    var [criptogramaFinal, setCriptogramaFinal] = useState("");

    function paso01() {
        let logBloque1 = longVar/2;
        for (let index = 0; index < logBloque1; index++) {
            bloque1 = bloque1 + mensaje[index];
        }
    }

    function paso02() {
        let logBloque = longVar/2;
        for (let index = logBloque; index < logBloque + logBloque; index++) {
            bloque2 = bloque2 + mensaje[index];
        }
    }

    //intercalar una en una de los bloques a criptograma
    function criptogramaF(){
        let logBloque = longVar/2;
        for (let index = 0; index < logBloque; index++) {
            criptograma = criptograma + bloque1[index] + bloque2[index];
            setCriptogramaFinal(criptograma)
        }
    }
    function ejecutarCripto() {
        paso01();
        paso02();
        criptogramaF();
        bloque1 = "";
        bloque2 = "";
    }
    return ( 
        <div className="cripto01">
            <h1>Escribe la palabra a encriptar</h1>
            <input type="text" name="" onChange={ev => setMsg(ev.target.value)} />
            <h1>Palabra encriptada: {criptogramaFinal}</h1>
            <button onClick={ejecutarCripto}>Encriptar</button>
        </div>
     );
}

export default Cripto01;