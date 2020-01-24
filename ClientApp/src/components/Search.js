import React, { Component } from 'react';

export class Search extends Component {
    static displayName = Search.name;

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>ゴルフ場の検索</h1>
                <form>
                    検索ワード：
                    <input type="text" name="name" />
                </form>
            </div>
        );
    }
}