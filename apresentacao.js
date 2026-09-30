var formatarMoeda = require("./util.js");

function gerarFaturaStr(fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;

  for (let apre of fatura.apresentacoes) {
    let total = calc.calcularTotalApresentacao(apre);

    faturaStr +=
      `  ${calc.repo.getPeca(apre).nome}: ` +
      `${formatarMoeda(total)} ` +
      `(${apre.audiencia} assentos)\n`;
  }

  faturaStr += `Valor total: ${formatarMoeda(
    calc.calcularTotalFatura(fatura.apresentacoes),
  )}\n`;

  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(
    fatura.apresentacoes,
  )} \n`;

  return faturaStr;
}

module.exports = gerarFaturaStr;
