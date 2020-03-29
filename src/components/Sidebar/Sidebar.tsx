import * as React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { paths } from './Sidebar.fixture';

import * as css from './theme/Sidebar.styl';


export const Sidebar: FC = props => {
    return (
        <div className={css.container}>
            <nav>
                {paths.map(({ url, title }, idx) => <li key={idx} className={css.item}> <Link to={url}>{title}</Link> </li> )}
            </nav>
        </div>
    );
};
