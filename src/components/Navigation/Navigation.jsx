import React, { Component, Fragment } from 'react';

export class Navigation extends Component {
    render() {
        return (
            <Fragment>
                <button>prev</button>
                <span>
                        <span>1</span>
                        from
                        <span>6</span>
                    </span>
                <button>next</button>
            </Fragment>
        )
    }
}