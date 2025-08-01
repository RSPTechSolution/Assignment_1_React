import {Component} from 'react';

class ClassCounter extends Component {
    state = {count: 0};
    render( ) {
        return (
            <>
                <div className="class-comp compo">
                    <h1>Class Component</h1>
                    <div className="label">{this.state.count}</div>
                    <div className="action-button">
                        <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
                        <button onClick={() => this.state.count > 0 && this.setState({count: this.state.count - 1})}>-</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassCounter;
