import React from 'react'
import './App.css';
import { ChatEngine } from 'react-chat-engine';

function App() {
  return (
    <ChatEngine
    height='100vh'
    userName='Sĩ Duyệt'
    userSecret='12341234'
    projectID='be002709-e468-4da9-a3be-05e9841b9c03'

    hideUI={false}
			renderChatList={(chatAppState) => {}}
			renderChatCard={(chat, index) => {}}
			renderNewChatForm={(creds) => {}}
			renderChatFeed={(chatAppState) => {}}
			renderChatHeader={(chat) => {}}
			renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {}}
			renderIsTyping={(people) => {}}
			renderNewMessageForm={(creds, chatId) => {}}
			renderChatSettings={(chatAppState) => {}}
			renderChatSettingsTop={(creds, chat) => {}}
			renderPeopleSettings={(creds, chat) => {}}
			renderPhotosSettings={(creds, chat) => {}}
			renderOptionsSettings={(creds, chat) => {}}
  />
  );
}

export default App;
