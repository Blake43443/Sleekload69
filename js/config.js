/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.09
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Display current map and gamemode?
'true' or 'false'*/
var l_displayMapGamemode = true;

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will use images
'true' or 'false'*/
var l_bgVideo = false;

/*Default available videos:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add your own video backgrounds
Just make sure they are using webm VP8 format 
(Place the videos in the backgrounds/videos folder)*/
var l_background = "bluefall.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Place the files in the backgrounds/images folder)*/
var l_bgImages = [
"1.png",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
];

/*Random background images order?
'true' or 'false'*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?
'true' or 'false'*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Play music during the loading screen?
'true' or 'false'*/
var l_music = true;

/*Display current music name?
'true' or 'false'*/
var l_musicDisplay = true;
var l_musicDisplay = true;

/*Music playlist
Add as many youtube ids or ogg files you want
(Place the ogg files in the music folder)*/
var l_musicPlaylist = [
	{youtube: "p733z6aKwMA", name: "Otherwise - Soldiers"},
];
	
/*Random music order?
'true' or 'false'*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 (quietest) and 100 (loudest)*/
var l_musicVolume = 15;

/*Enable custom messages?
'true' or 'false'*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
     "Welcome To StealthyRP",
	 "Thank You For Joining",
	 "Enjoy Your Stay",
	 "Join Our Discord: https://discord.gg/sBZXC39",
	 "Download Our Content Pack: http://steamcommunity.com/sharedfiles/filedetails/?id=1325210914"
];

/*Random message order?
'true' or 'false'*/
var l_messagesRandom = false

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;