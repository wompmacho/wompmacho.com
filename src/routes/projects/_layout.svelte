<script>
    import ProjNav from '../../components/ProjNav.svelte';
	export let segment;
</script>

<div class="innerMain">
	<ProjNav {segment}></ProjNav>
	<br><br>
	<main class="shadow p-3 mb-5 bg-white rounded">
		<slot></slot>
	</main>
</div>

<div class="spacer"></div>

<style>
	.innerMain{
		width: 100%;
	}

	main {
		position: relative;
		max-width: 60em;
		background-color: #252526 !important;
		padding: 2em;
		box-sizing: border-box;
		width: 100%;
		overflow: hidden;
	}

	.spacer{
		height: 5vh;
	}
</style>