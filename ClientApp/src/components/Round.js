import React, { Component } from 'react';
import { Field } from './round-component/Field';
import { Course } from './round-component/Course';

export class Round extends Component {
    static displayName = Round.name;

    constructor(props) {
        super(props);
        this.state = {
            nowPage: 0,
            field: null,
        };
    }

    render() {
        return (
            <div>
                <Field setF={(i) => { this.setField(i) }} />
                <Course course={this.state.field} />
            </div>
        );
    }

    setField(info) {
        console.log(info)
        this.setState({
            field: {
                name: info["field"],
                id: info["fieldid"],
                course: info["course"],
            }
        });
    }
}