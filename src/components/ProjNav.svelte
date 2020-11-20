<script>
	export let segment;
</script>

<ul class="navbar-nav shadow rounded">
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'womp-chat' ? 'page' : undefined}" href="/projects/womp-chat">WompChat</a></li>
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'this-website' ? 'page' : undefined}" href="/projects/this-website">This Site</a></li>
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'django-site' ? 'page' : undefined}" href="/projects/django-site">Django Site</a></li>
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'videography' ? 'page' : undefined}" href="/projects/videography">Videography</a></li>
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'fractal-tree-app' ? 'page' : undefined}" href="/projects/fractal-tree-app">Fractal Tree App</a></li>
	<li class="rounded"><a  aria-current="{segment === 'audio-visualizer' ? 'page' : undefined}" href="/projects/audio-visualizer">Audio Visualizer</a></li>
	<li class="rounded"><a  aria-current="{segment === 'tuner' ? 'page' : undefined}" href="/projects/tuner">Guitar Tuner</a></li>
</ul>

<style>
    a {
		color: #cccccc;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		text-align: center;
		width: 100%;
	}

	ul {
		margin: 0;
		padding: 0;
        flex-direction: row;
        background-color: #323233;
		height: 100%;
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
		width: 10em;
	}
	
	li:hover {
		background-color: #474748;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		background-color: #161616;
		font-weight: 700;
	}

	@media only screen and (max-width: 769px) {
        .navbar-nav{
			flex-direction: column;
			text-align: center;
			width: max-content;
			margin: auto;
        }

		li{
			box-shadow: 0px 0px 5px #000000;
		}
    }
</style>