const { readFileSync } = require("fs");

function formatarMoeda(valor) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(valor / 100);
}

class ServicoCalculoFatura {
  constructor(repo) {
    this.repo = repo;
  }

  calcularCredito(apre) {
    let creditos = 0;

    creditos += Math.max(apre.audiencia - 30, 0);

    if (this.repo.getPeca(apre).tipo === "comedia")
      creditos += Math.floor(apre.audiencia / 5);

    return creditos;
  }

  calcularTotalApresentacao(apre) {
    let total = 0;

    switch (this.repo.getPeca(apre).tipo) {
      case "tragedia":
        total = 40000;
        if (apre.audiencia > 30) {
          total += 1000 * (apre.audiencia - 30);
        }
        break;
      case "comedia":
        total = 30000;
        if (apre.audiencia > 20) {
          total += 10000 + 500 * (apre.audiencia - 20);
        }
        total += 300 * apre.audiencia;
        break;
      default:
        throw new Error(`Peça desconhecida: ${this.repo.getPeca(apre).tipo}`);
    }

    return total;
  }

  calcularTotalFatura(apresentacoes) {
    let total = 0;

    for (let apre of apresentacoes) {
      total += this.calcularTotalApresentacao(apre);
    }

    return total;
  }

  calcularTotalCreditos(apresentacoes) {
    let total = 0;

    for (let apre of apresentacoes) {
      total += this.calcularCredito(apre);
    }

    return total;
  }
}

function gerarFaturaStr(fatura, calc) {
  let faturaStr = `Fatura ${fatura.cliente}\n`;

  for (let apre of fatura.apresentacoes) {
    let total = calc.calcularTotalApresentacao(apre);

    faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(total)} (${apre.audiencia} assentos)\n`;
  }

  faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;

  faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;

  return faturaStr;
}
/*
function gerarFaturaHTML(fatura, pecas) {
  let html = "<html>\n";
  html += `<p> Fatura ${fatura.cliente} </p>\n`;
  html += "<ul>\n";

  for (let apre of fatura.apresentacoes) {
    html += `<li> ${getPeca(pecas, apre).nome}: ${formatarMoeda(calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos) </li>\n`;
  }

  html += "</ul>\n";
  html += `<p> Valor total: ${formatarMoeda(calcularTotalFatura(pecas, fatura.apresentacoes))} </p>\n`;
  html += `<p> Créditos acumulados: ${calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>\n`;
  html += "</html>";
  return html;
}
*/

class Repositorio {
  constructor() {
    this.pecas = JSON.parse(readFileSync("./pecas.json"));
  }

  getPeca(apre) {
    return this.pecas[apre.id];
  }
}

const faturas = JSON.parse(readFileSync("./faturas.json"));

const calc = new ServicoCalculoFatura(new Repositorio());

const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);

// const faturaHTML = gerarFaturaHTML(faturas, pecas);
// console.log(faturaHTML);
