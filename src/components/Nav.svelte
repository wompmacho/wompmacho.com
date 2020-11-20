<script>
	import Social from '../components/Social.svelte';
	export let segment;
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<li class="nav-item rounded brand"><a class="nav-item" rel=prefetch aria-current="{segment === undefined ? 'page' : undefined}" href=".">WompMacho</a></li>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	  <span class="navbar-toggler-icon"></span>
	</button>
  
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul class="navbar-nav mr-auto">
		<li class="nav-item rounded"><a class="nav-link" rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li class="nav-item rounded"><a class="nav-link" rel=prefetch aria-current="{segment === 'livestream' ? 'page' : undefined}" href="livestream">Live Stream</a></li>
		<li class="nav-item rounded"><a class="nav-link" rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></li>
	  </ul>
	  <Social></Social>
	</div>
  </nav>
<style>

	.navbar-collapse{
		text-align: center;
	}

	nav {
		background-color: #323233 !important;
		padding: 0rem 1rem !important;
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
		background-color: #161616;
		width: 100%;
	}

	a {
		color: #cccccc !important;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	@media only screen and (max-width: 769px) {
		.nav-link{
			box-shadow: 0px 0px 2px #000000;
		}
    }
</style>
