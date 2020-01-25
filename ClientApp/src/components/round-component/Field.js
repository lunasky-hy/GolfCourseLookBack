import React, { Component } from 'react';

export class Field extends Component {
    static displayName = Field.name;

    constructor(props) {
        super(props);
        this.state = { value: null, s: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.getFieldInfo = this.getFieldInfo.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <h1>ゴルフ場設定</h1>
                <form>
                    <label>ShotNaviコースURL:</label>
                    <input type="text" value={this.state.value} onChange={(e) => {this.handleChange(e)}} />
                    <div id="select-field"></div>
                    <button type="button" onClick={() => { this.getFieldInfo() }}>Submit</button>
                </form>
                {this.state.s}
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
        this.setState({ s: data });
    }
}

// fieldid <= 2458