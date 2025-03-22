import React, { useState } from "react";

const TextFormatter: React.FC = () => {
  const [inputText, setInputText] = useState<string>(""); //Состояние для текста в поле ввода
  const [formattedText, setFormattedText] = useState<string>(""); //состояние для отформатированног текста

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value); //обновляем состояние для изменения текста в поле
  };

  const handleButtonClick = () => {
    const transformedText = inputText.toUpperCase();
    setFormattedText(transformedText);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <button onClick={handleButtonClick}>Отобразить текст</button>
      <div style={{ marginTop: "20px", color: "pink", fontWeight: "bold" }}>
        {formattedText}
      </div>
    </div>
  );
};

export default TextFormatter;
