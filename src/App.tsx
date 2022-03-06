import React, { FC, useState } from 'react';
import './App.css';
import { AgePage, Button, FirstNamePage, LastNamePage } from './components';

enum Steps {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

const App: FC = () => {
  const [activeStep, setActiveStep] = useState(Steps.FIRST);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState<number>(0);

  const renderActiveStep = () => {
    switch (activeStep) {
      case Steps.FIRST:
        return <FirstNamePage firstName={firstName} setFirstName={setFirstName} />;
      case Steps.SECOND:
        return <LastNamePage lastName={lastName} setLastName={setLastName} />;
      case Steps.THIRD:
        return <AgePage age={age} setAge={setAge} />;
    }
  };

  const handleBackButtonClick = () => {
    switch (activeStep) {
      case Steps.FIRST:
        break;
      case Steps.SECOND:
        setActiveStep(Steps.FIRST);
        break;
      case Steps.THIRD:
        setActiveStep(Steps.SECOND);
        break;
    }
  };

  const handleNextButtonClick = () => {
    switch (activeStep) {
      case Steps.FIRST:
        setActiveStep(Steps.SECOND);
        break;
      case Steps.SECOND:
        setActiveStep(Steps.THIRD);
        break;
      case Steps.THIRD:
        alert(`Thank you for your registration ${firstName} ${lastName}!`);
        break;
    }
  };

  const isNextButtonDisabled = () => {
    switch (activeStep) {
      case Steps.FIRST:
        return !firstName;
      case Steps.SECOND:
        return !lastName;
      case Steps.THIRD:
        return !age;
    }
  };

  return (
    <div className="app">
      <div className="content">{renderActiveStep()}</div>
      <div className="controls">
        {activeStep !== Steps.FIRST ? (
          <Button className="button__back" onClick={handleBackButtonClick}>
            BACK
          </Button>
        ) : (
          <span />
        )}

        <Button className="button__next" onClick={handleNextButtonClick} disabled={isNextButtonDisabled()}>
          {activeStep !== Steps.THIRD ? 'NEXT' : 'SUBMIT'}
        </Button>
      </div>
    </div>
  );
};

export default App;
