// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/projects/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'WompMacho.com',
		slug: 'this-website',
		html: `
			<h3>About This Site goes here</h3>
		`
	},
	{
		title: 'Django Site',
		slug: 'django',
		html: `
			<h3>About Django Site goes here</h3>
		`
	},
	{
		title: 'Tuner',
		slug: 'tuner',
		html: `
			<h3>About Tuner JS goes here</h3>
		`
	},
	{
		title: 'Sound Visualizer',
		slug: 'sound-visualizer',
		html: `
			<h3>About Sound Visualizer JS goes here</h3>
		`
	},
	{
		title: 'Fractal Tree App',
		slug: 'fractal-tree-java-applet',
		html: `
			<h3>About Fractal Tree Java Applet App goes here</h3>
		`
	},
	{
		title: 'Wompchat Chrome Extension',
		slug: 'wompchat',
		html: `
			<h3>About Wompchat Chrome Extension goes here</h3>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
