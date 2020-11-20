<script>
	export let segment;
</script>

<ul class="navbar-nav shadow rounded">
	<li class="rounded"><a rel=prefetch class="" aria-current="{segment === undefined ? 'page' : undefined}" href="/resume">Michael</a></li>
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'experience' ? 'page' : undefined}" href="/resume/experience">Experience</a></li>
    <li class="rounded"><a rel=prefetch aria-current="{segment === 'education' ? 'page' : undefined}" href="/resume/education">Education</a></li>
	<li class="rounded"><a rel=prefetch aria-current="{segment === 'esports' ? 'page' : undefined}" href="/resume/esports">Esports</a></li>
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