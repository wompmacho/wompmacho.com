<svelte:head>
	<title>Fractal Tree Java Applet</title>
</svelte:head>

<img class="shadow rounded" src="gif/FractalTree.gif" alt="Svelte Logo">

<hr>

<h1>Fractal Tree Java Applet</h1>

<p class="shadow rounded">
    This is a simple Java application that demonstrates recursion by visualizing a fractal tree. It takes in an input for length, angle and the number of child nodes and draws to a canvas. These inputs can then be manipulated by the sliders and text field. It utilizes Java, JavaFX, FXML and CSS.
</p>

<hr>

<a rel=prefetch href="https://github.com/wompmacho/fractal-tree-draw"><i class="fab fa-github fa-3x"></i></a>


<style>
    a{
        margin-top: 1em;
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    a:hover{
        background-color: #1e1e1e;
        color: red;
    }

    h1{
        font-size: x-large;
        text-align: center;
    }

    img{
        width: 100%;
        margin-bottom: 1em;
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
</style>