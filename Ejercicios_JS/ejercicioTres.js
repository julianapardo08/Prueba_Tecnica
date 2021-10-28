var pi = 3.141592;
class Evento{
    constructor(radio){
        this.radio= radio
    }
    getArea(){
        return pi * Math.pow(this.radio,2);
    }
    getPerimetro(){
        return pi * this.radio * 2;
    }
    getTres(){
        return this.getArea() * 3
    }
}
var ultimoResultado = new Evento(15);
console.log(ultimoResultado.getArea());
console.log(ultimoResultado.getPerimetro());
console.log(ultimoResultado.getTres());
