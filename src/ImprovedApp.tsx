import React, { FC, useState } from 'react';
import './App.css';
import { AgePage, Button, FirstNamePage, LastNamePage } from './components';

enum Steps {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

type StepConfig = {
  content: JSX.Element;
  backButton: JSX.Element;
  nextButton: JSX.Element;
};

const ImprovedApp: FC = () => {
  const [activeStep, setActiveStep] = useState(Steps.FIRST);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState<number>(0);

  const renderNextButton = (text: string, disabled: boolean, onClick: () => void) => (
    <Button className="button__next" onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );

  const renderBackButton = (onClick: () => void) => (
    <Button className="button__back" onClick={onClick}>
      BACK
    </Button>
  );

  const stepConfigs: Record<Steps, StepConfig> = {
    [Steps.FIRST]: {
      content: <FirstNamePage firstName={firstName} setFirstName={setFirstName} />,
      backButton: <span />,
      nextButton: renderNextButton('NEXT', !firstName, () => setActiveStep(Steps.SECOND)),
    },
    [Steps.SECOND]: {
      content: <LastNamePage lastName={lastName} setLastName={setLastName} />,
      backButton: renderBackButton(() => setActiveStep(Steps.FIRST)),
      nextButton: renderNextButton('NEXT', !lastName, () => setActiveStep(Steps.THIRD)),
    },
    [Steps.THIRD]: {
      content: <AgePage age={age} setAge={setAge} />,
      backButton: renderBackButton(() => setActiveStep(Steps.SECOND)),
      nextButton: renderNextButton('SUBMIT', !age, () =>
        alert(`Thank you for your registration ${firstName} ${lastName}!`)
      ),
    },
  };

  const activeStepConfig = stepConfigs[activeStep];

  return (
    <div className="app">
      <div className="content">{activeStepConfig.content}</div>
      <div className="controls">
        {activeStepConfig.backButton}
        {activeStepConfig.nextButton}
      </div>
    </div>
  );
};

export default ImprovedApp;
