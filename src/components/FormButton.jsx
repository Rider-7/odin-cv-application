import '../styles/FormButton.css';

export default function FormButton(props) {
  const {
    value,
    onClick,
    text = 'Button',
    variant,
    isDisabled = false,
  } = props;

  let className = 'form-button';
  if (variant === 'solid') className += ' form-button--variant-solid';

  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      value={value}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
