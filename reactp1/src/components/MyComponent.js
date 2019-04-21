import React from 'react';

class MyComp extends React.Component {

    render(props) {
    	// console.log(this.props)
            return (
                <div>
                    <h1>Hello World from MyComp {this.props.whatToSay} </h1>
                    <button onClick={this.props.onClick} > Push me 2</button>
                </div>
            )
        }
}
export default MyComp;