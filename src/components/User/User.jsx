import React, { Component } from 'react';

export class User extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>Name:</div>
                    <div>*name*</div>
                    <button>edit</button>
                </div>
                <div>
                    <div>Description:</div>
                    <div>*description*</div>
                    <button>edit</button>
                </div>
            </div>
        )
    }
}