import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

const appData = [
  {
    id: "1",
    name: "Coupa",
    imageSource: "",
    appLink: "https://www.youtube.com/embed/YJ5EMzyimfc?si=9U5mnId5gGQZMm1W",
  },
  {
    id: "2",
    name: "CMD",
    imageSource: "",
    appLink: "3",
  },
  {
    id: "3",
    name: "Secure",
    imageSource: "",
    appLink: "3",
  },
];

function App() {

  const [apps, setApps] = useState(appData);
  const [showModal, setShowModal] = useState(false);
  
  
  const openApp = (appName, appFrameSrc) => {
    console.log(`You clicked on ${appName}`);
    // setActiveAppName(appName);
    // setAppFrameSrc(appFrameSrc);
    setShowModal(true);
  }

  
  return (
    <div className='layout__wrapper'>
      <div className='card'>
        <div className='header'>
          <h1>UHG Apps</h1>
        </div>
        {apps.map(app => (
          <div key={app.id}>
            <div className='app-container'>
              <button className='app-icon' onClick={() => openApp(app.name, app.appLink)}>
                <h3>{app.name}</h3>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Window */}
      {showModal && (
        <Modal />
      )}
    </div>
  );
}

export default App;
