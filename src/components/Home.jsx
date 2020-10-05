import React, { useContext } from 'react'
import InfoContext from '../InfoContext';

const Home = () => {
  const { setInfo } = useContext(InfoContext);
  
  const handleInfo = () => {
    setInfo('Hola como estas');
  }

  return (
    <div className="container">
      <button type="button" onClick={handleInfo}>Cargar información</button>
    </div>
  )
}

export default Home;
