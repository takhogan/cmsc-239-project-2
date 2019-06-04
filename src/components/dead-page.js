import React, { Component } from 'react';

export default class Dead extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div style={{textAlign: "center"}} id="no-troops">
                <div>There were no stormtroopers active in this timeframe...</div>
                <div>Use the timeline above to explore a different era!</div>
            </div>
        );
    }
}