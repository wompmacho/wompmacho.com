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
</style>

<Nav {segment}></Nav>

<main class="shadow p-3 mb-5 bg-white rounded">
	<slot></slot>
</main>

<Footer></Footer>