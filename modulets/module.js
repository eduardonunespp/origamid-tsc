export default function returnfunctions() {
    const dateP = {
        nome: 'ndjwdb',
        altura: 1.80,
    };
    function returndados(dados) {
        return console.log(dados.nome, dados.altura);
    }
    returndados(dateP);
    function somee(a, b) {
        return console.log(a + b);
    }
    somee(10, 20);
}
