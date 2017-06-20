var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="row">
	<div className="col-sm-6 col-md-12">
	<p>{this.props.copyright}</p>
	<img src={this.props.logoGitHub} alt="..." width="50px" height="50px"></img>
	<a href={this.props.linkGitHub}>GitHub</a><br/>
	Email: {this.props.email}
	</div>
	</div>
  }
});