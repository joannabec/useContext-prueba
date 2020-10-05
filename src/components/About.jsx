import React, { useContext } from 'react'
import InfoContext from '../InfoContext';

const About = () => {
  const { info } = useContext(InfoContext);
  console.log(info);

  return (
    <div className="container">
      {info || 'Nada'}
    </div>
  )
}

export default About;
