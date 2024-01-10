import { useState } from 'react';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';
import FormButton from './FormButton';
import '../styles/Form.css';
import sections from '../form-data.json';

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});

  const steps = Object.keys(sections).length;
  const totalSteps = steps + 1;

  let sectionName;
  let currentFields;
  let Body;

  if (currentStep <= steps) {
    sectionName = sections[currentStep].name;
    currentFields = sections[currentStep].fields;
    Body = <Section fields={currentFields} userData={userData} inputHandler={inputHandler} />;
  } else {
    sectionName = 'Review';
    Body = <Review userData={userData} />;
  }


  function inputHandler(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  function navDelegator(e) {
    switch (e.target.value) {
      case 'review':
      case 'next':
        if (currentStep <= steps) setCurrentStep(currentStep + 1);
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
      <ProgressBar steps={totalSteps} currentStep={currentStep} />
      {Body}
      <Navigation onClickDelegator={navDelegator} currentStep={currentStep} />
    </div>
  );
}

function Section({ fields, userData, inputHandler, isReadOnly = false }) {
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
          isReadOnly={isReadOnly}
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

function Review({ userData }) {
  const sectionsArr = Object.values(sections);
  const Body = [];

  let hrCounter = 0;
  sectionsArr.forEach((section) => {
    const jsx = (
      <div key={section.name} className="form__review-section">
        <h2 className="form__sub-header">{section.name}</h2>
        <Section
          fields={section.fields}
          userData={userData}
          isReadOnly
        />
        <div className="form__container--centre"><FormButton variant="solid" value={section.name} text="Edit Section" /></div>
        {hrCounter < sectionsArr.length - 1 && <hr className="form__hr" />}
      </div>
    );
    hrCounter += 1;
    Body.push(jsx);
  });

  return (
    <div className="form__review">
      {Body}
    </div>
  );
}
