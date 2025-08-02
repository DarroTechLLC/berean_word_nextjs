'use client';

import HomeView from './HomeView';

export default function HomeController() {
  // In a real application, you might fetch data or handle other logic here
  const title = 'Berean Church Dashboard';
  const welcomeMessage = 'Welcome to the Berean Church management system.';

  // Pass the data to the view component
  return <HomeView title={title} welcomeMessage={welcomeMessage} />;
}