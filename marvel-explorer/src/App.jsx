import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'
import DailyComic from './components/DailyComic';

const CLIENT_PUBLIC = import.meta.env.VITE_APP_CLIENT_PUBLIC; 
const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;

function App() {
  const [newReleases, setNewReleases] = useState([]);
  const [dailyComic, setDailyComic] = useState('');
  return (
    <div className="flex w-screen h-screen">
      <aside className="bg-red-900 py-10 flex flex-col items-center w-1/4 lg:w-1/6">
        <Header />
        <NavBar />
      </aside>
      <main className="mx-10 my-4 grid grid-cols-3 gap-4 w-3/4 lg:w-5/6">
          <Card 
            title='Comic of the Day' 
            content={
              <DailyComic 
                publicKey={CLIENT_PUBLIC}
                secretKey={CLIENT_SECRET}
              />
            }
          />
          <Card 
            title='Creator of the Day' 
          />
          <Card 
            title='Character Count' 
          />
          <div className="col-span-3">
            <Card 
              title='New Releases'
              content={
                <List />
                
              }
              className='col-span-3'
            />
          </div> 
      </main>
    </div>

  );
}

export default App