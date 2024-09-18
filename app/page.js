"use client"
// import Image from "next/image";
import React, { useState, useEffect, useRef } from 'react';


export default function Home() {
  const faststartUrl1 =
	'https://test-wa.s3.us-east-1.amazonaws.com/improved_highNewSettingsA.webm?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLWVhc3QtMSJHMEUCIBetTIXdX6RULKsRqS6c5jDCnobB52UE7jyKdYKeIhkdAiEA4mJRKItUIHrhWQ5cuLCQ4Kt5UG%2B0NmoqbBRWW4hXtu0q5AIIRhAAGgw3NjczOTc4MzU3MzEiDCiNfEIUqqrJs3DQDSrBAjGbg2Q8xAqa5qtep5IsgQiaS%2BlQH%2FcCfzX0wGPi4elUryVkWwv8gyHJvVal8UDGCtkjXUgc45mi04wUJ5Ub%2BhdwsW80Hu1k6v%2B2FIdE0l9V2QZogzWmuRGZt0RV%2F6LYyaIJZmN4bA6o3orv%2FhEVWU5ayPYw%2FEkrPuTrVRTx6J8M7YzE2888OuKuG%2BRYwIJde4sj%2F%2FXqfFPhyoc3TtN%2BLfzZAY0MI7HsoltbtVK3beQfbmxAuOLkLzcKvqqBhi2VxZ%2Fj7gLebxjpQ6xLlH%2BudY3uhlFiVnd4O6nPoLXMFLYZLTCk%2Bin1VikEJ4rHCCTo8ZkLIgMefGspP1JUGUL6m1Yi2wEIjzxF87upsC7ypDWoRpGTW0n2svWVbRXDjCsP%2BYTEdQDQMmf3BO8WYMOBNUwHvr9sskW6iQeySpNQXSYQZjDcnKu3BjqzAo9pFyaUJxRQtfX1PnLXbNBzA9AZqG10oPKv2Gt6iLHsE%2BmiAQ%2BRp5I8SZpijN06QD%2B9d8CaR9xCsC%2BOLJ1ymAy8h%2BTuC%2Fcj9qJ4IPkMEf3YL32JNv91yaq77z61OH5rUf%2BXD%2BkKWv2ypE3YqYuJITgg2K9oWPnI02xUJl0NRkJzwGcRceaJIk6Ei%2BRrma7Mufu0AiV%2FcjK4PIp7yBChVpkcHI5L1Ieb1P7R6dB2o51Mju%2B7wqjM3zeMu042h8WgOOIyywlcvZy%2FTbG0ssrPk4A5WGpbjCmt0FScMSgZWEtOuVFy2zW%2BhykMAZyhqbaWFs03SGRR3wbveEIwlymsVUj%2Far54AiAOOodE2oNj9uVpZR7GKDJRoSU1uDr%2Fg3pLelYpkgyQ8NxEDFKHlXKqEtcXQVM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T130538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJZZCLFP2Z%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b14b2c3781c6270c178f22b9fbce0430d46c27247d9714eb815cfe1fc01ac4eb'
  
  const mp4Url = 'https://test-wa.s3.us-east-1.amazonaws.com/PreRender_Footer_or_CTA_v2.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLWVhc3QtMSJHMEUCIBetTIXdX6RULKsRqS6c5jDCnobB52UE7jyKdYKeIhkdAiEA4mJRKItUIHrhWQ5cuLCQ4Kt5UG%2B0NmoqbBRWW4hXtu0q5AIIRhAAGgw3NjczOTc4MzU3MzEiDCiNfEIUqqrJs3DQDSrBAjGbg2Q8xAqa5qtep5IsgQiaS%2BlQH%2FcCfzX0wGPi4elUryVkWwv8gyHJvVal8UDGCtkjXUgc45mi04wUJ5Ub%2BhdwsW80Hu1k6v%2B2FIdE0l9V2QZogzWmuRGZt0RV%2F6LYyaIJZmN4bA6o3orv%2FhEVWU5ayPYw%2FEkrPuTrVRTx6J8M7YzE2888OuKuG%2BRYwIJde4sj%2F%2FXqfFPhyoc3TtN%2BLfzZAY0MI7HsoltbtVK3beQfbmxAuOLkLzcKvqqBhi2VxZ%2Fj7gLebxjpQ6xLlH%2BudY3uhlFiVnd4O6nPoLXMFLYZLTCk%2Bin1VikEJ4rHCCTo8ZkLIgMefGspP1JUGUL6m1Yi2wEIjzxF87upsC7ypDWoRpGTW0n2svWVbRXDjCsP%2BYTEdQDQMmf3BO8WYMOBNUwHvr9sskW6iQeySpNQXSYQZjDcnKu3BjqzAo9pFyaUJxRQtfX1PnLXbNBzA9AZqG10oPKv2Gt6iLHsE%2BmiAQ%2BRp5I8SZpijN06QD%2B9d8CaR9xCsC%2BOLJ1ymAy8h%2BTuC%2Fcj9qJ4IPkMEf3YL32JNv91yaq77z61OH5rUf%2BXD%2BkKWv2ypE3YqYuJITgg2K9oWPnI02xUJl0NRkJzwGcRceaJIk6Ei%2BRrma7Mufu0AiV%2FcjK4PIp7yBChVpkcHI5L1Ieb1P7R6dB2o51Mju%2B7wqjM3zeMu042h8WgOOIyywlcvZy%2FTbG0ssrPk4A5WGpbjCmt0FScMSgZWEtOuVFy2zW%2BhykMAZyhqbaWFs03SGRR3wbveEIwlymsVUj%2Far54AiAOOodE2oNj9uVpZR7GKDJRoSU1uDr%2Fg3pLelYpkgyQ8NxEDFKHlXKqEtcXQVM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240918T130147Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA3FLDZWPJZZCLFP2Z%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=50de98f653d508ad3150cf976777f710dc652117fee88e53ecf5eb10e5cb562b'
  return (
    <div>
    <VideoPlayer src={faststartUrl1} label="WEBM" />
			<p>CONVERTED - WEBM</p>
      <VideoPlayer src={mp4Url} label="MP4" />
			<p>BASE - MP4</p>
    </div>
  );
}


function VideoPlayer({ src, label }) {
	const [ isPlaying, setIsPlaying ] = useState(false);
	const [ playbackDelay, setPlaybackDelay ] = useState(null);
	const [ bufferedData, setBufferedData ] = useState(null);

	const [ error, setError ] = useState(null);
	const videoRef = useRef(null);

	const [ initialLoadTime, setInitialLoadTime ] = useState(null);
	const [ videoResolution, setVideoResolution ] = useState({ width: null, height: null });

	const [ bufferingStart, setBufferingStart ] = useState(null);
	const [ bufferingEnd, setBufferingEnd ] = useState(null);
	const [ totalBufferTime, setTotalBufferTime ] = useState(0);
	const [ bufferingRate, setBufferingRate ] = useState(null);
	const [ bitrate, setBitrate ] = useState(null); // Approximate bitrate

	const handlePlay = () => {
		videoRef.current.play().catch((err) => {
			setError('Error playing video: ' + err.message);
		});
		setIsPlaying(true);
	};

	const handlePause = () => {
		videoRef.current.pause();
		setIsPlaying(false);
	};

  // console.log('xxxxxxx')

	useEffect(
		() => {
      console.log('aaaaaaaass')
			const video = videoRef.current;
			let canPlayStartTime = null;
			let initialLoadStartTime = performance.now();

			let lastBufferedEnd = 0;
			let lastUpdateTime = performance.now();
			let lastBufferingStart = null;
			let previousBufferedEnd = 0;

			// const updateBufferedData = () => {
			// 	if (video.buffered.length > 0) {
			// 		const bufferedEnd = video.buffered.end(video.buffered.length - 1);
			// 		setBufferedData(bufferedEnd);
			// 	}
			// };
			const updateBufferedData = () => {
				if (video.buffered.length > 0) {
					const bufferedEnd = video.buffered.end(video.buffered.length - 1);
					setBufferedData(bufferedEnd);

					// Calculate buffering rate
					const currentTime = performance.now();
					const timeElapsed = currentTime - lastUpdateTime;
					const dataBuffered = bufferedEnd - lastBufferedEnd;

					if (timeElapsed > 0) {
						setBufferingRate(dataBuffered / (timeElapsed / 1000)); // bytes per second
					}

					lastBufferedEnd = bufferedEnd;
					lastUpdateTime = currentTime;

					// Calculate bitrate (approximate)
					const bufferedDuration = video.currentTime - previousBufferedEnd;
					if (bufferedDuration > 0) {
						setBitrate(dataBuffered / bufferedDuration); // bytes per second
					}

					if (video.buffered.length > 0) {
						if (lastBufferingStart === null) {
							setBufferingStart(currentTime);
							lastBufferingStart = currentTime;
						}
						setBufferingEnd(currentTime);
						setTotalBufferTime((prevTotal) => prevTotal + (currentTime - lastBufferingStart) / 1000);
					}
				} else {
					if (lastBufferingStart !== null) {
						setBufferingEnd(null);
						setTotalBufferTime((prevTotal) => prevTotal + (performance.now() - lastBufferingStart) / 1000);
						lastBufferingStart = null;
					}
				}

				previousBufferedEnd = video.currentTime;
			};

			const handleError = (event) => {
				setError('Playback error: ' + event.target.error.message);
			};

			const handleLoadedMetadata = () => {
				const loadEndTime = performance.now();
				setInitialLoadTime(loadEndTime - initialLoadStartTime);

				// Set video resolution
				setVideoResolution({
					width: video.videoWidth,
					height: video.videoHeight
				});
			};

			if (!video.canPlayType('video/webm')) {
				setError('WebM is not supported in this browser.');
			} else {
				video.addEventListener('error', handleError);

				video.addEventListener('canplay', () => {
					canPlayStartTime = performance.now();
				});

				video.addEventListener('playing', () => {
					if (canPlayStartTime) {
						const canPlayEndTime = performance.now();
						setPlaybackDelay(canPlayEndTime - canPlayStartTime);
					}
				});

				video.addEventListener('progress', updateBufferedData);
				video.addEventListener('loadedmetadata', handleLoadedMetadata);
			}

			return () => {
				video.removeEventListener('error', handleError);
				video.removeEventListener('progress', updateBufferedData);
				video.removeEventListener('loadedmetadata', handleLoadedMetadata);
			};
		},
		[ src ]
	);

	return (
		<div>
			<h2>{label}</h2>
			<video
				ref={videoRef}
				autoPlay
				muted
				controls
				aria-label={`Video player for ${label}`}
				style={{ width: '100%', maxWidth: '600px' }}
			>
				<source src={src} type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<button onClick={isPlaying ? handlePause : handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{playbackDelay !== null && <p>Playback delay: {playbackDelay.toFixed(2)} ms</p>}
			{bufferedData !== null && <p>Buffered data: {bufferedData.toFixed(2)} seconds</p>}
			{initialLoadTime !== null && <p>Initial load time: {initialLoadTime.toFixed(2)} ms</p>}
			{videoResolution.height && (
				<p>
					Video resolution: {videoResolution.width}x{videoResolution.height}
				</p>
			)}

			{bufferingRate !== null && <p>Buffering rate: {bufferingRate.toFixed(2)} bytes/second</p>}
			{/* {bufferingStart !== null && <p>Buffering started at: {new Date(bufferingStart).toLocaleTimeString()}</p>}
			{bufferingEnd !== null && <p>Buffering ended at: {new Date(bufferingEnd).toLocaleTimeString()}</p>} */}
			{/* {totalBufferTime > 0 && <p>Total buffer time: {totalBufferTime.toFixed(2)} seconds</p>}
			{bitrate !== null && <p>Approximate bitrate: {bitrate.toFixed(2)} bytes/second</p>} */}
		</div>
	);
}