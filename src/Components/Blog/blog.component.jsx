import React from 'react';
import ReactMarkdown from 'react-markdown'
import termsFrPath from './blog'

class Terms extends Component {
    constructor(props) {
        super(props)

        this.state = { terms: null }
    }

    componentWillMount() {
        fetch(termsFrPath).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    }

    const log = () => {
        return (
            <p>hi</p>
        );
    }

    export default log;