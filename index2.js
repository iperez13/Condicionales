// Ejercicio con Switch, que tan bien te fue en el examen dependiendo de tu nota final de este

var nota;
nota = parseInt(prompt("¿Cuanto sacaste en el examen del 0-10?"));
switch (true){
    case (nota <= 5):
        msg = "Estas reprobado";
        break;
    case (nota >=6 && nota <=7):
        msg = "Estas aprobado";
        break;
    case (nota>=7 && nota <=8):
        msg = "Estas bien";
        break;
    case (nota >=9 && nota <=10):
        msg = "Estas excelente";
        break;
    defult:
        msg = "Valor incorrecto";
}
console.log("En el examen: "+msg)