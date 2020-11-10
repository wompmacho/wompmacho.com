<svelte:head>
	<title>Videography</title>
</svelte:head>

<div class="container">
	<iframe rel="prefetch" title="Real Estate Video" alt="Real Estate Video" src="https://www.youtube.com/embed/-DN8mhOxeKQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<hr>

<h1>Videography</h1>

<p>
	I do Real Estate Videography. 
	You can find some of my clients videos on YouTube
</p>

<h3>
	For Bussiness Enquiries: <a href="mailto:wompmacho@gmail.com">wompmacho@gmail.com</a>
</h3>

<hr>

<a class="rounded bottom_link" rel=prefetch href="media.wompmacho.com"><i class="fab fa-youtube fa-3x"></i></a>

<style>
	.container{
		position: relative;
  		overflow: hidden;
  		width: 100%;
  		padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
	}

	iframe{
		position: absolute;
  		top: 0;
  		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

	p{
		margin: 1em;
		border-radius: 5px;
		padding: 1em;
		background-color: #333333;
	}
	
    hr{
		background-color: red;
		max-width: 20vw;
	}

    h1{
        font-size: x-large;
        margin: 1em;
    }

	h3{
		font-size: small;
		text-align: center;
		margin: 1em;
	}

    .bottom_link{
        margin-top: 1em;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
		color: rgb(0, 255, 0);
    }

    .bottom_link:hover{
        background-color: #1e1e1e;
        color: red;
    }
</style>