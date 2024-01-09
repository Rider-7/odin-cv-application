import { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';
import FormButton from './FormButton';
import './Form.css';
import sections from './form-data.json';

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const sectionName = sections[currentStep].name;
  const steps = Object.keys(sections).length;
  const currentFields = sections[currentStep].fields;

  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

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
      <h1 className="form__header">{sectionName}</h1>
      <ProgressBar steps={steps} currentStep={currentStep} />
      <Section fields={currentFields} userData={userData} inputHandler={inputHandler} />
      <Navigation onClickDelegator={navDelegator} currentStep={currentStep} />
    </div>
  );
}

function Section({ fields, userData, inputHandler }) {
  return (
    <div className="form__section">
      {fields.map((field) => (
        <FormInput
          key={field.title}
          title={field.title}
          type={field.config.type}
          inputMode={field.config.inputMode}
          isTextArea={field.config.isTextArea}
          value={userData[field.title] ? userData[field.title] : ''}
          onChange={inputHandler}
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

// function Review({ userData, }) {
//   Array.from(sections).forEach(section => {
//     <h1 className="form__sub-header">{sectionName}</h1>
//   });
// }