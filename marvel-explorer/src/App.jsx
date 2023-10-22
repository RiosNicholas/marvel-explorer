import React, { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import List from './components/List'
import NavBar from './components/NavBar'
import DailyCharacter from './components/DailyCharacter';
import DailyComic from './components/DailyComic'
import DailySeries from './components/DailySeries';
import CharacterPopularity from './components/CharacterPopularity';

const CLIENT_PUBLIC = import.meta.env.VITE_APP_CLIENT_PUBLIC; 
const CLIENT_SECRET = import.meta.env.VITE_APP_CLIENT_SECRET;

function App() {
  return (
    <div className="flex w-screen h-screen">
      <aside className="bg-red-900 py-10 flex flex-col items-center h-screen w-1/4 lg:w-1/6">
        <Header />
        <NavBar />
      </aside>
      <main className="mx-10 my-4 grid grid-cols-3 gap-4 w-3/4 lg:w-5/6 overflow-y-auto">
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

          <Card 
            title='Top Characters' 
            content={
              <CharacterPopularity />
            }
          />
          <div className="col-span-4">
            <Card 
              title='New Releases'
              content={
                <List 
                  publicKey={CLIENT_PUBLIC}  
                />
              }
              className='col-span-4'
            />
          </div> 
      </main>
    </div>

  );
}

export default App