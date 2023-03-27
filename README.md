# Decentralized Messaging application based on Avalanche platform
## Introduction  
The decentralized messaging project based on the Avalanche platform aims to provide users with a secure and private way to communicate with each other. By leveraging the benefits of blockchain technology, this messaging platform eliminates the need for centralized servers and intermediaries, giving users complete control over their data.
The Avalanche platform, a high-performance blockchain network, provides the underlying infrastructure for this messaging project. It utilizes a consensus protocol known as Avalanche consensus, which enables high throughput and fast transaction finality. This makes it an ideal platform for developing decentralized applications such as messaging services.
The messaging platform uses end-to-end encryption to ensure that all messages sent and received on the platform are secure and private. Additionally, it allows users to maintain their anonymity by not requiring any personally identifiable information during account creation.
The project also features a decentralized storage system that ensures all data, including messages and attachments, are stored securely and remain private. This decentralized storage system is achieved by leveraging the Avalanche network's native asset, AVAX, as a means of payment for storage and retrieval.
The messaging platform's user interface is designed to be intuitive and user-friendly, making it easy for users to navigate and communicate with each other. The platform also features a group chat functionality that allows users to communicate with multiple people simultaneously.
Overall, the decentralized messaging project based on the Avalanche platform is an innovative solution that provides users with secure and private communication while also leveraging the benefits of blockchain technology. With its user-friendly interface and robust security features, it has the potential to become a go-to messaging service for privacy-conscious individuals and businesses. 

## Description  
The decentralized messaging project is a platform for sending secure and private messages using a decentralized network of nodes that validate and process transactions on the blockchain. The platform uses end-to-end encryption to ensure that messages remain private and secure.  
1. Sending a message: A user first composes the message and sends it to the messaging platform. The messaging platform then encrypts the message using the sender and recipient's public keys, which are stored on the blockchain.  
2. Message encrypted: It is broadcast to the Avalanche network, which is a decentralized network of nodes that validate and process transactions on the blockchain. The Avalanche consensus protocol is used to validate and confirm the transaction, which ensures that the transaction is finalized quickly and with high throughput.  
3. Transaction confirmed: The messaging platform sends a confirmation message to the sender to confirm that the message has been sent to the recipient's decrypted inbox.  
Users can retrieve their sent and received messages by calling functions on the smart contract, which is deployed on the Avalanche network. This allows users to keep track of their message activity on the blockchain.  

## Why Avalanache platform?
1. Fast transaction finality: Avalanche provides fast transaction finality, which means that transactions are confirmed and processed quickly on the blockchain. This is important for a messaging platform, as users expect their messages to be delivered quickly and reliably.  
2. High throughput: Avalanche also provides high throughput, which means that the network can process a large number of transactions per second. This is important for a messaging platform, as it ensures that the network can handle a large volume of messages and maintain fast transaction times even during periods of high usage.  
3. Decentralized network: Avalanche is a decentralized network, which means that there is no central authority or single point of failure. This provides greater security and resilience compared to centralized systems, as there is no single point of attack that can compromise the network.  
4. Smart contract functionality: Avalanche supports smart contracts, which allows developers to build complex decentralized applications on top of the blockchain. The messaging platform is built using a smart contract, which provides a secure and transparent way to store and process messages on the blockchain.  

## Sequence diagram  
<img width="856" alt="스크린샷 2023-03-24 오후 9 36 33" src="https://user-images.githubusercontent.com/114115158/227987939-d05c2b1d-e304-45b4-9fdc-5cb5f11e7def.png">  
In this sequence diagram, the user sends a message to the messaging platform, which encrypts the message using end-to-end encryption. The encrypted message is then broadcast to the Avalanche network using the Avalanche consensus protocol. Once the transaction is confirmed, the messaging platform confirms that the message has been sent to the recipient's decrypted inbox. Since there is no decentralized storage system involved, the message is not stored on the blockchain or any other external storage system.  

## Architecture
The architecture of the decentralized messaging project is based on a client-server model, where users interact with the messaging platform through a client interface, and the platform is hosted on a server.
At a high level, the architecture consists of four main components:  
### Clienet Interface
The client interface is the user-facing part of the messaging platform, where users can compose and send messages, view their sent and received messages, and manage their messaging preferences. The client interface can be a mobile or web application, which communicates with the server over a network.  
### Messaging Server
The messaging server is the backend component of the messaging platform, which handles message processing, storage, and retrieval. The server is responsible for encrypting and decrypting messages, broadcasting messages to the Avalanche network, and retrieving messages from the blockchain. The messaging server is built using a smart contract, which provides a secure and transparent way to store and process messages on the blockchain.  
### Avalanche Network
The Avalanche network is the underlying blockchain network on which the messaging platform is built. The network consists of a decentralized network of nodes that validate and process transactions on the blockchain. The Avalanche consensus protocol is used to validate and confirm transactions quickly and with high throughput.  
### Public Key Infrastructure (PKI)
The PKI is the component of the messaging platform that provides secure encryption and decryption of messages. Users generate public and private keys, which are stored on the blockchain, and use these keys to encrypt and decrypt messages. The PKI provides a secure way to ensure that only the intended recipient can read the message.
