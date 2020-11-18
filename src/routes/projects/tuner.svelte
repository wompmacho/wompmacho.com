<svelte:head>
	<title>JavaScript Guitar Tuner</title>
</svelte:head>

<div id="tuner_sketch" class="content"></div>

<hr>

<h1>JavaScript Guitar Tuner</h1>

<div class="container shadow rounded">
    <p>
        JavaScript web app that uses a microphone as input and
        displays frequency, note and a helper line to assist in
        tuning accuracy. Everything is drawn on a canvas including
        the background guitar image.
    </p>
    
    <p>
        Application utilizes P5.js library as
        well as ML5.js for a pitch detection assistance.
        Additionally notes and frequencies are fetched via a JSON
        library hosted on Github.
    </p>
</div>

<hr>

<h5>Click on page to enable permissions and start the tuner</h5>

<a rel=prefetch href="https://github.com/wompmacho/fractal-tree-draw"><i class="fab fa-github fa-3x"></i></a>


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

    #tuner_sketch{
        height: 50vh;
        width: calc(50vh / 1.5);
        margin: auto;
    }

    hr{
		background-color: red;
		max-width: 20vw;
	}

    h1{
        font-size: x-large;
        margin: 1em;
        text-align: center;
    }

    h5{
        font-size: smaller;
        max-width: 40vw;
        margin: auto;
        text-align: center;
    }
</style>

<script>
    import { onMount } from "svelte";
    import { onDestroy } from 'svelte'

    let mic, myp5;

    onMount(async () => {
        const container = document.getElementById('tuner_sketch');
        const p5Module = await import("p5");
        window.p5 = p5Module.default;
        await import("p5/lib/addons/p5.sound");
        const ml5 = await import("ml5");
        window.ml5 = ml5.default;

        let pitch;
        let freq = 0;
        let threshold = 1;
        let canvas;
        let audioContext;
        let WIDTH = container.clientWidth;
        let HEIGHT = container.clientHeight;
        let baseFreq = 440;
        let test = 0;
        let notes = [];
        let img;

        //	ml5 pitchdetection-crepe modle can only handle from C#1 - D6 Reliably
        const model_url = "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
        const note_frequencies = "https://gist.githubusercontent.com/quimbs/fe52bc25dca44cd3fcb8/raw/f9fe9c6bb68f343a4b81a17445efc200702d45dd/notes.json";

        const sketch = (sketch) => {

            sketch.preload = () => {
                // load image
                img = sketch.loadImage("img/notMyguitar.png");
            }

            sketch.setup = () => {
                // Resize for init
                WIDTH = document.getElementById("tuner_sketch").clientWidth;
                HEIGHT = document.getElementById("tuner_sketch").clientHeight;

                // Create Canvas
                sketch.createCanvas(WIDTH, HEIGHT);

                // request access to mic and starting mic
                audioContext = sketch.getAudioContext();
                mic = new p5.AudioIn();
                mic.start(startPitch);
                console.log('Mic Started');

                //	Get notes/freq json
                getNotes();
            };

            //	fetches notes/freq JSON and overwrites empty note array
            async function getNotes() {
                const response = await fetch(note_frequencies);
                const data = await response.json();
                notes = data[baseFreq];
            }

            sketch.draw = () => {
                WIDTH = container.clientWidth;
                HEIGHT = container.clientHeight;
                sketch.clear();
                resetSketch();
            }

            function resetSketch(){
                sketch.image(img, WIDTH / 2 / 2, 0, WIDTH / 2, HEIGHT);
                sketch.textAlign(sketch.CENTER, sketch.CENTER);
                sketch.fill(105, 105, 105);
                sketch.strokeWeight(3);

                let closestNote = 0;
                let difference = Infinity;
                for (let i = 0; i < notes.length; i++) {
                    let diff = freq - notes[i].frequency;
                    if (Math.abs(diff) < Math.abs(difference)) {
                        closestNote = notes[i];
                        difference = diff;
                    }
                }

                //	change color based on prox to threshold
                if (Math.abs(difference) < threshold) {
                    sketch.strokeWeight(6);
                    sketch.stroke(0, 255, 0);
                    sketch.fill(0, 0, 0);
                } else if (Math.abs(difference) < threshold + 4) {
                    sketch.strokeWeight(4);
                    sketch.stroke(255, 165, 0);
                } else if (Math.abs(difference) < threshold + 13) {
                    sketch.strokeWeight(3);
                    sketch.stroke(255, 165, 0);
                }

                //	freq text
                let freq_message = freq.toFixed(2) + " hz";
                let note_message = closestNote.note;

                //	test if pitch detected
                if ((sketch.i = parseInt(freq_message) < 1)) {
                    freq_message = "no audio detected";
                    sketch.stroke(27, 51, 71);
                    sketch.strokeWeight(3);
                    note_message = "🔇";
                }

                //	draw text
                function drawText(freq_message, note_message) {
                    sketch.textSize(WIDTH / 16);
                    sketch.text(freq_message, WIDTH / 2, (HEIGHT / 2) * 1.8);
                    sketch.textSize(WIDTH / 6);
                    sketch.text(note_message, WIDTH / 2, (HEIGHT / 2) * 1.5);
                }

                drawText(freq_message, note_message);

                //	Canvas radius
                let radius = WIDTH / 2;
                // Default for p5 is RADIANS
                sketch.angleMode(sketch.DEGREES);
                //	set angle to 90 relative to origin
                let angle = -90 + difference;
                //	set origin to center
                let x1 = WIDTH / 2;
                let y1 = HEIGHT / 2;

                //	create circles
                let x2 = Math.cos(angle) * radius;
                let y2 = Math.sin(angle) * radius;

                //	Draw line
                sketch.line(x1, y1, x2 + radius, y2 + radius);
                console.log(
                    "x1=" +
                    x1 +
                    "|" +
                    "y1=" +
                    y1 +
                    "|" +
                    "x2=" +
                    x2 +
                    "|" +
                    "y2=" +
                    y2 +
                    "|" +
                    "radius=" +
                    radius +
                    "|" +
                    "angle=" +
                    angle +
                    "|"
                );
                sketch.stroke(0);
            }

            sketch.windowResized = () => {
                sketch.resizeCanvas(width, height);
                resetSketch();
            }

            //  Create pitch from ml5 lib
            function startPitch() {
                pitch = ml5.pitchDetection(
                    model_url,
                    audioContext,
                    mic.stream,
                    modelLoaded
                );
            }

            // 	Loads pitch model
            function modelLoaded() {
                console.log("Model Loaded");
                getPitch();
            }

            //	recursively keeps getting pitch
            function getPitch() {
                pitch.getPitch(function (err, frequency) {
                    if (frequency) {
                        freq = frequency;
                    } else {
                        freq = -100;
                    }
                    getPitch();
                });
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