// src/App.jsx 

import React, { useState } from "react";
import {ethers} from 'ethers';
import MessagingPlatform from './artifacts/contracts/MessagingPlatform.sol/MessagingPlatform.json'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS; 
 

function App() { 
    const [message, setMessage] = useState("");
    const [recipient, setRecipient] = useState("");
    const [sentMessages, setSentMessages] = useState([]);
    const [receivedMessages, setReceivedMessages] = useState([]);
    //const [address, setAddress] = useState('');
    
    async function requestAccount() { 
        await window.ethereum.request({ method: 'eth_requestAccounts' }); 
    } 
  
    
    // Send a message
    async function sendingMessage() { 
        if (!sentMessages) return; 
        if (typeof window.ethereum !== 'undefined') { 
            await requestAccount(); 
            const provider = new ethers.providers.Web3Provider(window.ethereum); 
            const signer = provider.getSigner(); 
            const contract = new ethers.Contract( 
                contractAddress, 
                MessagingPlatform.abi, 
                signer 
            ); 
            setSentMessages(message);
            getRecievedMessage();
            const transaction = await contract.sendMessage(recipient,sentMessages); 
            await transaction.wait(); 
            
        } 
    } 
  
    // Get sent and received messages
    async function getMessage() { 
        if (typeof window.ethereum !== 'undefined') { 
            await requestAccount(); 
            const provider = new ethers.providers.Web3Provider(window.ethereum); 
            const contract = new ethers.Contract( 
                contractAddress, 
                MessagingPlatform.abi, 
                provider 
            ); 
            try { 
                const data = await contract.getSentMessages(); 
                setMessage(data); 
                console.log('Greeting: ', data); 
                console.log('Contract Address: ', contract.address); 
            } catch (err) { 
                console.log('Error: ', err); 
            } 
        } 
    } 

    async function getRecievedMessage() { 
        if (typeof window.ethereum !== 'undefined') { 
            await requestAccount(); 
            const provider = new ethers.providers.Web3Provider(window.ethereum); 
            const contract = new ethers.Contract( 
                contractAddress, 
                MessagingPlatform.abi, 
                provider 
            ); 
            try { 
                const data = await contract.getReceivedMessages(); 
                setReceivedMessages(data); 
                console.log('Greeting: ', data); 
                console.log('Contract Address: ', contract.address); 
            } catch (err) { 
                console.log('Error: ', err); 
            } 
        } 
    } 
  
    return (
      <div className="card mt-5">
      <div className="card-header">
      <h2>Send a message</h2>
      </div>
    <div className="card-body">
    <div className="mb-3">
              <label  className="form-label" htmlFor="recipient">Recipient:</label>
              <input
                type="text"
                name="message"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
                   </div>
                   <div className="mb-3">
              <label className="form-label" htmlFor="message">Message:</label>
              <input
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
                      </div>
              <br />
              <div className="mb-3">
              <button  className="btn btn-primary btn-block" onClick={sendingMessage}>Send</button>
              </div>
               </div>
               <div className="card mt-5">
    <div className="card-header">
              <h5>Sent messages</h5>
              {sentMessages.map((msg) => (
                <p key={msg}>{msg}</p>
              ))}
            </div>
            </div>
           
            <div className="card mt-5">
    <div className="card-header">
              <h5>Received messages</h5>
              {receivedMessages.map((msg) => (
                <p key={msg}>{msg}</p>
              ))}
            </div>
            </div>
          </div>

    );
  };
  
 
export default App; 

 