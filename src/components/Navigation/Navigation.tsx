import * as React from 'react';
import {memo, FC} from 'react';

import { Button } from '../../components/Button/Button';

import * as css from './theme/Navigation.styl';

const buttonTheme = {
    container: css.buttonContainer,
};

type NavigationProps = {
    current: number;
    onClick: () => void;
    length: number;
};

export const Navigation: FC<NavigationProps> = memo(props => {
    const { length, onClick, current } = props;
    return (
        <div className={css.container} onClick={onClick}>
            <Button theme={buttonTheme}>{`<`}</Button>
            <span>
                <span>{ current } </span>
                from
                <span> { length } </span>
            </span>
            <Button theme={buttonTheme}>{`>`}</Button>
        </div>
    )
});