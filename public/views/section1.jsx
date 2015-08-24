
'use strict';

var React = require('react');

module.exports = React.createClass({
  getInitialState:function(){
    return {
      comments:['Who made React?']
    }
  },
  onClickAnswer:function(ev){
    var comments = this.state.comments;
    comments.push('Facebook did.');
    this.setState({
      comments:comments
    })
  },
  render: function render() {
    return (
    	<section className="spa-section">
        	<h2>Section 1</h2>
        	<p>This is the first section loaded using react router on the client. It is implemented as a ReactJS component.</p>
            <ol>
                {this.state.comments.map(function(comment){
                    return (<li>{comment}</li>)
                })}
            </ol>
            <button onClick={this.onClickAnswer}>Answer it</button>
        </section>
    );
  }
});
