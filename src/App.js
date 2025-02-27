import React from 'react';
import Components from './components/Components';
import ScrolToTop from './components/Elements/ScrolToTop';
import Loader from "./components/Elements/Loader";
//import { ReactComponent as CompanyIcon } from './assets/crown.svg'
// import { WhatsAppWidget } from 'react-whatsapp-widget';
// import 'react-whatsapp-widget/dist/index.css';

const App = () => {
  
  return (
    <div className="App">
      <Components />  
      <ScrolToTop/>
      <Loader/>  
    </div>
  );
}

export default App;