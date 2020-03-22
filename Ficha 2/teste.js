function fraseInversa(str) {
    var splitted = str.split(" ");
    var invertida = "";

    splitted.forEach(item => {
        for (let i = item.length - 1; i >= 0; i--) {
            invertida += item[i];
        }
        invertida += " ";
    });
    console.log(invertida)
    return invertida;
}
fraseInversa("Hoje e Domingo");