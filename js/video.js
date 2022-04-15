var video = document.querySelector ("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video")
	video.playbackRate /= 0.95;
	console.log("speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime=0
	console.log("video curent time", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted = false;
		mute.innerHTML = "Mute"}
	else{
		video.muted = true;
	mute.innerHTML ="Unmute";}

})

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})