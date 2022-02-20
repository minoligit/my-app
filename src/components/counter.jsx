import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 50,
        name: "",
        branches: ["b1","b2","b3","b4"]
    } ;

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                {this.renderBranches()}
                <button className='btn btn-primary' onClick={this.increase}>Add</button>
                <button className='btn btn-danger' onClick={this.decrease}>Remove</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge bg-";
        classes += this.state.count < 10 ? "warning" : "success";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }

    renderBranches(){
        if(this.state.branches.length === 0) return <p>No Branches</p>;
        else return <ul>{this.state.branches.map(branch => <li key={branch}>{branch}</li>)}</ul>;
    }

    increase = () =>{
        this.setState({count: this.state.count + 1});
    };
    decrease = () =>{
        this.setState({count: this.state.count - 1});
    };
}
 
export default Counter;
