// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/projects/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [


	{
		title: 'Audio Visualizer',
		slug: 'audio-visualizer',
		html: `
		<!-- Sound Visualizer Animation -->
		<div class="animation_container">
			<div class="animation_inner">
				<div class="" id="sound_visualizer_canvas"></div>
				<div class="branding overlay">WompMacho</div>
				<div class="logo overlay"
					style="background: url('img/WompLogo.png'); height: 100%; width: 100%; background-size: 30%; background-repeat: no-repeat; background-position: center;">
				</div>
			</div>
		</div>

		<p>
			Javascript web application utilizing the P5.js libraries to
			create a visual interpretation of audio. This takes input
			via microphone or audio being played locally and uses the
			amplitude of the frequencies to animate lines thats
			translate into little circles. These circles change color
			based on the amplitude and fade to alpha when levels are
			lowered. There is additional CSS animations assisting in the
			coloring/opacity of the brand name and size manipulation to
			give the “pulse effect”.
		</p>
		<h5>
			Click on page to enable permissions and allow for audio
			input. Audio player is available in the bottom left corner.
		</h5>

		<style>
			.overlay {
				position: absolute;
			}

			/* -- wrapper -- */
			.animation_inner {
				height: 100%;
				width: 100%;
				object-fit: cover;
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 1;
				font-size: 3.5vw;
				animation: brand_name 10s ease infinite alternate;
			}

			#sound_visualizer_canvas{
				height: 100% !important;
				width: 100% !important;
			}

			/* --branding -- */
			.branding {
				font-family: "Viner Hand ITC";
				color: white;
				width: 100%;
				display: inline-block;
				text-align: center;
				z-index: 5;
			}

			/* -- logo -- */
			.logo {
				position: absolute;
				z-index: 4;
				animation: size-pulse 15s infinite;
			}

			.animation_container {
				height: 40vh;
				width: 40vw;
				display: flex;
				position: relative;
				margin: 0 auto;
				justify-content: center;
				align-items: center;
			}

			@keyframes brand_name {
				0% {
					color: #000;
					text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #228DFF;
				}
			
				50% {
					color: white;
					text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF;
				}
			
				100% {
					color: white;
					text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000, 0 0 20px #228DFF;
				}
			}

			@keyframes size-pulse {
				0% {
					transform: scale(0.9);
				}
			
				50% {
					transform: scale(1);
				}
			
				100% {
					transform: scale(0.9);
				}
			}
		</style>

		<!-- P5 Lib -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.sound.min.js"></script>

		<!-- ML5 Lib -->
		<script src="https://unpkg.com/ml5@0.3.1/dist/ml5.min.js"></script>

		<script src="/static/js/sound_visualizer.js"></script>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
