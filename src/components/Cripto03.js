function Cripto03() {
    //este no funciona
    const abe = {
        0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h",8:"i",9:"j",10:"k",11:"l",12:"m",13:"n",14:"0",15:"p",16:"q",17:"r",18:"s",19:"t",20:"u",21:"v",22:"w",23:"x",24:"y",25:"z",26:"z"
    }
    const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","z"]
    let mensaje = "ojala que llueva cafe en el campo"
    const palabra = []
    const a = 15
    const b = 3
    const n = 26
    //c = (a * m + b) mod n

    //m = (a*-1 (c - b) ) mod n
    const mensajeNum = {

    }
    run()
    function run() {
       
        for (let index = 0; index < mensaje.length; index++) {
            let letra =  array.find(Element => Element===mensaje[index])
            if (letra) {
                palabra.push(letra)    
            }
            
            
        }
        console.log(palabra)
    }
    return ( 
        <div>
            <h2>Cripto taller 11</h2>
        </div>
     );
}

export default Cripto03;