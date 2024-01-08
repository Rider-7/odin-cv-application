import { useState } from 'react';
import './FormInput.css';

export default function FormInput({ title = '{title}', type = 'text', isTextArea = false, isReadOnly = false, inputMode = "text" }) {
  let subClassName = 'form-input__input';
  let mainClassName = 'form-input';
  const titleClassName = 'form-input__title';

  if (isReadOnly) subClassName += ' form-input__input--read-only';
  if (isTextArea) {
    mainClassName += ' form-input--text-area';
    subClassName += ' form-input__input--text-area';
  }

  const [value, setValue] = useState('');

  function handleOnChange(e) {
    setValue(e.target.value);
  }

  const TextArea = (
    <textarea
      className={subClassName}
      value={value}
      onChange={handleOnChange}
      disabled={isReadOnly}
    />
  );

  const Input = (
    <input
      className={subClassName}
      type={type}
      value={value}
      onChange={handleOnChange}
      disabled={isReadOnly}
      inputMode={inputMode}
    />
  );

  return (
    <div className={mainClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {isTextArea ? TextArea : Input}
    </div>
  );
}
