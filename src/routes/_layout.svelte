<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 60em;
		background-color: #252526 !important;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: 1em;
	}
	.spacer{
		height: 5vh;
	}

	hr{
		background-color: red;
		max-width: 20vw;
		margin-top: 2em;
		margin-bottom: 2em;
	}
</style>

<Nav {segment}></Nav>

<main class="shadow rounded p-3 ">
	<slot></slot>
</main>

<div class="spacer"></div>


<Footer></Footer>