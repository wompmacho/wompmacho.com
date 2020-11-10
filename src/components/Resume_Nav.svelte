<script>
	export let segment;
</script>

<ul class="navbar-nav shadow rounded">
	<li class=""><a rel=prefetch class="" aria-current="{segment === undefined ? 'page' : undefined}" href="/resume">Michael</a></li>
	<li class=""><a rel=prefetch aria-current="{segment === 'experiance' ? 'page' : undefined}" href="/resume/experiance">Experiance</a></li>
    <li class=""><a rel=prefetch aria-current="{segment === 'education' ? 'page' : undefined}" href="/resume/education">Education</a></li>
	<li class=""><a rel=prefetch aria-current="{segment === 'esports' ? 'page' : undefined}" href="/resume/esports">Esports</a></li>
	<li class=""><a rel=prefetch aria-current="{segment === 'consulting' ? 'page' : undefined}" href="/resume/consulting">Consulting</a></li>
    <li class=""><a rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="/projects" data-toggle="tooltip" title="This will take you away from this page.">Projects</a></li>
</ul>

<style>
    a {
		color: #cccccc;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	ul {
		margin: 0;
		padding: 0;
        flex-direction: row;
        background-color: #323233;
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
	}
</style>