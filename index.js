class Cipher {
  constructor(hash = {}) {
    this.hash = this.hasJustALetter(hash) ? hash : console.error('Insert just a letter in Object prop')
  }

  hasJustALetter(o) {
    return !Object.values(o).filter(s => s.length > 1).length
  }

  encrypt(str) {
    console.log(this.hash)
    return str.split('').map(w => this.hash[w] || w).join('')
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
    return hash.split('').map(w => sHash[w] || w).join('')
  }
}
