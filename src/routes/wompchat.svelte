<svelte:head>
	<title>Wompchat Chrome Extension About</title>
</svelte:head>

<h1>WompChat</h1>

<img title="WompChat" class="gif rounded" src="/img/womp-chat/full512.png" alt="WompChat Logo" />

<h2>Welcome To The Chat</h2>

<h4>
    We Are Changing Our Name!
</h4>

<h5>
    Aparently LIVE CHAT was a bad idea. Now We Are WompChat.
</h5>

<hr>

<div class="container">
    <a href="https://discord.gg/pVNnTDA">
      <img class="shield" src="https://img.shields.io/discord/238458588169895937?label=Discord&style=plastic" alt="discord shield.io" />
    </a>
    <a href="https://cdn.jsdelivr.net/gh/wompmacho/womp/src/assets/img/btc.JPG">
      <img class="shield" src="https://img.shields.io/static/v1?label=BTC&style=plastic&message=3QkKHVyT1nZLEeH8f77bUhXorXKPQs5gzN&color=red" alt="BTC shield.io" />
    </a>
    <a href="https://github.com/wompmacho/womp">
      <img class="shield" alt="GitHub Release Date" src="https://img.shields.io/github/release-date/wompmacho/womp?label=Latest-Release&style=plastic" />
    </a>
</div>

<div class="container">
    <a class="rounded" href="https://discord.gg/pVNnTDA" title="Join our Discord Community"><button type="button" class="btn btn-dark">Join our Discord Community</button></a>
    <a class="rounded" href="https://streamelements.com/wompmacho-5882/tip" title="Donations"><button type="button" class="btn btn-dark">Donations</button></a>
    <a class="rounded" href="https://www.youtube.com/wompmacho" title="Youtube"><button type="button" class="btn btn-dark">Youtube</button></a>
    <a class="rounded" href="mailto:wompmacho@gmail.com" title="Contact"><button type="button" class="btn btn-dark">Contact Me</button></a>
</div>

<hr>

<h3>
    Things I am Working on:
</h3>

<div class="container">
    <ul>
        <li><s>Theater Mode Fix for that quality Stream and Chat time</s></li>
        <li>Autocomplete for emote Selection</li>
        <li>Unicode Font Converter</li>
        <li>Theater Mode for regular youtube</li>
        <li>Better Moderation Option</li>
        <li>User Profile Info Popup</li>
        <li>Other Styling Options</li>
        <li>Youtube Chatbot
            <ul>
                <li>Stream Overlay For Chat That Shows Emotes</li>
                <li>IRC Client for Youtube</li>
            </ul>
        </li>
        <li>Emote Library
            <ul>
                <li>Upload Your Own Emotes</li>
                <li>Specific channel Emotes for WompChat</li>
            </ul>
        </li>
    </ul>
</div>

<hr>

<h3>How To:</h3>

<p>
  There is still a lot of stuff I am working on. This is very Beta at the moment so 
</p>

<h4>Use At Your Own Risk</h4>

<p>
  This is a Chrome Extension for Youtube Live Streams, adding some Quality of Life improvements for the Chat. 
  Adds Top, Trending and Global (500ish) Emotes from popular sites. These Update with what is Trending. 
</p>

<hr>

<p class="highlight">
  Don't forget to pin this extension for easy access. 
</p>

<img class="gif rounded" src="https://cdn.jsdelivr.net/gh/wompmacho/wompchat/assets/gif/pinYourExtension.gif" alt="pinYourExtension.gif" />

<p>
  Youtube Live is slow to load its pages currently. 
  Give the extension a moment while the page's iframes are loading. 
  Once you see the Emote Panel Icon you can open the Emote Selection Panel.
</p>

<img class="gif rounded" src="https://cdn.jsdelivr.net/gh/wompmacho/wompchat/assets/gif/emotesMenu.gif" alt="emotesMenu.gif" />

<p class="highlight">
  Enhanced Theater Mode Is Now Available. Just click the check in the option panel and refresh your page.
</p>

<img class="gif rounded" style="height: 540px; width: 960px;" src="https://github.com/wompmacho/wompchat/blob/main/cdn/assets/gif/theaterMode.gif?raw=true" alt="theaterMode.gif" />

<p>        
  Over around 500 Top and Trending Emotes are loaded from popular sites. 
  You can Enable/Disable them in the Options Menu.
</p>

<img class="gif rounded" src="https://cdn.jsdelivr.net/gh/wompmacho/wompchat/assets/gif/optionsMenu.gif" alt="optionsMenu.gif" />

<p>
  Can Also Click on UserNames To Autofill an @ Notification
</p>

<img class="gif rounded" src="https://cdn.jsdelivr.net/gh/wompmacho/wompchat/assets/gif/clickUserNamesToAtThem.gif" alt="clickUserNamesToAtThem.gif" />
 
<h3>more on the way, but for now...</h3>

<h2>Enjoy!</h2>


<style>
    .btn-dark{
        background-color: #474748 !important;
    }
    .btn-dark:hover{
        background-color: #323233 !important;
    }

    .highlight{
        font-weight:700;
        color: #00ff00;
        text-align: center;
    }

    .container{
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
    }
    
    h1{
        display: none;
        font-size: xx-large;
        text-align: center;
    }

    h2{
        font-size: x-large;
        text-align: center;
    }

    h3{
        text-align: center;
        font-size: larger;
        margin-bottom: 1em;
        margin-top: 1em;
    }

    h4{
        margin: 1em;
        text-align: center;
        font-size: medium;
    }

    h5{
        text-align: center;
        font-size: small;
    }

    p{
        margin: auto;
        max-width: 40vw;
        padding: 1em;
        background-color: #333333;
        border-radius: 5px;
    }

    a {
		color: #cccccc;
		text-decoration: none;
        margin: .5em;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

    hr{
		background-color: red;
		max-width: 20vw;
	}

    .gif{
        display: block;
        height: 50vh;
        margin: auto;
        padding: 2em;
    }
</style>