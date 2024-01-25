import React, { FC, PropsWithChildren } from 'react';
import './style.css';

type Props = PropsWithChildren<{
    onClick: () => void;
    disabled?: boolean;
}>;


const Button: FC<Props> = (props) => {
    const { onClick, children, disabled } = props;
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className='button'>
            {children}
        </button>
    )
}

export default Button;