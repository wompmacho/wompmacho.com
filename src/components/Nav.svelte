<script>
	export let segment;
	import Social from '../components/Social.svelte';

</script>

<style>
	nav {
		background-color: #323233 !important;
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}
	
	li:hover {
		background-color: #474748;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: .3em;
		background-color: #161616;
		display: block;
		bottom: 0px;
	}

	a {
		color: #cccccc;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
	<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		Menu
		<i class="fas fa-bars"></i>
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav">
			<li class=""><a class="" aria-current="{segment === undefined ? 'page' : undefined}" href=".">WompMacho</a></li>
			<li class=""><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
			<li class=""><a aria-current="{segment === 'livestream' ? 'page' : undefined}" href="livestream">Live Stream</a></li>
			<li class=""><a aria-current="{segment === 'esports' ? 'page' : undefined}" href="esports">esports</a></li>
			<li class=""><a aria-current="{segment === 'videography' ? 'page' : undefined}" href="videography">videography</a></li>

			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
			<li><a rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a></li>
		</ul>
	</div>
	<Social></Social>
</nav>
