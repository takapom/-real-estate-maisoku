import Information from "./components/Information"
import Preview from "./components/Preview";
import Title from "./components/Title";
import Printpdf from './components/PrintPDF'
import './App.css';
import { createContext, useState } from "react";
import PopUp from "./components/Popup";

export const InfomationContext = createContext([
    { name : "" , rent : 0 , area: 0, address: "", station: "", published: "" , image: null}, () => {}
]);

function App() {
  const [value, setValue] = useState({
    name : "",
    rent : 0,
    area: "",
    address: "",
    station: "",
    published: "",
    deposit:0,
    new: 0,
    contract: '',
    park: '',
    insurance:'',
    exterior: null,
    interview: null,
    floor: null
  });
  return (
    <InfomationContext.Provider value={[value, setValue]}>
    <div className='information-preview'>
      <div className='information'>
        <Information />
      </div>
      <div className='preview'>
        <Title />
        <Preview />
        <div className='buttons'>
          <PopUp />
          <Printpdf />
        </div>
      </div>
    </div>
  </InfomationContext.Provider>
  );
}

export default App