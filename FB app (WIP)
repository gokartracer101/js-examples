window.fbAsyncInit = function() {
    FB.init({
        appId      : '44***************9', // App ID
        channelUrl : '//www.teamttl.com/channel.php', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow the server to access the session
        frictionlessRequests : true, // enable frictionless requests
        xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
   //Next, find out if the user is logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            var uid = response.authResponse.userID;
            accessToken = response.authResponse.accessToken;
              FB.api('/me/', function(info) {  //'/me' is 'slicker' than using the var uid; code was formerly - FB.api(uid, function(info)) {
                console.log(info);
                //$('#welcome').html("Hello there " + info.name); //info.first_name;
                $('#welcome').html("Hello " + info.first_name );
              });

        } else if (response.status === 'not_authorized') {
            //console.log("User is logged into FB, but not the App!");
              var oauth_url = 'https://www.facebook.com/dialog/oauth/';
              oauth_url += '?client_id=445965545440019'; //Your Client ID
              oauth_url += '&redirect_uri=' + 'https://apps.facebook.com/teamttl/'; //Send them here if they're not logged in
              oauth_url += '&scope=user_about_me,email,user_location,user_photos,publish_actions,user_birthday,user_likes';
              window.top.location = oauth_url;

        } else {
            //User is not logged into Facebook at all
            window.top.location ='https://www.facebook.com/index.php';
        }//response.status
    });//getLoginStatus
};//fbAsync

function populateResults(data){
    var entries = data.feed.entry;
    alert(entries[i].round);
}

function populateVideos(data) {
  var entries = data.feed.entry;
  var output = '<h2 class="label">Latest Videos</h2>';

  for (var i=0; i<data.feed.entry.length; i++) {
    var entriesID=entries[i].id.$t.substring(38);
    var entriesTitle=entries[i].title.$t;
    var entriesDescription=entries[i].media$group.media$description.$t;
    var entriesThumbnail='https://i.ytimg.com/vi/' + entriesID + '/1.jpg';

    if (i==0) {
      output += '<div class="first">';
      output +=   '<h3>' + entriesTitle + '</h3>';
      output +=   '<iframe src="https://www.youtube.com/embed/'+entriesID+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay="0" frameborder="0" allowfullscreen></iframe>';
      output +=   '<p>' + entriesDescription + '</p>';
      output += '</div>';
      output += '<ul>';
    } else {
      output += '<li><div class="entriestitle">' + entriesTitle + '</div>';
      output += '<a href="https://www.youtube.com/watch?v=' + entriesID + '&feature=youtube_gdata" target="_blank"><img src="' + entriesThumbnail + '" alt=' + entriesTitle + ' /></a>';
    }
  }
  output +='</ul>';
  document.getElementById('videogroup').innerHTML = output;
}

// Load the JavaScript SDK Asynchronously
(function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
}(document));

<?php
session_start();
$timestamp = time();
$diff = 69700; //<-Time of countdown in seconds.  ie. 3600 = 1 hr. or 86400 = 1 day.

$hld_diff = $diff;
if(isset($_SESSION['ts'])) {
    $slice = ($timestamp - $_SESSION['ts']);    
    $diff = $diff - $slice;
}

if(!isset($_SESSION['ts']) || $diff > $hld_diff || $diff < 0) {
    $diff = $hld_diff;
    $_SESSION['ts'] = $timestamp;
}

//Below is demonstration of output.  Seconds could be passed to Javascript.
$diff; //$diff holds seconds less than 3600 (1 hour);

$hours = floor($diff / 3600) . ' : ';
$diff = $diff % 3600;
$minutes = floor($diff / 60) . ' : ';
$diff = $diff % 60;
$seconds = $diff;

?>
<div id="strclock">Clock Here!</div>
<script type="text/javascript">
 var hour = <?php echo floor($hours); ?>;
 var min = <?php echo floor($minutes); ?>;
 var sec = <?php echo floor($seconds); ?>

function countdown() {
 if(sec <= 0 && min > 0) {
  sec = 59;
  min -= 1;
 }
 else if(min <= 0 && sec <= 0) {
  min = 0;
  sec = 0;
 }
 else {
  sec -= 1;
 }
 
 if(min <= 0 && hour > 0) {
  min = 59;
  hour -= 1;
 }
 
 var pat = /^[0-9]{1}$/;
 sec = (pat.test(sec) == true) ? '0'+sec : sec;
 min = (pat.test(min) == true) ? '0'+min : min;
 hour = (pat.test(hour) == true) ? '0'+hour : hour;
 
 document.getElementById('strclock').innerHTML = hour+":"+min+":"+sec;
 setTimeout("countdown()",1000);
 }
 countdown();
