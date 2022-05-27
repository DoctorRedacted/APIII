///DOBRO DE UM NUMERO
export function dobro(n) {
    return n*2;
}
///SOMAR NUMEROS
export function somar(a, b) {
    return a+b;
}
///MEDIA
export function media(a, b, c){
    return (a+b+c) /3;
}
//TABUADA ARRAY
export function tabuada(num){
    let array = [];
    for(let i = 0; i < 10; i++) {
        array[i] = num*i;
    }
    return array;
}
///TEMPERATURA -- FEBRE
export function febre(num) {
    let x = num >= 37;
    return x;
}
///MAIOR NUMERO
export function maior(array) {
        let bigr = 0;

        for(let i = 0; i < array.length; i++) {
            if(bigr < array[i]) {
                bigr = array[i];
            }
        }
    return bigr;}
///COR PRIMARIA
export function corPrimaria(cor){
    let x = false;
    if(cor == 'verde' || cor == 'vermelho' || cor == 'azul') {
        x = true;
    }
    return x;
}
///TICKET CINEMA
export function cinema(a, b, c, d) {
    let tot = 0;
    let pay = 28.5;
    if(c == 'quarta') {
        pay = 14.25;}
    if(d == 'brasileiro') {
        pay = 14.25;}
    let calc = a*pay;
    let clc = b*(pay/2);
    tot += calc + clc;
    return tot;
}
//FREQUENCIA DE UM CARACTERE
export function frequencia(wrd, chr) {
    let qtd = 0;
    for(let i = 0; i < wrd.length; i++) {
        if(wrd[i] == chr) {
            qtd += 1;}}  
    return qtd;}