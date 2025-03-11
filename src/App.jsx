import InputItem from './components/Input.jsx'
import Information from "./components/information"
import Preview from "./components/Preview"
import './App.css';
import { createContext, useState } from "react";

export const InfomationContext = createContext([
    { name : "" , price : 0 }, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    price : 0
  });

  return (
    <div className='information-preview'>
      <div className='information'>
        <InfomationContext.Provider value={[value, setValue]}>
          <Information />
        </InfomationContext.Provider>
      </div>
      <div className='preview'>
        <Preview />
      </div>
    </div>
  );
}

export default App