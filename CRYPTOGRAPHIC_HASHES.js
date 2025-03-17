/*### **Steps to Hash **  
1. Convert string to bytes → `utf8ToBytes(color)`.  
2. Compute hash → `sha256(bytes)` its a array so
3. Convert to hex → `toHex(hash)`.  */
const {sha256} = require('ethereum-cryptographic/sha256')
const {toHex , utf8ToBytes} = require('ethereum-cryptography/utils')
let array = ["yuvaraj" , "lakshmi" , "narayanan" , "sasikumar"]
const toByte = utf8ToBytes("sasikumar")
const toHash = sha256(toByte)
function findFriend(toHash) {
    for (let i = 0; i < array.length ; i++){
        let byte = utf8ToBytes(array[i])
        let hash = sha256(byte)
        if(toHex(hash) === toHex(toHash)){
            return array[i]
        }
    }
}
console.log(findFriend(toHash))
