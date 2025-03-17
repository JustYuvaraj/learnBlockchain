/*### **Steps to Hash a Color**  
1. Convert string to bytes → `utf8ToBytes(color)`.  
2. Compute hash → `sha256(bytes)`.  
3. Convert to hex → `toHex(hash)`.  */
const {sha256} = require("ethereum-cryptographic/sha256")
const {toHex , utf8ToBytes} = require("ethereum-cryptography/utils")
let array = ["yuvaraj" , "lakshmi" , "narayanan" , "sasikumar"]
const bytes = utf8ToBytes(array[-1])
const hash = sha256(bytes)
const hex = toHex(hash)
function findFriend(hex) {
    for (let i = 0; i < array.length ; i++){
        let byte = utf8ToBytes(COLORS[i])
        let ash = sha256(byte)
        if(toHex(ash) === hex){
            return COLORS[i]
        }
    }
}
console.log(findFriend(hex))