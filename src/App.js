import React, { useState } from 'react';

function ColorConverter() {
  const [hex, setHex] = useState('');  
  const [rgb, setRgb] = useState(''); 
  const [error, setError] = useState(false);  
  // Функция для проверки и преобразования HEX в RGB
  const handleHexChange = (e) => {
    const input = e.target.value;
    setHex(input); 

    // Проверка длины строки
    if (input.length === 7) {
      if (isValidHex(input)) {
        const rgbColor = hexToRgb(input);  
        setRgb(rgbColor);
        setError(false);
        document.body.style.backgroundColor = input; 
      } else {
        setError(true);
        setRgb('');
        document.body.style.backgroundColor = 'red';  
      }
    }
  };

  // Регулярка для проверки валидности HEX-кода
  const isValidHex = (hex) => {
    return /^#[0-9A-Fa-f]{6}$/i.test(hex);  
  };

  // Функция для конвертации HEX в RGB
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className='container'>
      <h1>Color Converter</h1>
      <input
        type="text"
        value={hex}
        onChange={handleHexChange}
        placeholder="#FFFFFF"
        maxLength="7"  
      />
      <div>
        {error ? (
          <p>Ошибка: Неверный HEX-код!</p>
        ) : (
          <p>RGB: {rgb}</p>
        )}
      </div>
    </div>
  );
}

export default ColorConverter;

