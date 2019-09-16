import React, {FC} from 'react';
import './Error.scss';
import Button from './Button';

interface IErrorProps {
    message: string;
    action: () => void;
}

const Error: FC<IErrorProps> = (props) => {
    const {message, action} = props;

    return (
        <section className={'error-component'}>
            <p className={'message'}>
                {message}
            </p>
            <Button onCLick={action}>
                Try Again
            </Button>
        </section>
    );
};

export default Error;
