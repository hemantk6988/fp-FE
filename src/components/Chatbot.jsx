import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const predefinedResponses = {
    'help me cook': 'Sure! What ingredients do you have? I can suggest a recipe.',
    'how to cook rice': 'To cook rice, rinse it first, then use 2 cups of water for every cup of rice. Bring it to a boil, reduce the heat, and simmer for about 18 minutes.',
    'what’s for dinner': 'How about trying a simple curry? You can use vegetables, chicken, or paneer with some basic spices!',
    'tell me a joke': 'Why don’t eggs tell jokes? They’d crack each other up!',
    'another joke': 'go find yourself!',
    'hi': 'Hello... How can i help you.'

  };

  const handleSendMessage = () => {
    const userMessage = input.toLowerCase();
    const botResponse = predefinedResponses[userMessage] || "I'm sorry, I don't understand that. Please ask something else.";

    setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatbox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    backgroundColor: 'white',
  },
  chatbox: {
    width: '300px',
    height: '400px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'white',
    overflowY: 'auto',
    marginBottom: '10px',
  },
  userMessage: {
    textAlign: 'right',
    backgroundColor: '#DCF8C6',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px 0',
  },
  botMessage: {
    textAlign: 'left',
    backgroundColor: '#ECECEC',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px 0',
  },
  inputContainer: {
    display: 'flex',
    width: '300px',
  },
  input: {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px 0 0 5px',
    backgroundColor: '#ECECEC'
  },
  button: {
    padding: '10px',
    backgroundColor: '#DCF8C6',
    color: 'black',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
  },
};

export default Chatbot;
