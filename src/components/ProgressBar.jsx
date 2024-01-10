import '../styles/ProgressBar.css';

export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="progress-bar">
      <Segments steps={steps} currentStep={currentStep} />
      <Subtitle steps={steps} currentStep={currentStep} />
    </div>
  );
}

function Segments(props) {
  const { steps, currentStep } = props;
  const segments = [];
  for (let i = 0; i < steps; i += 1) {
    const segment = i < currentStep
      ? <div key={i} className="progress-bar__segment progress-bar__segment--complete" />
      : <div key={i} className="progress-bar__segment" />;
    segments.push(segment);
  }
  return (
    <div className="progress-bar__segments">
      {segments}
    </div>
  );
}

function Subtitle(props) {
  const { steps, currentStep } = props;
  const subtitle = `Step ${currentStep} of ${steps}`;
  return (
    <span className="progress-bar__subtitle">{subtitle}</span>
  );
}
