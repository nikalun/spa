import * as React from 'react';
import { FC } from 'react';

type ButtonProps = {
    children: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = props => {
    const { children, onClick, disabled } = props;
    return <button disabled={disabled} onClick={onClick}>{children}</button>
};