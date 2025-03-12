// import React, { useContext, useState } from 'react';
// import { InfomationContext } from '../App.jsx';

// const InputItem = () => {
//   const [inputValue, setInputValue] = useState({
//     name: '',
//     rent: '',
//     area: '',
//     address: '',
//     station: '',
//     published: '',
//   });

//   const InputChange = (e) => {
//     const { id, value } = e.target;
//     const newInputValue = {
//         ...inputValue,
//         [id]: value,
//     };
//     setInputValue(newInputValue);
//     setValue(newInputValue);
//   }

//   const [value, setValue] = useContext(InfomationContext);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         marginTop: '20px', // 上からの余白
//         width: '100%'
//       }}
//     >

//       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-1" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: 'bold'}}>
//         物件名
//       </label>
//       <input
//         type="text"
//         id="name"
//         value={inputValue.name}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-3" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         家賃
//       </label>
//       <input
//         type="text"
//         id="rent"
//         value={inputValue.rent}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         専有面積
//       </label>
//       <input
//         type="text"
//         id="area"
//         value={inputValue.area}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>


//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-5" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold"  }}>
//         所在地
//       </label>
//       <input
//         type="text"
//         id="address"
//         value={inputValue.address}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>


//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         最寄駅
//       </label>
//       <input
//         type="text"
//         id="station"
//         value={inputValue.station}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         公開日
//       </label>
//       <input
//         type="text"
//         id="published"
//         value={inputValue.published}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         間取り
//       </label>
//       <input
//         type="text"
//         id="area"
//         value={inputValue.floorplan}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         物件種別
//       </label>
//       <input
//         type="text"
//         id="area"
//         value={inputValue.area}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         築年数
//       </label>
//       <input
//         type="text"
//         id="area"
//         value={inputValue.area}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>

//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
//       <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
//         向き
//       </label>
//       <input
//         type="text"
//         id="area"
//         value={inputValue.area}
//         onChange={InputChange}
//         style={{
//           width: '300px',
//           height: '20px',
//           fontSize: '16px',
//           padding: '10px',
//           borderRadius: '10px',
//           border: '1px solid #ccc',
//           marginBottom: '20px',
//         }}
//       />
//     </div>
//     </div>
//   );
// };

// export default InputItem;

import React, { createContext, useContext, useState } from 'react';
import { InfomationContext } from '../App.jsx';
import Preview from './Preview.jsx';
import { FilledInput } from '@mui/material';
import { useRef } from 'react';

const InputItem = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    rent: '',
    area: '',
    address: '',
    station: '',
    published: '',
  });

  const [value, setValue] = useContext(InfomationContext);
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3= useRef(null);
  const handleImageButtonClick = () =>{
    fileInputRef.current.click();
  }

  const handleImageButtonClick2 = () =>{
    fileInputRef2.current.click();
  }

  const handleImageButtonClick3 = () =>{
    fileInputRef3.current.click();
  }


  const InputChange = (e) => {
    const { id, value: inputVal } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [id]: inputVal,
    }));
    if (id === 'name') {
      setValue((prevValue) => ({
        ...prevValue,
        name: inputVal,
      }));
    } else if (id === 'rent') {
      setValue((prevValue) => ({
        ...prevValue,
        rent: Number(inputVal) || 0,
      }));
    }
    else if (id === 'area') {
      setValue((prevValue) => ({
        ...prevValue,
        area: Number(inputVal) || 0,
      }));
    }
    else if (id === 'address') {
      setValue((prevValue) => ({
        ...prevValue,
        address: inputVal,
      }));
    }
    else if (id === 'station') {
      setValue((prevValue) => ({
        ...prevValue,
        station: inputVal,
      }));
    }
    else if (id === 'published') {
      setValue((prevValue) => ({
        ...prevValue,
        published: inputVal,
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue((prev) => ({...prev, exterior: file}));
    }
  };

  const handleFileChange2 = (e) => {
    const file2 = e.target.files[0];
    if (file2) {
      setValue((prev) => ({...prev, interview: file2}));
    }
  };

  const handleFileChange3 = (e) => {
    const file3 = e.target.files[0];
    if (file3) {
      setValue((prev) => ({...prev, floor: file3}));
    }
  };
  
  //画像のアップロードボタンのクリックでファイルを開く(内観と外観と間取り)
  const handleImage = () => {
    fileInputRef.current.click();
  }

  const handleImage2 = () => {
    fileInputRef2.current.click();
  }

  const handleImage3 = () => {
    fileInputRef3.current.click();
  }


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px', // 上からの余白
        width: '100%'
      }}
    >

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-1" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: 'bold'}}>
        物件名
      </label>
      <input
        placeholder='〇〇マンション'
        type="text"
        id="name"
        value={inputValue.name}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-3" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        家賃(円)
      </label>
      <input
      placeholder='50000'
        type="text"
        id="rent"
        value={inputValue.rent}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-4" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        面積(m²)
      </label>
      <input
        placeholder='99.99'
        type="text"
        id="area"
        value={inputValue.area}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-5" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold"  }}>
        所在地
      </label>
      <input
        placeholder='〇〇県〇〇市〇〇町9-99-9'
        type="text"
        id="address"
        value={inputValue.address}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        最寄駅
      </label>
      <input
        placeholder='JR〇〇線〇〇駅 徒歩5分'
        type="text"
        id="station"
        value={inputValue.station}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6" style={{ marginBottom: '5px', fontSize: '18px', fontWeight: "bold" }}>
        公開日
      </label>
      <input
        placeholder='YYYY/MM/DD'
        type="text"
        id="published"
        value={inputValue.published}
        onChange={InputChange}
        style={{
          width: '300px',
          height: '20px',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          marginBottom: '20px',
        }}
      />
    </div>


   {/* 画像をアップロード処理する */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6"
       style={{ marginBottom: '5px', fontSize: '`3px', fontWeight: "bold", textAlign: 'center' }}>
        外観をアップロード</label>
      <button onClick={handleImageButtonClick}>画像を選択</button>
      <input 
      type="file"
      accept='image/*'
      ref={fileInputRef}
      onChange={handleFileChange}
      style={{ display: 'none'}}
      />
    </div> 

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6"
       style={{ marginBottom: '5px', fontSize: '`3px', fontWeight: "bold", textAlign: 'center' }}>
        内観をアップロード</label>
      <button onClick={handleImageButtonClick2}>画像を選択</button>
      <input 
      type="file"
      accept='image/*'
      ref={fileInputRef2}
      onChange={handleFileChange2}
      style={{ display: 'none'}}
      />
    </div> 

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label htmlFor="input-field-6"
       style={{ marginBottom: '5px', fontSize: '`3px', fontWeight: "bold", textAlign: 'center' }}>
      間取りをアップロード</label>
      <button onClick={handleImageButtonClick3}>画像を選択</button>
      <input 
      type="file"
      accept='image/*'
      ref={fileInputRef3}
      onChange={handleFileChange3}
      style={{ display: 'none'}}
      />
    </div> 
    </div>

    

  
  );
};

export default InputItem;