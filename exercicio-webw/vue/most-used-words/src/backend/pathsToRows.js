const fs = require('fs')


module.exports = paths => {
    return new Promise((resolver, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, filetext) => `${fullText}\n ${filetext}`)
                .split('\n')
            resolver(rows)
        } catch (e) { 
            reject(e)
        }
    })
}
