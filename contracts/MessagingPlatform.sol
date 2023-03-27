// SPDX-License-Identifier: MIT 

pragma solidity ^0.8.6; 

import "hardhat/console.sol"; 

contract MessagingPlatform {

    string private message; 

    struct Message {
        address sender;
        address recipient;
        string content;
        uint256 timestamp;
    }

      constructor (string memory _message) { 

        console.log("finished"); 

        message = _message; 

    } 


    mapping (bytes32 => Message) public messages;
    mapping (address => bytes32[]) public sentMessages;
    mapping (address => bytes32[]) public receivedMessages;

   // event MessageSent(address indexed sender, address indexed recipient, bytes32 messageId, uint256 timestamp);

    function sendMessage(address _reciever, string memory _message) public {
        bytes32 messageId = keccak256(abi.encodePacked(msg.sender, _reciever, _message, block.timestamp));
        messages[messageId] = Message(msg.sender, _reciever, _message, block.timestamp);
        sentMessages[msg.sender].push(messageId);
        receivedMessages[_reciever].push(messageId);
       // emit MessageSent(msg.sender, _reciever, messageId, block.timestamp);
    }

    function getSentMessages() public view returns (bytes32[] memory) {
        return sentMessages[msg.sender];
    }

    function getReceivedMessages() public view returns (bytes32[] memory) {
        return receivedMessages[msg.sender];
    }

}