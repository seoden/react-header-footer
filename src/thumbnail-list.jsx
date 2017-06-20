var React = require('react');
var Thumbnail = require('./thumbnail');
var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });


    return <div><Header logo={this.props.logo} slogan={this.props.slogan} />
	<div className="row">{list}</div>
	<Footer copyright={this.props.copyright} logoGitHub={this.props.logoGitHub} linkGitHub={this.props.linkGitHub} email={this.props.email} />
	</div>
  }
});
