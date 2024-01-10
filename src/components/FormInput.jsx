import '../styles/FormInput.css';

export default function FormInput(props) {
  const {
    title = '{title}',
    type = 'text',
    isTextArea = false,
    isReadOnly = false,
    inputMode = 'text',
    onChange,
    value,
  } = props;

  let subClassName = 'form-input__input';
  let mainClassName = 'form-input';
  const titleClassName = 'form-input__title';

  if (isReadOnly) subClassName += ' form-input__input--read-only';
  if (isTextArea) {
    mainClassName += ' form-input--text-area';
    subClassName += ' form-input__input--text-area';
  }

  const TextArea = (
    <textarea
      name={title}
      className={subClassName}
      value={value}
      onChange={onChange}
      disabled={isReadOnly}
    />
  );

  const Input = (
    <input
      name={title}
      className={subClassName}
      type={type}
      value={value}
      onChange={onChange}
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
