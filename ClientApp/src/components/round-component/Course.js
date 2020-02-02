import React, { Component } from 'react';
import classNames from 'classnames';
import './course.css';

export class Course extends Component {
    static displayName = Course.name;

    constructor(props) {
        super(props);
        this.state = {
            select: [],
        };
    }

    nonData() {
        return (
            <div>
                <hr />
                <small>Hints: ゴルフ場を選択してください。</small>
            </div>
        );
    }

    handleCourse(link) {
        var arr = this.state.select.slice();
        if (arr.indexOf(link) == -1) {
            arr.push(link);
            this.setState({ select: arr });
        } else {
            arr.splice(arr.indexOf(link), 1);
            this.setState({ select: arr })
        }
    }

    courseSelect() {
        return (
            <div>
                <hr />
                <h3>コースを設定</h3>
                <ul>
                    {this.props.course["course"].map((data) => {
                        var arr = this.state.select.slice();
                        var class_elem = classNames('course', {
                            'select': arr.some((v) => { return v == data["link"]}),
                        });
                        return (
                            <li className={class_elem}
                                onClick={() => this.handleCourse(data["link"])}>
                                {data["name"]}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    render() {
        if (this.props.course)
            return this.courseSelect();
        else
            return this.nonData();
    }
}