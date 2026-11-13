function calcular() {

    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let area = base * altura;
    let perimetro = 2 * base + 2 * altura;

    document.getElementById("area").innerHTML = "El area es: " + area;

    document.getElementById("perimetro").innerHTML = "El perimetro es: " + perimetro;

}