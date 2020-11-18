<svelte:head>
	<title>Wompchat Chrome Extension</title>
</svelte:head>


<img class="gif shadow rounded" src="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/gif/emotesMenu.gif" alt="WompChat Emote Menu Gif">

<div class="spacer"></div>

<hr>

<h1>WompChat Chrome Extension</h1>

<div class="container shadow rounded">

    <p>
        This is a little venture I went on for my chat ♥    
        <br><br>
        After playing around with live streaming on other popular platforms such as YouTube. I found the lack of features frustrating. Twitch got one thing right: it built a quality live-chat and created opportunities for community building.
        To build on this; other great devs built out browser extensions to further add to the quality of life features, bringing with it Emoticons and even more community building. 
        <br><br>
        Though I do love these apps, none of them have yet built out features for youtube.
    </p>
</div>

<h3>
    I decided I didn't want to wait and built out something of my own. 
</h3>

<hr>

<h3>Chrome Web Store</h3>
<a rel=prefetch href="https://chrome.google.com/webstore/search/wompchat"><i class="rounded fab fa-chrome fa-3x"></i></a>
<h3>Extension Page</h3>
<a class="rounded" rel=prefetch href="/wompchat"><img class="logo_icon" src="img/womp-chat/icon512.png" alt="WompChat Icon"></a>


<style>
    .spacer{
        padding: 1em;
    }
    
    .container{
		padding: 1em;
		background-color: #333333;
    }

    .logo_icon{
        height: 3.5em;
    }

    a{
        padding: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #00ff00;
    }
    
    a:hover{
        background-color: #1e1e1e;
        color: red;
    }

    h1{
        font-size: x-large;
        margin: 1em;
        text-align: center;
    }

    h3{
        padding: 1em;
        text-align: center;
        max-width: 30vw;
        margin: auto;
        font-weight: 700;
        font-size: medium;
    }

    .gif{
        width: 50%;
        display: block;
        margin: auto;
    }
</style>