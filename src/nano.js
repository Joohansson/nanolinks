w = Math.min(Math.round($(window).width()*0.85),convertRemToPixels(85));
h = Math.round(w/10.37);
maxW = 800; //Max width to animate
logos = [document.all.logo1,
		 document.all.logo2,
		 document.all.logo3,
		 document.all.logo4,
		 document.all.logo5,
		 document.all.logo6];
parts = []; //Containing particles (normally 1)
activePart = 0; //Current logo number
stopAnim = false; //Indicate if static logo should be shown when particles stop
switchLogo = true; //Indicate if automatic switching is allowed
updateInterval = 5000;
updateIntervalLast = 10000; //last logo longer wait time

//Set automatic logo switch
logoInterval = window.setInterval(switchImage, updateInterval);

if (w >= maxW  && !isTouchDevice()) {
  init(logos[0]);
}
else {
  stopAnim = true;
  $("#logo").show();
}

//Show pointer cursor when hover the logo
$("#logo-click").css( 'cursor', 'pointer' );

//Initialize particle animation
function init(logoName) {
  part = new NextParticle({
		  image: logoName,
		  addTimestamp: true,
		  width: w,
		  height: h,
		  minWidth: w,
		  minHeight: h,
		  maxWidth: w,
		  maxHeight: h,
		  particleGap: 1,
		  gravity: 0.1,
		  noise: 5,
		  mouseForce: 30,
		  //renderer:'webgl',
		  //particleSize: 2,
		  //layerCount: 1,
		  //layerDistance: 5,
		  //depth: 6,
		  //color: '#000000',
		  initPosition: 'top',
		  initDirection: 'top',
		  fadePosition: 'top',
		  fadeDirection: 'top'
  });

  //Set listener when animation has stopped
  part.on('stopped', function() {
	if (stopAnim) {
	  stopAnim = false; //reset var
	  $("#logo").show(); //Show static image
	}
  });
  
  parts.push(part); //Add particle to array
};

//User clicks on logo
$("#logo-click").click(function() {
  //Reset timer, disallow auto switch once clicked
  window.clearInterval(logoInterval);
  //logoInterval = window.setInterval(switchImage, updateInterval);
  switchLogo = false; //Disable auto switch once clicked
  switchImage();
});

//Switch no next logo
function switchImage() {
  if (stopAnim) {
	return;
  }
  
  activePart = activePart + 1;
  if (activePart >= logos.length) {
	activePart = 0
  }

  //Change source image and switch
  parts[0].image = logos[activePart];
  parts[0].start({
		  initPosition: 'random',
		  initDirection: 'random',
		  fadePosition: 'random',
		  fadeDirection: 'random'});
  
  //Last logo has longer wait time
  if (activePart == logos.length - 1 && switchLogo) {
	window.clearInterval(logoInterval);
	logoInterval = window.setInterval(switchImage, updateIntervalLast); 
  }
  
  //Reset normal wait time
  else if (activePart == 0 && switchLogo) {
	window.clearInterval(logoInterval);
	logoInterval = window.setInterval(switchImage, updateInterval);
  }
};

//Browser window resize
window.onresize = function() {
  w = Math.min(Math.round($(window).width()*0.8),convertRemToPixels(80));
  h = Math.round(w/10.37);

  checkWidth(w,h);
};

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

//Check if valid screen width
function checkWidth(w,h) {
  if (isTouchDevice()) {
	return;
  }
  //Hide animation and show static image instead
  if (w < maxW && parts.length > 0) {
	parts[0].width = 10;
	parts[0].height = 2;
	parts[0].minWidth = 10;
	parts[0].minHeight = 2;
	parts[0].maxWidth = 10;
	parts[0].maxHeight = 2;
	parts[0].start();
	stopAnim = true;
	parts[0].stop();
  }
  
  //Change canvas size
  else if (w >= maxW) {
	if (parts.length == 0) {
	  init(logos[0]);
	}
	parts[0].width = w;
	parts[0].height = h;
	parts[0].minWidth = w;
	parts[0].minHeight = h;
	parts[0].maxWidth = w;
	parts[0].maxHeight = h;
	$("#logo").hide();
	stopAnim = false; //Allow switching again
	parts[0].start();
  }
};

function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
	return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
	return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};