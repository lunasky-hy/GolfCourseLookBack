import React, { Component } from 'react';
import './course.css'

export class Course extends Component {
    static displayName = Course.name;

    constructor(props) {
        super(props);
        this.state = {};
    }

    nonData() {
        return (
            <div>
                <hr />
                <small>Hints: ゴルフ場を選択してください。</small>
            </div>
        );
    }

    courseSelect() {
        return (
            <div>
                <hr />
                <h3>コースを設定</h3>
                <ul>
                    {this.props.course["course"].map((data) => {
                        return (
                            <li className="course">{data["name"]}</li>
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