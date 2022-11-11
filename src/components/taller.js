function Taller() {
    /*
        Utiliza una forma simple de sustitución polialfabética 
        La tabla consta de los alfabetos escritos 26 veces en diferentes filas, cada alfabeto desplazado cíclicamente hacia la izquierda en comparación con el alfabeto anterior, correspondiente a los 26 Cifrados César posibles .
        En diferentes puntos del proceso de cifrado, el cifrado utiliza un alfabeto diferente de una de las filas.
        El alfabeto utilizado en cada punto depende de una palabra clave repetitiva.
    */

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
    //s
    function cipherText(str,key){
        let cipher_text="";
    
        for (let i = 0; i < str.length; i++)
        {
            // converting in range 0-25
            let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) %26;
    
            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
    
            cipher_text+=String.fromCharCode(x);
        }
        return cipher_text;
    }
    
    function originalText(cipher_text,key){
        let orig_text="";
      
        for (let i = 0 ; i < cipher_text.length ; i++)
        {
            // converting in range 0-25
            let x = (cipher_text[i].charCodeAt(0) -
                        key[i].charCodeAt(0) + 26) %26;
      
            // convert into alphabets(ASCII)
            x += 'A'.charCodeAt(0);
            orig_text+=String.fromCharCode(x);
        }
        return orig_text;
    }

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

    let str = "JUANESTEBAN";
    let keyword = "CLAVE";
    
    
    let key = generateKey(str, keyword);
    
    let cipher_text = cipherText(str, key);

    return ( 
        <div className="contB">
            <h2>Texto Encriptado con kasiski</h2>
            <p>{cipher_text}</p>
        </div>
     );
}

export default Taller;