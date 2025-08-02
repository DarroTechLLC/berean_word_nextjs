'use client';

import { useState, useEffect } from 'react';

export default function DbConnectionStatus() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [message, setMessage] = useState('Checking database connection...');

  useEffect(() => {
    async function checkConnection() {
      try {
        const response = await fetch('/api/db-status');
        const data = await response.json();
        
        if (data.connected) {
          setStatus('connected');
          setMessage('Successfully connected to the database!');
        } else {
          setStatus('error');
          setMessage('Failed to connect to the database.');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Error checking database connection.');
      }
    }

    checkConnection();
  }, []);

  return (
    <div className={`db-status ${status}`}>
      <p>{message}</p>
      <style jsx>{`
        .db-status {
          padding: 10px;
          border-radius: 5px;
          margin: 10px 0;
        }
        .loading {
          background-color: #f0f0f0;
        }
        .connected {
          background-color: #d4edda;
          color: #155724;
        }
        .error {
          background-color: #f8d7da;
          color: #721c24;
        }
      `}</style>
    </div>
  );
}