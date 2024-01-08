import { useState } from 'react';
import './FormInput.css';

export default function FormInput({ title = '{title}', type = 'text', isTextArea = false, isReadOnly = false, inputMode = "text" }) {
  let inputClassName = 'form-input__input';
  if (isReadOnly) inputClassName += ' form-input__input--read-only';
  if (isTextArea) inputClassName += ' form-input__input--text-area';

  const [value, setValue] = useState('');

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  const TextArea = (
    <textarea
      className={inputClassName}
      value={value}
      onChange={handleOnChange}
      disabled={isReadOnly}
    />
  );

  const Input = (
    <input
      className={inputClassName}
      type={type}
      value={value}
      onChange={handleOnChange}
      disabled={isReadOnly}
      inputMode={inputMode}
    />
  );

  return (
    <div className="form-input">
      <h2 className="form-input__title">{title}</h2>
      {isTextArea ? TextArea : Input}
    </div>
  );
}
