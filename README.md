
## Cryptography
Cryptography is the practice of securing information by transforming it into a secret code so that only authorized parties can access or understand it. It’s like a secret language that keeps your data safe from people who shouldn’t see it.

## Cryptographic Primitives

Cryptographic primitives are like the basic tools that help keep data safe in the digital world. Just like in a toolbox, where you have different tools to build something, cryptography has a set of basic tools (primitives) that help protect information.

## Hash Function
Imagine you have a secret message, like "I love chocolate." When you run this message through a hash function, it turns it into a random-looking code. If you change even one letter of the message, the code will change completely. This helps us check if something has been tampered with.

## Encryption
This is like locking up your message in a box. Only someone with the right key can open it. There are two main types:

### Symmetric Encryption
The same key is used to lock (encrypt) and unlock (decrypt) the message. But the challenge is making sure only the right person has the key.

### Asymmetric Encryption
This is like having a public "lock" (public key) that anyone can use to lock a message, but only the person with the private "key" can unlock it. It’s what makes secure online communication possible.

## Digital Signatures
Imagine you want to send someone a letter, but you want to prove it’s really from you. You sign the letter with your unique signature. When the other person gets it, they can check your signature to be sure it’s authentic and hasn’t been tampered with.
# Blockchain

The purpose of a blockchain is to have a network of computers (also called nodes) agree on the same version of data in a secure and transparent way, without needing a central authority (like a bank or government).

In simple terms:

- The blockchain keeps a record of transactions or data.
- Every computer in the network has a copy of this record.
- When a new transaction happens, the network checks to make sure it's valid, and once agreed upon, it gets added to the chain of data (called a block).
- This process ensures that everyone has the same, up-to-date copy of the data, and it’s almost impossible to change it once it’s recorded.

This decentralized approach makes blockchains trustworthy and secure!

---

## Key Features of Blockchain:

1. **No Deletion Allowed**  
   Once data (like a transaction) is added to the blockchain, it cannot be deleted or changed. It’s permanent and locked, ensuring the integrity of the information.

2. **Validation by All Computers**  
   When a new piece of data (like a new transaction) needs to be added, all the computers (or nodes) in the network must first check and validate whether the data is correct. For example, if someone is sending money, the network will check if the sender has enough funds.

3. **Agreement (Consensus)**  
   Once enough computers (nodes) agree that the data is valid, it is added to the blockchain.

4. **Distributed Update**  
   After the data is validated and added, it gets distributed to all computers in the network, so everyone has the same, updated copy of the blockchain.

So, to sum it up:
- No data can be deleted, it can only be added if all computers agree it’s correct.
- Once added, it updates everyone’s copy.

Hope that clears things up! Let me know if you need more help.

---

## Decentralization in Blockchain

**You said:**  
Any person or organization should be able to participate in this process. No person or organization should be able to control this process.

**ChatGPT said:**  
Exactly! That’s one of the key principles of blockchain — it's decentralized.

Here’s what that means:

1. **Anyone Can Participate**  
   In a blockchain network, there are no strict rules about who can join. Anyone (person or organization) with the right software and the technical ability can participate as a node (a computer) in the network.

2. **No Central Control**  
   No single person, company, or organization has control over the entire network. The decisions (like validating transactions) are made by the collective group of nodes, and everyone must agree on the data. This is what makes blockchain trustless — you don’t need to trust a single entity because the system is transparent and everyone has the same information.

3. **Distributed Decision-Making**  
   The process of validating and agreeing on the data is done through a consensus mechanism (like Proof of Work or Proof of Stake), where the majority of participants in the network decide what’s valid. No one person or organization can force a decision or change the data.

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
