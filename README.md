## Purpose of Blockchain
Blockchain allows a **network of computers** to agree on a common state of data. Anyone can participate, and no single entity controls the process.
This agreement is called **consensus**. 
A blockchain decentralizes code execution and consensus on results, meaning no single group controls it. Developers can set initial rules, but once deployed, the code remains unchanged and accessible to everyone. 
A major benefit is the ability to verify active code and trust its functionality. In contrast, centralized code can be altered or removed by its owner, while decentralized blockchain code runs consistently.

### Code Decentralization  
Decentralized execution involves multiple machines in a network running the same code. When a transaction occurs, these machines verify and execute the code as written, ensuring clarity and preventing tampering.

## Why Blockchain for Cryptocurrency?
Without blockchain, a **digital currency** requires a trusted bookkeeper. Let's consider an example:
```
NAME    BALANCE
Alice   10
Bob     10
Charlie 10
```
Alice pays Bob **5 money** and asks the bookkeeper to update the balance:

```
NAME    BALANCE
Alice   5
Bob     15
Charlie 10
```

### Problems:
1. Users must **trust** the bookkeeper to be fair.
2. Balances must be **public & up-to-date**.
3. Managing records becomes **harder** as users increase.

Solutions exist for #2 and #3, but **trust (#1) remained unsolved**. Cryptographers searched for a solution for years.

In **2008**, **Satoshi Nakamoto** introduced **Bitcoin**, creating a **peer-to-peer** digital currency using **blockchain**. 
This system combined **cryptography & incentives** to ensure security and decentralization.
Blockchain was invented to **remove trust dependency**, ensuring transactions are **neutral, secure, and censorship-resistant**.

### Smart Contract Blockchains

### **What Are Smart Contract Blockchains?**
Smart contract blockchains **allow code to run in a decentralized way**. This means no single person or company owns the code, making it:
✅ **Censorship-resistant** (nobody can block it)  
✅ **Publicly available** (anyone can see it)  
✅ **Trustless** (it runs automatically)  

### **How Does It Work?**
Think of **a simple program** that transfers money between users. In Solidity (Ethereum’s programming language), it looks like this:

```solidity
mapping(address => uint) balances;

function transfer(address to, uint amount) external {
  balances[msg.sender] -= amount;
  balances[to] += amount;
}
```

This program keeps track of balances and **moves funds when called**.  

### **What Makes It Special?**
Unlike regular programs, when you **deploy this code on a blockchain**, it:
🔹 **Becomes public** (everyone can see it)  
🔹 **Runs automatically** (no need for a central authority)  
🔹 **Is enforced by blockchain rules** (miners/validators verify transactions)  
A **smart contract** always runs **exactly as programmed** and follows **blockchain rules**. 

## Cryptographic Hash Functions

What is a Hash Function?
A **hash function** takes an input of any size and produces a **fixed-size output**.

| INPUT              | INPUT SIZE       | OUTPUT  | OUTPUT SIZE |
|--------------------|-----------------|---------|-------------|
| 52                | 8 bytes          | 0x41cf... | 32 bytes |
| "happy times"     | 22 bytes         | 0xd6bf... | 32 bytes |
| monalisa.jpg      | 875,000 bytes    | 0x7cde... | 32 bytes |
| worldseries.mp4   | 1.6e+10 bytes    | 0x9c0e... | 32 bytes |

Regardless of input size, the output **remains fixed** at 32 bytes. Different **hashing algorithms** can produce fixed-size outputs.

What are Cryptographic Hash Functions?
A **cryptographic hash function** has five key properties:

1. **Deterministic** - The same input always produces the same output.
2. **Pseudorandom** - Outputs cannot be guessed from similar inputs.
3. **One-way** - Given an output, it's nearly impossible to find the input.
4. **Fast to Compute** - Must be quickly processed by a computer.
5. **Collision-resistant** - Two different inputs should never produce the same output.

Why Are Cryptographic Hash Functions Important?
- They **save space** by storing only the hash instead of large inputs.
- Used in **blockchains** and **smart contracts** to ensure data integrity.
- Essential for **Proof of Work (PoW)**, the first blockchain consensus mechanism.
## Bitcoin
Bitcoin was the first to successfully combine security, financial incentives, authentication, chronological ordering, and permissionless access into a fully decentralized network.

## Brute Force Hashing

### Introduction
Cryptographic **Hash Functions** like **SHA256** are **one-way functions**. This means that:
- If you have the **input**, it's easy to compute the **output**.
- If you have the **output**, it is **infeasible** to determine the **input**.

### Task
Given a **SHA256 hash**, find the **color** input that generated that hash. You can assume that all hashes were generated **only** from the colors provided in the `COLORS` array.

### Approach
1. Convert the **color string** into bytes using `utf8ToBytes`.
2. Compute its **SHA256 hash** using `sha256`.
3. Compare the hash with the given hash by converting both to **hexadecimal**.

### Code Implementation
```javascript
const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// The possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// Given a hash, return the color that created the hash
function findColor(hash) {
    for (let i = 0; i < COLORS.length; i++) {
        let bytes = utf8ToBytes(COLORS[i]);
        let colorHash = sha256(bytes);
        
        if (toHex(colorHash) === toHex(hash)) {
            return COLORS[i];
        }
    }
}

module.exports = findColor;
```

### Understanding UTF-8 Encoding
Wondering what **UTF-8** stands for?
- The **UTF-8** standard converts all possible keyboard characters into **bytes**.
- This ensures **consistent** bit values across different systems.

## *Cryptography: A Historical Perspective**

## **What is Cryptography?**
Cryptography is the study of secure communication techniques that protect information from third parties. It ensures:
- **Confidentiality** – Only the intended recipient can read the message.
- **Integrity** – The message remains unchanged.
- **Authentication** – Verifies the sender's identity.
- **Non-repudiation** – The sender cannot deny sending the message.

## **Symmetric vs. Asymmetric Cryptography**

### **Symmetric-Key Cryptography**
- Uses a **single key** for both encryption and decryption.
- Requires both sender and receiver to **share** the same key.
- **Example:** AES (Advanced Encryption Standard), DES (Data Encryption Standard).
- **Drawback:** If the key is intercepted, security is compromised.

### **Asymmetric-Key Cryptography (Public Key Cryptography)**
- Uses **two keys**: a **public key** (for encryption) and a **private key** (for decryption).
- The **public key** is shared openly, while the **private key** is kept secret.
- **Example:** RSA (Rivest-Shamir-Adleman), ECDSA (Elliptic Curve Digital Signature Algorithm).
- **Advantages:**
  - Secure communication without prior key exchange.
  - Enables **digital signatures** to verify authenticity.
  - Used in **blockchain, secure emails, HTTPS, and digital wallets**.

## **Cryptography Historically**
Before the 1970s, cryptography focused on encrypting messages to prevent unauthorized access, mainly in **military and diplomatic communications**.

### **Early Methods**
- Simple ciphers, like the **Caesar Cipher**, shifted letters to obscure messages. Example:
  - "abc" → "bcd"
- These methods were easy to **break** once the pattern was discovered.

### **The Rise of Secret Keys**
- Encryption improved with **symmetric-key cryptography**, where both sender and receiver shared a **common secret key**.
- This strengthened encryption, but **key exchange** remained a challenge.

### **The Breakthrough: Public Key Cryptography**
- In the 1970s, **Whitfield Diffie and Martin Hellman** introduced **asymmetric cryptography**.
- This solved the key exchange problem using two keys:
  - A **public key** to encrypt messages.
  - A **private key** to decrypt messages.
- This breakthrough enabled **secure online transactions, digital signatures, and blockchain technology**.
## **Personal Computing and Public Key Cryptography**

### **The Need for a New Approach**
Before the **1970s**, cryptography relied on **symmetric-key encryption**, where both parties needed a **shared secret key**. However, as **personal computing** emerged, cryptographers faced a challenge: **how to establish secure communication without prior key exchange**.

### **The Breakthrough Idea**
In **1976**, **Whitfield Diffie** proposed a radical idea:
- **What if a public key existed?**
- **Could encryption be secure without keeping all keys private?**

Many cryptographers initially dismissed the idea, but it introduced a fundamental shift in cryptography.

### **How Public Key Cryptography Works**

#### **1. Digital Signatures**
- **Each person has a public key and a private key**.
- If **Bob encrypts a message using his private key**, anyone can decrypt it using his **public key**.
- Since only **Bob's private key** could have generated it, the message acts as a **digital signature** verifying Bob’s identity.

#### **2. Secure Communication**
- If someone **encrypts a message using Bob’s public key**, only **Bob** can decrypt it using his **private key**.
- This ensures **confidentiality**—even if the message is intercepted, no one else can read it.
# **RSA and ECDSA in Public Key Cryptography**  

## **RSA (Rivest-Shamir-Adleman)**  
- **Concept:** Based on the difficulty of **factoring large prime numbers**.  
- **Encryption:** Public key encrypts, private key decrypts.  
- **Security:** Assumed to require **exponential time** to break.  
- **Use Cases:** Secure communication, digital signatures.  

## **ECDSA (Elliptic Curve Digital Signature Algorithm)**  
- **Concept:** Uses **elliptic curves** for cryptographic security.  
- **Efficiency:** Provides the same security as RSA but with **smaller key sizes**.  
- **Use Cases:** Bitcoin, Ethereum, digital signatures.  
- **Curve Used:** **secp256k1** in blockchain applications.  

## Hashing Messages
Hashing is a crucial step in **ECDSA (Elliptic Curve Digital Signature Algorithm)**. Before signing a message, we first convert it into a **fixed-length hash** using the `keccak256` hashing algorithm. This ensures **data integrity** and prevents message tampering.

## **Implementation**
### **1. Convert Message to Bytes**
Before hashing, we convert the string message into an array of UTF-8 encoded bytes.
```javascript
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const bytes = utf8ToBytes("Vote Yes on Proposal 327");
```
### **2. Apply Keccak256 Hash**
We use `keccak256` to hash the byte array.
```javascript
const { keccak256 } = require("ethereum-cryptography/keccak");
const hash = keccak256(bytes);
console.log(toHex(hash));
// Output: 928c3f25193b338b89d5646bebbfa2436c5daa1d189f9c565079dcae379a43be
```
### **3. Function to Hash Messages**
To make this reusable, we define a function that takes a message as input and returns its Keccak256 hash.
```javascript
const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    let num = utf8ToBytes(message);
    return keccak256(num);
}

module.exports = hashMessage;
```
## Signing the Hash

To **prove intent**, we sign a hashed message using our **private key**. Signing with `secp256k1` returns:

- **Signature** – Ensures message integrity.
- **Recovery bit** – Allows recovery of the public key.

This helps blockchain nodes verify which address **authenticated** a transaction.

```javascript
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const hash = hashMessage(msg);
    return secp.sign(hash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage;
```

- **Ensures authenticity** – Only the private key holder can sign.
- **Allows verification** – Public key can be recovered from the signature.

## Recover the Public Key

When the signature is passed with all of its components (recovery bit included), the public key can be recovered. This allows blockchain nodes to verify who signed a transaction. A transaction might indicate the user wants to send 1 ether to another address and include a transaction fee. Since the signature signs the hash containing this intent, it fully authenticates the action.

```javascript
const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    const hashedMessage = hashMessage(message);
    return secp.recoverPublicKey(hashedMessage, signature, recoveryBit);
}

module.exports = recoverKey;
```
