<script lang="ts">
	async function recordScreen() {
		return await navigator.mediaDevices.getDisplayMedia({
			audio: true,
			video: true
		});
	}

	function createRecorder(stream, mimeType) {
		let recordedChunks = [];
		const mediaRecorder = new MediaRecorder(stream);

		mediaRecorder.ondataavailable = function (e) {
			if (e.data.size > 0) {
				recordedChunks.push(e.data);
			}
		};

		mediaRecorder.onstop = function () {
			saveFile(recordedChunks);
			recordedChunks = [];
		};

		mediaRecorder.start(200);
		return mediaRecorder;
	}

	function saveFile(recordedChunks) {
		const blob = new Blob(recordedChunks, {
			type: 'video/webm'
		});
		let filename = window.prompt('Enter file name'),
			downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(blob);
		downloadLink.download = `${filename}.webm`;

		document.body.appendChild(downloadLink);
		downloadLink.click();
		URL.revokeObjectURL(blob);
		document.body.removeChild(downloadLink);
	}

	async function start() {
		let stream = await recordScreen();
		let mimeType = 'video/webm';
		let mediaRecorder = createRecorder(stream, mimeType);
	}
</script>

<div class="hero min-h-screen">
	<div class="h-50 hero-content flex flex-col">
		<h1 class="text-5xl font-bold">SCRN RCRDR</h1>
		<button class="btn btn-primary rounded-full" on:click={start}
			><svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
					d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
				/></svg
			>Start Recording</button
		>
	</div>
</div>
