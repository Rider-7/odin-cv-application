import './FormButton.css';

export default function FormButton({ value, onClick, text = "Button", variant }) {
  let className = 'form-button';
  if (variant === 'solid') className += ' form-button--variant-solid';

  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      value={value}
    >
      {text}
    </button>
  );
}
