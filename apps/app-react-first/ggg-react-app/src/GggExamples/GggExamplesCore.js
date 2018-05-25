import React, { Component } from 'react';

class GggExamplesPageContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let pagesHtml = [];
        this.props.pages.forEach((page) => {
            pagesHtml.push(<div key={page.title}>
                <div>
                    <a href={page.url}>{page.title}</a>
                </div>
            </div>);
        });
        return <div>{pagesHtml}</div>
    }
}
class GggExamplesCore extends Component {
    constructor() {
        super()
        this.state = {
            pages: this.getPages()
        }
    }
    getPages() {
        var pages = [];
        pages.push({
            url: "/GggExamples.html",
            title: "Ggg Examples Core"
        });
        pages.push({
            url: "/GggThinkingInReact.html",
            title: "Ggg Thinking in React"
        });
        pages.push({
            url: "/GggAdvancedGuides.html",
            title: "Ggg Advanced Guides"
        });
        return pages;
    }
    render() {
        let spacing = 2;
        return (
            <div>
                <h2>Ggg Examples</h2>
                <GggExamplesPageContainer pages={this.state.pages}></GggExamplesPageContainer>
                <hr style={{ marginBottom: spacing + 'em' }} />
            </div>
        );
    }
}
export default GggExamplesCore;