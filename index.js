const fs = require('fs/promises');

  function soma(numero1, numero2) {
      return new Promise(async (resolve, reject) => {
            if (!numero1 || !numero2) {
                return reject('Não são números');
            }

            await fs.appendFile('resultado.txt', `${numero1} + ${numero2} = ${numero1 + numero2}\n`);
            resolve()
        })
  }

  soma(5,5)
  