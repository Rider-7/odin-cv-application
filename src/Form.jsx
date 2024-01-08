import { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';
import FormButton from './FormButton';
import './Form.css';
import cv from './cv-sections.json';

export default function Form() {
  const steps = 4;
  const [currentStep, setCurrentStep] = useState(1);

  function navDelegator(e) {
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
    <div className="form">
      <h1 className="form__header">{cv[currentStep].section}</h1>
      <ProgressBar steps={steps} currentStep={currentStep} />
      <Section currentStep={currentStep} />
      <Navigation onClickDelegator={navDelegator} currentStep={currentStep} />
    </div>
  );
}

function Section({ currentStep }) {
  // Bound checking.
  if (currentStep > Object.keys(cv).length) {
    return <div className="form__section" />;
  }

  const { fields } = cv[currentStep];

  return (
    <div className="form__section">
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

function Navigation({ onClickDelegator, currentStep }) {
  return (
    <div className="form__nav-main">
      <div className="form__nav-left">
        <FormButton value="save_exit" text="Save & Exit" onClick={onClickDelegator} />
      </div>
      <div className="form__nav-right">
        <FormButton value="prev" text="Previous" onClick={onClickDelegator} isDisabled={currentStep <= 1} />
        <FormButton value="next" text="Next" onClick={onClickDelegator} />
      </div>
    </div>
  );
}