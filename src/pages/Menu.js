import React from 'react';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    /*chooseVideo() expects a string an an argument. But, event handlers are automatically passed
    * event objects, not strings. Therefore, we need handleClick() to wrap chooseVideo(),
    * so as to take an event object as an argument and extract it's value.*/
    handleClick(e) {
        const text = e.target.value;
        this.props.chooseVideo(text);
    }

    render() {
        return (
            /*Attach <App/>'s passed-in function to the onClick event listener.
            * handleClick() will be the event handler function.*/
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="fast"/> fast
                <input type="radio" name="src" value="slow"/> slow
                <input type="radio" name="src" value="cute"/> cute
                <input type="radio" name="src" value="eek"/> eek
            </form>
        );
    }
}