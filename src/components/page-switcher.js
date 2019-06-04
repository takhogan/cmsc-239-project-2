import React, { Component } from 'react';
import { select, selectAll } from 'd3-selection';

export default class Pages extends Component {
    constructor() {
        super();

        this.state = { page: 1 };
    }

    componentDidMount() {
        setInterval(() => {
            let page = () => {
                let year = this.props.get_gy();
                if (year >= 21)
                    return 5;
                else if (year >= 6)
                    return 4;
                else if (year >= -19)
                    return 3;
                else if (year >= -21)
                    return 2;
                else if (year >= -22)
                    return 1;
                else
                    return 0;
            };

            this.setState({ page: page() });

            switch(this.state.page) {
                case 1:
                    select("#no-troops").style("display", "none");
                    select("#phase1").style("display", "inline");
                    select("#phase2").style("display", "none");
                    select("#empire").style("display", "none");
                    select("#FO").style("display", "none");
                    break;
                case 2:
                    select("#no-troops").style("display", "none");
                    select("#phase1").style("display", "none");
                    select("#phase2").style("display", "inline");
                    select("#empire").style("display", "none");
                    select("#FO").style("display", "none");
                    break;
                case 3:
                    select("#no-troops").style("display", "none");
                    select("#phase1").style("display", "none");
                    select("#phase2").style("display", "none");
                    select("#empire").style("display", "inline");
                    select("#FO").style("display", "none");
                    break;
                case 5:
                    select("#no-troops").style("display", "none");
                    select("#phase1").style("display", "none");
                    select("#phase2").style("display", "none");
                    select("#empire").style("display", "none");
                    select("#FO").style("display", "inline");
                    break;
                case 0:
                case 4:
                default:
                    select("#no-troops").style("display", "inline");
                    select("#phase1").style("display", "none");
                    select("#phase2").style("display", "none");
                    select("#empire").style("display", "none");
                    select("#FO").style("display", "none");
                    break;
            }
        }, 500);
    }

    render() {
        return(
            <div id="page-switcher"></div>
        );
    }
}
