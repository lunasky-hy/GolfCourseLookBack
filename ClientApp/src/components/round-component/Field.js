import React, { Component } from 'react';

export class Field extends Component {
    static displayName = Field.name;

    constructor(props) {
        super(props);
        this.state = { value: null, course: 0, btn_disable: false };
        this.handleChange = this.handleChange.bind(this);
        this.getFieldInfo = this.getFieldInfo.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value, btn_disable:false })
    }

    render() {
        return (
            <div>
                <h1>ゴルフ場設定</h1>
                <form>
                    <label>
                        <a href="http://shotnavi.jp/gc/">ShotNavi</a>コースURL:
                    </label>
                    <input type="text"
                        value={this.state.value}
                        onChange={(e) => { this.handleChange(e) }} />
                    <button type="button"
                        onClick={() => { this.getFieldInfo() }}
                        disabled={this.state.btn_disable}
                    >
                        ゴルフ場検索
                    </button>
                </form>
                <div id="select-field"></div>
            </div>
        );
    }

    async getFieldInfo() {
        var text_url = this.state.value.toString();
        var courseId = text_url.match(/\d+/)[0];
        const response = await fetch('/field?num=' + courseId, {
            method: "GET",
            headers: {},
        });
        const data = await response.text();
        this.setState({ course: data, btn_disable: true });
    }
}

// fieldid <= 2458