import './FormButton.css';

export default function FormButton({ value = '{value}', onClick = ()=> alert('No input event handler!') }) {
  return (
    <button
      className="form-button"
      type="button"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
