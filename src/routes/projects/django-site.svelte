<svelte:head>
	<title>Django Site</title>
</svelte:head>

<img class="rounded" src="gif/django.gif" alt="django gif">

<hr>

<h1>Django Site</h1>

<p>
I have had many iterations of my personal websites. I mostly use it to collect my projects and as an opportunity to learn new technologies. I started out way back with a simple WAMP stack using my windows machine to host simple static page resumes. Things have changed a lot since then and I have touched on many frameworks, operating systems and different types of virtualization to host machines. My django site was a notable iteration. It was a website that I fully deployed at home on my own super micro server. It used Django / python / nginx on a hyper-V / ubuntu virtual machine. I wanted to deploy a full LAMP stack from top to bottom and show it in practice while also touching up on my front-end skills and making a fully responsive and mobile friendly website. 
</p>

<hr>

<p>
    Though it was originally hosted at home on my server. I have since migrated the site to a gcloud instance. You can find it below still kicking with a run down of the technologies in practice. Also includes a nice little diagram of the original network.
</p>

<a rel=prefetch href="https://django.wompmacho.com/super_micro/"><i class="rounded fab fa-python fa-3x"></i></a>

<style>
    p{
        margin: auto;
    }

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
        margin: 1em;
    }

    img{
        width: 100%;
        padding: 1em;
    }

    hr{
		background-color: red;
		max-width: 20vw;
	}
</style>