<script>
    import ResumeNav from '../../components/Resume_Nav.svelte';
	export let segment;
</script>


<ResumeNav {segment}></ResumeNav>
<br><br>
<main class="shadow p-3 mb-5 bg-white rounded">
	<slot></slot>
</main>

<div class="added_space"></div>

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

	.added_space{
		height: 5vh;
	}
</style>