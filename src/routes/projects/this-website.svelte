<svelte:head>
	<title>About this website</title>
</svelte:head>

<hr>

<h1>About this website</h1>

<p class="shadow rounded">
    This website was built using the Svelte/Sapper Web Framework. 
    It is deployed using Node in a GCloud hosted Docker Container. ♥
</p>

<hr>

<div class="container">
    <img src="img/logo-512.png" alt="Svelte Logo">
    <img src="img/node.png" alt="Node Logo">
    <img src="img/gcloud.png" alt="GCloud Logo">
    <img src="img/docker_logo.png" alt="Docker Logo">
    <img src="img/bootstrap_logo.png" alt="Bootstrap Logo">
    <img src="img/html_logo.png" alt="HTML Logo">
    <img src="img/css_logo.png" alt="CSS Logo">
</div>

<style>
	p{
		margin: 1em;
		border-radius: 5px;
		padding: 1em;
		background-color: #333333;
	}
    
    .container{
        padding: 1em;
        display: block;
    }

    img{
        max-height: 6em;
        margin: auto 1em;
    }

    h1{
        font-size: x-large;
        margin: 1em;
        text-align: center;
    }

    hr{
		background-color: red;
		max-width: 20vw;
	}
</style>