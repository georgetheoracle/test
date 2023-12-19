<?php
session_start();
require_once 'vendor/autoload.php'; // Composer autoloader for TwitterOAuth

use Abraham\TwitterOAuth\TwitterOAuth;

$twitterApiKey = 'YXnkNu6IfD4TqRk1Z1wRIK79e';
$twitterApiSecretKey = 'EHveqQ8AxteFwGoeOcusfXySVk4AA5vsdm657f96CS9OOvyDOr';

$twitterOAuth = new TwitterOAuth($twitterApiKey, $twitterApiSecretKey);

$requestToken = $twitterOAuth->oauth('oauth/request_token', array('oauth_callback' => 'http://localhost/dash/callback.php'));

$_SESSION['oauth_token'] = $requestToken['oauth_token'];
$_SESSION['oauth_token_secret'] = $requestToken['oauth_token_secret'];

$loginURL = $twitterOAuth->url('oauth/authenticate', array('oauth_token' => $requestToken['oauth_token']));

header('Location: ' . $loginURL);
exit();
?>
