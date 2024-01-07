import { useState } from 'react';
import './FormInput.css';

export default function FormInput({ title = '{title}', type = 'text', isTextArea = false, value = null, onChange, isReadOnly = false}) {
  let inputClassName = 'form-input__input';
  if (isReadOnly) inputClassName += ' form-input__input--read-only';
  if (isTextArea) inputClassName += ' form-input__input--text-area';

  const TextArea = (
    <textarea
      className={inputClassName}
      value={value}
      onChange={onChange}
      disabled={isReadOnly}
    />
  );

  const Input = (
    <input
      className={inputClassName}
      type={type}
      value={value}
      onChange={onChange}
      disabled={isReadOnly}
    />
  );

  return (
    <div className="form-input">
      <text className="form-input__title">{title}</text>
      {isTextArea ? TextArea : Input}
    </div>
  );
}
