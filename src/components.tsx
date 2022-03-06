import React, {FC} from "react";
import classNames from "classnames";

type FirstNamePageProps = {
    firstName: string;
    setFirstName: (firstName: string) => void;
};

export const FirstNamePage: FC<FirstNamePageProps> = ({ firstName, setFirstName }) => (
    <div>
        <h1>Enter your first name</h1>
        <input placeholder="FIRST NAME" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
);

type LastNamePageProps = {
    lastName: string;
    setLastName: (lastName: string) => void;
};

export const LastNamePage: FC<LastNamePageProps> = ({ lastName, setLastName }) => (
    <div>
        <h1>Enter your last name</h1>
        <input placeholder="LAST NAME" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    </div>
);

type AgePageProps = {
    age: number | undefined;
    setAge: (age: number) => void;
};

export const AgePage: FC<AgePageProps> = ({ age, setAge }) => (
    <div>
        <h1>Enter your age</h1>
        <input type="number" placeholder="AGE" min={0} value={age || ''} onChange={(e) => setAge(Number(e.target.value))} />
    </div>
);

type ButtonProps = {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ className, onClick, disabled = false, children }) => (
    <button className={classNames('button', className)} onClick={onClick} disabled={disabled}>
        {children}
    </button>
);
