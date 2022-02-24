import React, { useState, useEffect } from 'react';
import './index.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Summary from './components/summary/Summary';
import CustomizeWorkouts from './components/customize_workouts/CustomizeWorkouts';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {
        loading ? <div id='splashScreen'></div> :
          <>
            <Header />
            <Nav />
            <Summary />
            <CustomizeWorkouts />
          </>
      }
    </>
  );
}

export default App;
