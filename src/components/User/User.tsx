import * as React from 'react';
import { memo, FC, MouseEvent } from 'react';

import { Button } from '../Button/Button';

import * as css from './theme/User.styl';

import { List } from './User.model';

type UserProps = {
    data?: List[];
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    pending: boolean;
}

export const User: FC<UserProps> = memo( props => {
    const { data, onClick, pending } = props;
    const role = localStorage.getItem('role');
    const isAdmin = role === 'admin';
    const name = data.length > 0 && data[0].name;
    const description = data.length > 0 && data[0].description;

    return (
        <div onClick={onClick}>
            <div className={css.item}>
                <div className={css.title}> Name:</div>
                <div className={css.name} contentEditable={false}>
                    {pending ? 'Данные загружаются...' : name}
                </div>
            </div>
            <div className={css.item}>
                <div className={css.title}>Description:</div>
                <div className={css.name} contentEditable={false}>
                    {pending ? 'Данные загружаются..' : description}
                </div>
                {isAdmin && <Button>edit</Button> }
            </div>
        </div>
    )
});
