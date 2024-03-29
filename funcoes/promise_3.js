function gerarNumerosEntre(min, max) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 100)
    .then(num => num * 1)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)