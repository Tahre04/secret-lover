import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [commits, setCommits] = useState([]);

  const handleCommit = () => {
    if (message.trim()) {
      const newCommit = {
        hash: Math.random().toString(36).substring(2, 8),
        message: message,
        timestamp: new Date().toLocaleString(),
      };
      setCommits([newCommit, ...commits]);
      setMessage('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project: I ❤️ U</h1>
      </header>
      <main>
        <div className="commit-area">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a love commit..."
          />
          <button onClick={handleCommit}>Commit Love</button>
        </div>
        <div className="commit-log">
          <h2>Love Log</h2>
          {commits.map((commit) => (
            <div key={commit.hash} className="commit">
              <p className="commit-hash">commit {commit.hash}</p>
              <p className="commit-message">{commit.message}</p>
              <p className="commit-timestamp">Date: {commit.timestamp}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;