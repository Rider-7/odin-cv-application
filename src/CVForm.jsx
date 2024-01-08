import { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';
import FormButton from './FormButton';
import './CVForm.css';

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

// TODO: Make this component dynamic.
function Section({ currentStep }) {
  switch (currentStep) {
    case 1:
      return (
        <div className="cv-form__section">
          <FormInput title="First Name" type="text" />
          <FormInput title="Last Name" type="text" />
          <FormInput title="Email" type="email" />
          <FormInput title="Phone Number" type="text" inputMode="numeric" />
        </div>
      );
    case 2:
      return (
        <div className="cv-form__section">
          <FormInput title="University" type="text" />
          <FormInput title="Major" type="text" />
          <FormInput title="Graduation Date" type="date" />
          <FormInput title="GPA" type="text" inputMode='numeric' />
        </div>
      );
    case 3:
      return (
        <div className="cv-form__section">
          <FormInput title="Company" type="text" />
          <FormInput title="Position Title" type="text" />
          <FormInput title="Start Date" type="date" />
          <FormInput title="End Date" type="date" />
          <FormInput title="Responsibilites" isTextArea />
      </div>
      );
    default:
      return <span>ERROR</span>;
  }
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