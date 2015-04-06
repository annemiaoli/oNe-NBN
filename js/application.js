
$(document).ready(function() {

	// soundManager.setup({ useConsole: false });

	$(".infobox").hide();

	// every time you click on a div with class 'element-item'
	$(".element-item").on("click", function(e) {

		var $this = $(this); // $(this) refers to $('.element-item')
		var $infobox = $this.find('.infobox'); 	// use built-in jquery function FIND to find a child node with the class 'infobox' (goes down the DOM tree)
		var $audioPlayer = $this.find('.audio-clip-player');

		$infobox.slideToggle(); // if found, fade in that element with class 'infobox'

		// create "mySound"...
		mySound = soundManager.createSound({
		  url: $audioPlayer.data("url"), //<div class="audio-clip-player" data-url="{#{{ story.audio_url }}#}"> data returns story.audio value
		  id: $infobox.attr('id') //<div class="infobox" id="{#{{ story.story_id }}#}">
		});

		// set events to functions. (goal: when events on the left happens, call the function on the right) 
		mySound.load({
			onload: onAudioLoad,
			whileplaying: whilePlaying,
			onfinish: audioEnded,
			onpause: pauseAudio,
		})

	 });


	function audioEnded() {
	}

	function whilePlaying(){
	}

	function pauseAudio(){
		var pauseaudio=soundManager.togglePause("url");
	}

	function onAudioLoad() {

	}

	$('.player-button.play').click(function(e) {
		e.stopPropagation(); //stop play from bubbling 
		infobox = $(e.target).parents('.infobox')[0];
		id = $(infobox).attr('id');
		soundManager.play(id);
	});

	$('.player-button.pause').click(function(e) {
		e.stopPropagation();
		infobox = $(e.target).parents('.infobox')[0];
		id = $(infobox).attr('id');
		soundManager.pause(id);
	});


});
 