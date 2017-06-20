var React = require('react');
var ThumbnailList = require('./thumbnail-list');


var options = {
	logo: 'https://avatars3.githubusercontent.com/u/18554931?v=3&amp;s=460',
	slogan: 'Some text or slogan :)',
	copyright: 'Copiright 2017',
	logoGitHub: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png',
	linkGitHub: 'https://github.com/seoden',
	email: 'somemail@gmail.com',
  thumbnailData:  [{
    title: 'Show Courses',
    number: 120,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
  },{
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

var page = {
		logo: 'https://avatars3.githubusercontent.com/u/18554931?v=3&amp;s=460',
		slogan: 'Some text or slogan :)',
		copyright: '© 2017',
		logoGitHub: '<svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>',
		linkGitHub: 'https://github.com/seoden',
		email: 'denop@ukr.net'
};


var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.content'));

//var header = React.createElement(Header, page);
//React.render(header, document.querySelector('.header-content'));

//var footer = React.createElement(Footer, page);
//React.render(footer, document.querySelector('.footer-content'));