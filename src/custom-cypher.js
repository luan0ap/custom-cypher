class Cypher {
  constructor(hash = {}) {
    this.hasJustALetter(hash) ? this.hash = hash : this.syntaxError('Just one letter in object properties are allowed')
  }

  hasJustALetter(o) {
    return !Object.values(o).filter(s => s.length > 1).length
  }

  syntaxError (str) {
    throw new SyntaxError(str)
  }

  getLetter (str = '', obj = {}) {
    return str.split('').map(w => obj[w] || w).join('')
  }

  encrypt(str) {
    return this.getLetter(str, this.hash)
  }

  decrypt(hash) {
    const swap = (obj) => {
      let o = {}
      for (const p in obj) {
        o[obj[p]] = p
      }
      return o
    }

    const sHash = swap(this.hash)
    return this.getLetter(hash, sHash)
  }
}

module.export = Cypher
