import React, { Component } from 'react';

export class Course extends Component {
    static displayName = Course.name;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>コース設定</h1>
            </div>
        );
    }
}