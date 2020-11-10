<svelte:head>
	<title>About this website</title>
</svelte:head>

<hr>

<h1>About this website</h1>

<p>
    This website uses the Svelte/Sapper Web Framework. It is deployed using node and nginx on ubuntu in a gcloud virtual instance. It also utilizes certbot for https. ♥
</p>

<hr>

<div class="container">
    <img src="img/logo-512.png" alt="Svelte Logo">
    <img src="img/node.png" alt="Svelte Logo">
    <img src="img/nginx.png" alt="Svelte Logo">
    <img src="img/gcloud.png" alt="Svelte Logo">
    <img src="img/ubuntu.png" alt="Svelte Logo">
    <img src="img/certbot.png" alt="Svelte Logo">
</div>

<style>
    p{
        margin: auto;
    }
    
    .container{
        padding: 5em;
    }

    img{
        max-height: 6em;
        display: inline-block;
        margin: auto 1em;
    }

    h1{
        font-size: x-large;
        margin: 1em;
    }

    hr{
		background-color: red;
		max-width: 20vw;
	}
</style>