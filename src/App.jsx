import Information from "./components/Information"
import Preview from "./components/Preview"
import './App.css';
import { createContext, useState } from "react";

export const InfomationContext = createContext([
    { name : "" , rent : 0, area: "", addres: "", station: "", publiced: "" }, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : '',
    rent : 0,
    area: '',
    address: '',
    station:'',
    published:'',
  });

  return (
    <InfomationContext.Provider value={[value, setValue]}>
    <div className='information-preview'>
      <div className='information'>
          <Information />
      </div>
      <div className='preview'>
        <Preview />
      </div>
    </div>
  </InfomationContext.Provider>
  );
}

export default App