<svelte:head>
	<title>Wompchat Chrome Extension</title>
</svelte:head>

<h1>WompChat</h1>

<img title="WompChat" class="gif" src="./img/womp-chat/full512.png" alt="WompChat Logo" />

<div class="spacer"></div>

<h2>Welcome To The Chat</h2>

<div class="spacer"></div>

<h4>
    We Are Changing Our Name!
</h4>

<h5>
    Aparently LIVE CHAT was a bad idea. Now We Are WompChat.
</h5>

<hr>

<div class="container">
    <a href="https://discord.gg/pVNnTDA">
      <img class="shield shadow rounded" src="https://img.shields.io/discord/238458588169895937?label=Discord&style=plastic" alt="discord shield.io" />
    </a>
    <a href="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/img/btc.JPG">
      <img class="shield shadow rounded" src="https://img.shields.io/static/v1?label=BTC&style=plastic&message=3QkKHVyT1nZLEeH8f77bUhXorXKPQs5gzN&color=red" alt="BTC shield.io" />
    </a>
    <a href="https://github.com/wompmacho/womp">
      <img class="shield shadow rounded" alt="GitHub Release Date" src="https://img.shields.io/github/release-date/wompmacho/womp?label=Latest-Release&style=plastic" />
    </a>
</div>

<div class="container">
    <a class="" href="https://discord.gg/pVNnTDA" title="Join our Discord Community"><button type="button" class="btn btn-dark shadow rounded">Join our Discord Community</button></a>
    <a class="" href="https://streamelements.com/wompmacho-5882/tip" title="Donations"><button type="button" class="btn btn-dark shadow rounded">Donations</button></a>
    <a class="" href="https://www.youtube.com/wompmacho" title="Youtube"><button type="button" class="btn btn-dark shadow rounded">Youtube</button></a>
    <a class="" href="mailto:wompmacho@gmail.com" title="Contact"><button type="button" class="btn btn-dark shadow rounded">Contact Me</button></a>
    <a class="" href="https://chrome.google.com/webstore/search/wompchat" title="WompChat Extension Page"><button type="button" class="btn btn-dark shadow rounded">Web Store</button></a>
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

<div class="spacer"></div>

<h3>How To:</h3>

<p>
  There is still a lot of stuff I am working on. This is very Beta at the moment... <strong>Use At Your Own Risk</strong>
</p>

<div class="spacer"></div>

<p>
  This is a Chrome Extension for Youtube Live Streams, adding some Quality of Life improvements for the Chat. 
  Adds Top, Trending and Global (500ish) Emotes from popular sites. These Update with what is Trending. 
</p>

<div class="spacer"></div>

<p class="highlight rounded">
  Don't forget to pin this extension for easy access. 
</p>

<div class="spacer"></div>

<img class="gif shadow rounded" src="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/gif/pinYourExtension.gif" alt="pinYourExtension.gif" />

<div class="spacer"></div>

<p>
  Youtube Live is slow to load its pages currently. 
  Give the extension a moment while the page's iframes are loading. 
  Once you see the Emote Panel Icon you can open the Emote Selection Panel.
</p>

<div class="spacer"></div>

<img class="gif shadow rounded" src="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/gif/emotesMenu.gif" alt="emotesMenu.gif" />

<div class="spacer"></div>

<p class="highlight">
  Enhanced Theater Mode Is Now Available. 
  <br>
  Just click the check in the option panel and refresh your page.
</p>

<div class="spacer"></div>

<img class="gif shadow rounded" style="height: 540px; width: 100%;" src="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/gif/theaterMode.gif" alt="theaterMode.gif" />

<div class="spacer"></div>

<p>        
  Over around 500 Top and Trending Emotes are loaded from popular sites. 
  You can Enable/Disable them in the Options Menu.
</p>

<div class="spacer"></div>

<img class="gif shadow rounded" src="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/gif/optionsMenu.gif" alt="optionsMenu.gif" />

<div class="spacer"></div>

<p>
  Can Also Click on UserNames To Autofill an @ Notification
</p>

<div class="spacer"></div>

<img class="gif shadow rounded" src="https://storage.googleapis.com/womp-website_cloudbuild/cdn/wompchat/gif/clickUserNamesToAtThem.gif" alt="clickUserNamesToAtThem.gif" />
 
<div class="spacer"></div>

<h3>more on the way, but for now...</h3>

<h2>Enjoy!</h2>

<style>
    .spacer{
        padding: 2em;
    }

    .btn-dark{
        background-color: #474748 !important;
    }
    .btn-dark:hover{
        background-color: #323233 !important;
    }

    .highlight{
        font-weight:700;
        color: #ffffff;
        text-align: center;
        box-shadow: 0px 0px 15px #ff0000;
        border-radius: 5px;
    }

    .container{
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
    }
    
    h1{
        display: none;
    }

    h2{
        font-size: xx-large;
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
        box-shadow: 0px 0px 15px #000000;
    }

    a {
		color: #cccccc;
		text-decoration: none;
        padding: .5em;
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
        max-height: 50vh;
        margin: auto;
    }

    @media only screen and (max-width: 769px) {
        .container{
            flex-direction: column;
        }

        a{
            margin: 1em auto auto auto;
        }

        p{
            margin: auto;
            max-width: 90vw;
        } 
    }
</style>