import React, { useContext, useState } from 'react';
import { InfomationContext } from '../App.jsx';

const InputItem = () => {
  console.log('aaaa')
  const [inputValue, setInputValue] = useState({
    name: '',
    rent: '',
    area: '',
    address: '',
    station: '',
    published: '',
  });

  const InputChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const [value, setValue] = useContext(InfomationContext);

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
        家賃
      </label>
      <input
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
        面積
      </label>
      <input
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
    </div>
  );
};

export default InputItem;