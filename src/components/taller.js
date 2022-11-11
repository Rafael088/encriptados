
import React, { useState } from 'react';

function Taller() {

    //genera la key de la plabra
    function generateKey(str,key){
            key=key.split("");
            if(str.length === key.length)
                return key.join("");
            else
            {
                let temp=key.length;   
                for (let i = 0;i<(str.length-temp) ; i++)
                {
                    
                    key.push(key[i % ((key).length)])
                }
            }
            return key.join("");
    }
    
    //encripta la palabra
    function cipherText(str,key){
        let cipher_text="";
    
        for (let i = 0; i < str.length; i++){
            let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;
    
            x += 'A'.charCodeAt(0);
    
            cipher_text+=String.fromCharCode(x);
        }
        return cipher_text;
    }
    //desencripta la palabra
    function originalText(cipher_text,key){
        let orig_text="";
      
        for (let i = 0 ; i < cipher_text.length ; i++){
            let x = (cipher_text[i].charCodeAt(0) -
                        key[i].charCodeAt(0) + 26) %26;
            x += 'A'.charCodeAt(0);
            orig_text+=String.fromCharCode(x);
        }
        return orig_text;
    }
    //mayusculas y minusculas
    function LowerToUpper(s){
        let str =(s).split("");
        for(let i = 0; i < s.length; i++)
        {
            if(s[i] === s[i].toLowerCase())
            {
                str[i] = s[i].toUpperCase();
            }
        }
        s = str.toString();
        return s;
    }

    const [str, setStr] = useState("");
    const [keyword, setKeyword] = useState("A");
    
    
    let key = generateKey(str, keyword);
    
    let cipher_text = cipherText(str, key);


    const [desCipeh, setDesCipeh] = useState("");
    let desciphe = originalText(desCipeh, key);

    const handleChange = (e) => {

        setStr(e.target.value)
    }
    const handleChanges = (e) => {

        setKeyword(e.target.value)
    }
    const handleChangeDes = (e) => {

        setDesCipeh(e.target.value)
    }
    return ( 
        <div className="contB">
            <h2>Encriptado con kasiski</h2>
            <p>Solo funciona con mayusculas</p>
            
            <p>Clave</p>
            <input type="text" onChange={handleChanges} />

            <p>Palabra</p>
            <input type="text" onChange={handleChange} />

            <b>Texto encriptado</b>
            <p>{cipher_text}</p>
            <b>Texto desencriptado</b>
            <p>Palabra</p>
            <input type="text" onChange={handleChangeDes} />
            <p>{desciphe}</p>
        </div>
     );
}

export default Taller;