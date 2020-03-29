import * as React from 'react';
import { memo, FC, MouseEvent} from 'react';

import { Button } from '../Button/Button';

import * as css from './theme/Navigation.styl';

type NavigationProps = {
    current: number;
    onClick: (e: MouseEvent<HTMLDivElement>) => void;
    length: number;
};

export const Navigation: FC<NavigationProps> = memo(props => {
    const { length, onClick, current } = props;
    const disabledNext = current === length ? true : false;
    const disabledPrev = current === 1 ? true : false;
    return (
        <div className={css.container} onClick={onClick}>
            <Button disabled={disabledPrev}>{`<`}</Button>
            <span>
                <span>{ current } </span>
                from
                <span> { length } </span>
            </span>
            <Button disabled={disabledNext}>{`>`}</Button>
        </div>
    )
});