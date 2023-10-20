import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'
import DailyCharacter from './components/DailyCharacter';
import DailyComic from './components/DailyComic'
import DailySeries from './components/DailySeries';

const CLIENT_PUBLIC = import.meta.env.VITE_APP_CLIENT_PUBLIC; 
const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;

function App() {
  return (
    <div className="flex w-screen h-screen">
      <aside className="bg-red-900 py-10 flex flex-col items-center h-screen w-1/4 lg:w-1/6">
        <Header />
        <NavBar />
      </aside>
      <main className="mx-10 my-4 grid grid-cols-3 gap-4 w-3/4 lg:w-5/6">
          <Card 
            title='Character of the Day' 
            content={
              <DailyCharacter 
                publicKey={CLIENT_PUBLIC}
                secretKey={CLIENT_SECRET}
              />
            }
          />
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
            title='Series of the Day' 
            content={
              <DailySeries 
                publicKey={CLIENT_PUBLIC}
                secretKey={CLIENT_SECRET}
              />
            }
          />
          <div className="col-span-3">
            <Card 
              title='New Releases'
              content={
                <List 
                  publicKey={CLIENT_PUBLIC}  
                />
              }
              className='col-span-3'
            />
          </div> 
      </main>
    </div>

  );
}

export default App