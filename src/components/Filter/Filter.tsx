import * as React from 'react';
import {FC, memo} from 'react';
import * as cl from 'classnames';

import { FilterList } from './filter.fixture';

import * as css from './theme/Filter.styl';

type FilterProps = {
    onClick: (id: number, filter: string) => void;
    activeFilter: number;
}

type ListProps = {
    onClick?: () => void;
}

const newProps: ListProps = {};

export const Filter: FC<FilterProps> = memo(props => {
    const { onClick, activeFilter } = props;
    return (
        <ul className={css.list}>
            {FilterList.map( ({ title, filter, id }) => {
                const className = cl(css.item, {
                    [css.itemActive]: id === activeFilter
                });
                newProps.onClick = () => {
                    onClick && onClick(id, filter);
                };
                return <li className={className}  key={id} {...newProps}>{title}</li>
            })}
        </ul>
    )
});