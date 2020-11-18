<svelte:head>
	<title>Javascript Audio Visualizer</title>
</svelte:head>

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

<hr>

<h1>Audio Visualizer</h1>

<div class="container shadow rounded">
    <p>
        A Javascript web application utilizing the P5.js library to
        create a visual interpretation of audio. This takes input
        via microphone or audio being played on client webpage and uses the
        amplitude of the frequencies to animate lines that is
        translated into little circles. 
    </p>
    <p>
        These circles change color
        based on the amplitude and fade to alpha when levels are
        lowered. There is additional CSS animations assisting in the
        coloring/opacity of the brand name and size manipulation to
        give the “pulse effect”.
    </p>
</div>

<hr>

<h5>
    Click on page to enable permissions and allow for audio
    input.
</h5>

<a rel=prefetch href="https://github.com/wompmacho/audio-visualizer"><i class="fab fa-github fa-3x"></i></a>


<style>
    a{
        margin-top: 1em;
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

    .container{
        padding: 1em;
		background-color: #333333;
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

    h5{
        font-size: smaller;
        max-width: 40vw;
        margin: auto;
        text-align: center;
    }

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

    #sound_visualizer_canvas{
        height: 100% !important;
        width: 100% !important;
    }

</style>

<script>
    import { onDestroy } from 'svelte'
    import { onMount } from "svelte";

    let mic, fft, myp5;

    onMount(async () => {
        const container = document.getElementById('sound_visualizer_canvas');
        const p5Module = await import("p5");
        window.p5 = p5Module.default;
        await import("p5/lib/addons/p5.sound");

        let width, height;
        width = container.offsetWidth;
        height = container.offsetHeight;

        const sketch = (sketch) => {
            sketch.setup = () => {

                //  Set Color Mode
                sketch.colorMode(sketch.HSB);
                // Make work in degrees for circle
                sketch.angleMode(sketch.DEGREES);

                // Set Smoothing, bar count, dimmensions
                var smoothing = 0.8;
                var bands = 256;

                sketch.createCanvas(width, height);

                // Create an Audio input
                mic = new p5.AudioIn();
                console.log('Mic Started');

                // Fast Fourier Transform (apmlitude at various frequencies)
                fft = new p5.FFT(smoothing, bands);
                fft.setInput(mic);

                // start the Audio Input.
                // By default, it does not .connect() (to the computer speakers)
                mic.start();
            };

            sketch.draw = () => {
                sketch.clear();
                resetSketch();
            }

            function resetSketch(){
                width = container.offsetWidth;
                height = container.offsetHeight;
                // Analyze the spectrum and gives array
                var spectrum = fft.analyze();

                // Move to Center
                sketch.translate(width / 2, height / 2);

                for (var i = 0; i < spectrum.length; i++) {
                    var angle = sketch.map(i, 180, spectrum.length, 0, 250);
                    var amplitude = spectrum[i];

                    var radius = sketch.map(amplitude, 0, 360, Math.sqrt(width * height) / 4, Math.sqrt(width * height) / 2, true);
                    var x = radius * sketch.cos(angle);
                    var y = radius * sketch.sin(angle);
                    //noStroke();

                    // draw bars
                    var e1 = sketch.line(x, y, x, y);
                    var e2 = sketch.line(y, x, y, x);

                    // Rotate
                    e1.rotate(16);
                    e2.rotate(16);
                    //rotate(radius/PI);
                    sketch.strokeWeight(13);
                    sketch.stroke(sketch.color(sketch.map(amplitude, 0, 255, 0, 255, true), sketch.map(amplitude, 0, 255, 200, 255, true), sketch.map(amplitude, 0, 255, Math.random(), 255, true), amplitude));
                }
            }

            sketch.windowResized = () => {
                sketch.resizeCanvas(width, height);
                resetSketch();
            }
        };

        myp5 = new p5(sketch, container);
    });

    onDestroy(() => {
        mic.stop();
        myp5.remove();
        console.log('Mic Stopped');
    });

</script>