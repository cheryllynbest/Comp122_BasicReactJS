import React from 'react';

class MyComp extends React.Component {

    render(props) {
    	// console.log(this.props)
            return (
                <div>
                    <h1>Hello World from OddComp {this.props.whatToSay} </h1>
                  
                </div>
            )
        }
}
export default MyComp;