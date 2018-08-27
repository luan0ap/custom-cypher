# Custom Cyphers

Just a script for create custmized hashes.

## Getting Started

Move the script in dist to a folder in your project, and import it

`import Cypher from './custom-cypher.js'`

Create a object with letter that will replaced, for example letter "h" will replaced to "i".

`const hash = {h: 'i', e: 'f', l: 'm', o: 'p'}`

## Usage

Create a new instance of Cypher and pass the object as parameter

`const cp = new Cypher(hash)`

list of properties

| property      | specify                                            |
|---------------|----------------------------------------------------|
| `cp.encrypt`  | Encrypt a hash using the object passed in instance |
| `cp.decrypt`  | Decrypt a hash using the object passed in instance |

## Example

```
import Cypher from './custom-cypher

const cp = new Cypher({{h: 'i', e: 'f', l: 'm', o: 'p'}})

const encrypted = cp.encrypt('hello) // ifmmp
const decrypted = cp.decrypt(encrypted) // hello

console.log(encrypted, decrypted)
```


