const multiplicaNumeros = (numero1: number, numero2: number): number => numero1 * numero2

const resultado = multiplicaNumeros(50, 80);

console.log(resultado);

function saudacao(nome: string): string {
    return `Olá ${nome}`
}

const dizOlá = saudacao('Rodrigo');

console.log(dizOlá);