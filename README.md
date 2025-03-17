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

