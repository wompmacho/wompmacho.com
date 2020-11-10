<script>
    import ProjNav from '../../components/ProjNav.svelte';
	export let segment;
</script>

<div class="innerMain">
	<ProjNav {segment}></ProjNav>
	<main class="shadow p-3 mb-5 bg-white rounded">
		<slot></slot>
	</main>
</div>

<div class="spacer"></div>

<style>
	.innerMain{
		display: inline-flex;
		width: 100%;
	}

	main {
		position: relative;
		max-width: 60em;
		background-color: #252526 !important;
		padding: 2em;
		box-sizing: border-box;
		margin-top: 1em;
		margin-left: 1em;
		width: 100%;
		overflow: hidden;
	}

	.spacer{
		height: 5vh;
	}
</style>