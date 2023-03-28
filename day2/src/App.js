import React, { useState, useEffect } from 'react';
import Intro from './components/intro';
import Navbar from './components/navbar';

function App() {

  const [getKue, setKue] = useState(0)
  const [getNamaKue, setNamaKue] = useState('')

  useEffect(() => {
    if (getKue > 0 ){
      setNamaKue('kue')
    }
  },[getKue])

  return (
    <>
      <Navbar />
      <Intro />
      <h1>saya punya kue: {getKue}</h1>
      <button onClick={() => setKue(getKue + 1)}>Tambah Kue</button>
      {/* validasi 0 tidak berkurang */}
      <button onClick={() => getKue > 0 ? setKue(getKue - 1) : setKue(0)}>Kurang Kue</button>
      <h1>ini adalah kue saya: {getNamaKue}</h1>
    </>
  );
}

export default App;
