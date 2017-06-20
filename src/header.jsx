var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="row">
	<div className="col-sm-6 col-md-12">
	 <img src={this.props.logo} alt="..." width="100px" height="100px"></img>
	<h3>{this.props.slogan}</h3>
	</div>
	</div>
  }
});