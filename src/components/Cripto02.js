import React, { useState } from 'react';

function Cripto02() {
    let mensaje = "LA VIDA ES UN SUEÑO Y LOS SUEÑOS, SUEÑOS SON"
    const abecedario = []
    const descript = []
    const descrLetra = []
    const [data, setData] = useState("");
    var letra = "";
    const abe = {
        0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h",8:"i",9:"j",10:"k",11:"l",12:"m",13:"n",14:"0",15:"p",16:"q",17:"r",18:"s",19:"t",20:"u",21:"v",22:"w",23:"x",24:"y",25:"z",26:"z"
    }
    const respons = []
    //let c01 = (l 11 + k 24) mod 27;
    function cript(m, k) {
        let result =  (m + k )% 27;
        abecedario.push(result)
    }
    cript(11, 24)
    cript(0, 24)
    cript(22, 24)
    cript(8, 24)
    cript(3, 24)
    cript(0, 24)
    cript(4, 24)
    cript(19, 24)
    cript(21, 24)
    cript(13, 24)
    cript(19, 24)
    cript(21, 24)
    cript(4, 24)
    cript(14, 24)
    cript(15, 24)
    cript(25, 24)
    cript(11, 24)
    cript(15, 24)
    cript(19, 24)
    cript(19, 24)
    cript(21, 24)
    cript(4, 24)
    cript(14, 24)
    cript(15, 24)
    cript(19, 24)
    cript(19, 24)
    cript(21, 24)
    cript(4, 24)
    cript(14, 24)
    cript(15, 24)
    cript(19, 24)
    cript(19, 24)
    cript(15, 24)
    cript(13, 24)
    changeName()
    function changeName() {
        for (let index = 0; index < abecedario.length; index++) {
            respons.push(abe[abecedario[index]])   
        }
        console.log(respons)
    }
    for (let index = 0; index < abecedario.length; index++) {
        descriptF(abecedario[index],24)
        
    }
    function descriptF(c, k) {
        let result =  ((c - k )% 27) + 27;
        descript.push(result)
        
    }
    for (let index = 0; index < descript.length; index++) {
        descrLetra.push(abe[descript[index]])
        if(descrLetra[index]===undefined){
            descrLetra[index] = "a";
        }
        letra += descrLetra[index];
    }
    console.log(letra)
    return ( 
        <div>
            <h1>{letra}</h1>
        </div>
     );
}

export default Cripto02;