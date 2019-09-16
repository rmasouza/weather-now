import React, {DetailedHTMLProps, FC, HTMLAttributes, MouseEventHandler} from 'react';
import './Button.scss'

interface IButtonProps {
    onCLick: () => void;
}

const Button: FC<IButtonProps> = (props) => {
    const { onCLick, children } = props;
    return (
        <button className={'button-component'} onClick={onCLick}>
            {children}
        </button>
    )
}

export default Button;
