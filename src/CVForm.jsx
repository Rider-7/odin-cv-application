import { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';
import FormButton from './FormButton';
import './CVForm.css';
import cv from './cv-sections.json';

export default function CVForm() {
  const steps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  function onClickDelegator(e) {
    switch (e.target.value) {
      case 'next':
        if (currentStep < steps) setCurrentStep(currentStep + 1);
        break;
      case 'prev':
        if (currentStep > 1) setCurrentStep(currentStep - 1);
        break;
      default:
        throw new Error('navController error!');
    }
  }

  return (
    <div className="cv-form">
      <h1 className="cv-form__header">General Information</h1>
      <ProgressBar steps={steps} currentStep={currentStep} />
      <Section currentStep={currentStep} />
      <Navigation onClickDelegator={onClickDelegator} />
    </div>
  );
}

function Section({ currentStep }) {
  // Bound checking.
  if (currentStep > Object.keys(cv).length) {
    return <div className="cv-form__section" />;
  }

  const { fields } = cv[currentStep];

  return (
    <div className="cv-form__section">
      {fields.map((field) => (
        <FormInput
          key={field.title}
          title={field.title}
          type={field.type}
          inputMode={field.inputMode}
          isTextArea={field.isTextArea}
        />
      ))}
    </div>
  );
}

function Navigation({ onClickDelegator }) {
  return (
    <div className="cv-form__nav-main">
      <div className="cv-form__nav-left">
        <FormButton value="save_exit" text="Save & Exit" onClick={onClickDelegator} />
      </div>
      <div className="cv-form__nav-right">
        <FormButton value="prev" text="Previous" onClick={onClickDelegator} />
        <FormButton value="next" text="Next" onClick={onClickDelegator} />
      </div>
    </div>
  );
}