/* eslint-disable react/style-prop-object */
import React from 'react'

function player() {
  return (

    <div class="player">
	<div class="player__bar">
		<div class="player__album">
			<div class="player__albumImg active-song" data-author="Khalid" data-song="Location" data data-src="http://ol5.mp3party.net/online/8418/8418598.mp3" style="background-image: url(https://alikinvv.github.io/minimal-player/build/img/album.jpg">
			</div>
			<div class="player__albumImg" data-author="Khalid" data-song="Angels" data data-src="http://music.dawnfoxes.com/_fxs_/_upls_/_sngs_/USA/khalid-angels.mp3" style="background-image: url(https://alikinvv.github.io/minimal-player/build/img/album.jpg">
			</div>
		</div>
		<div class="player__controls">

			<div class="player__prev">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<path d="M26.695 34.434v31.132L54.5 49.998z" />
					<path d="M24.07 34.434v31.132c0 2.018 2.222 3.234 3.95 2.267l27.804-15.568c1.706-.955 1.707-3.578 0-4.533L28.02 32.168c-2.957-1.655-5.604 2.88-2.649 4.533l27.805 15.564v-4.533L25.371 63.3l3.95 2.267V34.435c-.001-3.387-5.251-3.387-5.251-.001z" />
					<g>
						<path d="M55.5 34.434v31.132l27.805-15.568z" />
						<path d="M52.875 34.434v31.132c0 2.018 2.222 3.234 3.949 2.267 9.27-5.189 18.537-10.379 27.805-15.568 1.705-.955 1.705-3.578 0-4.533L56.824 32.168c-2.957-1.655-5.604 2.88-2.648 4.533l27.803 15.564v-4.533L54.176 63.3l3.949 2.267V34.435c0-3.387-5.25-3.387-5.25-.001z" />
					</g>
				</svg>
			</div>

			<div class="player__play">
				<svg class="icon play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
					<path d="M51.109 30.335l-36-24A2 2 0 0 0 12 8v48a2.003 2.003 0 0 0 2 2c.388 0 .775-.113 1.109-.336l36-24a2 2 0 0 0 0-3.329z" />
				</svg>
				<svg class="icon pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<path d="M22.537 8.046h17.791c1.104 0 2.003.898 2.003 1.993v79.912a2.005 2.005 0 0 1-2.003 2.003h-17.79a2.005 2.005 0 0 1-2.003-2.003V10.04c0-1.095.898-1.993 2.002-1.993zM59.672 8.046h17.8c1.095 0 1.993.898 1.993 1.993v79.912a2.003 2.003 0 0 1-1.993 2.003h-17.8a1.997 1.997 0 0 1-1.993-2.003V10.04c0-1.095.889-1.993 1.993-1.993z" />
				</svg>
			</div>

			<div class="player__next">
				<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
					<path d="M26.695 34.434v31.132L54.5 49.998z" />
					<path d="M24.07 34.434v31.132c0 2.018 2.222 3.234 3.95 2.267l27.804-15.568c1.706-.955 1.707-3.578 0-4.533L28.02 32.168c-2.957-1.655-5.604 2.88-2.649 4.533l27.805 15.564v-4.533L25.371 63.3l3.95 2.267V34.435c-.001-3.387-5.251-3.387-5.251-.001z" />
					<g>
						<path d="M55.5 34.434v31.132l27.805-15.568z" />
						<path d="M52.875 34.434v31.132c0 2.018 2.222 3.234 3.949 2.267 9.27-5.189 18.537-10.379 27.805-15.568 1.705-.955 1.705-3.578 0-4.533L56.824 32.168c-2.957-1.655-5.604 2.88-2.648 4.533l27.803 15.564v-4.533L54.176 63.3l3.949 2.267V34.435c0-3.387-5.25-3.387-5.25-.001z" />
					</g>
				</svg>
			</div>
		</div>
	</div>
	<div class="player__timeline">
		<p class="player__author"></p>
		<p class="player__song"></p>
		<div class="player__timelineBar">
			<div id="playhead"></div>
		</div>
	</div>
</div>


  )
}

export default player