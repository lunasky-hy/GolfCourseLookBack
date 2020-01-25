import React, { Component } from 'react';
import { Field } from './round-component/Field';
import { Course } from './round-component/Course';

export class Round extends Component {
    static displayName = Round.name;

    constructor(props) {
        super(props);
        this.state = {
            "nowPage": 0,
            "field": null,
            "course": null,
        };
        this.const = {
            "pages": [
                <Field next={() => this.nextPage()} />,
                <Course next={() => this.nextPage()} />
            ]
        };
    }

    nextPage() {
        this.state.nowPage += 1;
    }

    render() {
        return (
            <div>
                    {this.const["pages"][this.state["nowPage"]]}
            </div>
            );
    }
}