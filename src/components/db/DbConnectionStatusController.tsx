'use client';

import { useState, useEffect } from 'react';
import DbConnectionStatusView from './DbConnectionStatusView';

export default function DbConnectionStatusController() {
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

  // Pass the state to the view component
  return <DbConnectionStatusView status={status} message={message} />;
}