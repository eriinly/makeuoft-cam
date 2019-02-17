// replace these values with those generated in your TokBox Account
var apiKey = "46270212";
var sessionId = "1_MX40NjI3MDIxMn5-MTU1MDM4NjE1MDE5OX54RlQxTXJDU3BOR3ZkV0tpVDNYR3dZd21-fg";
var token = "T1==cGFydG5lcl9pZD00NjI3MDIxMiZzaWc9OTNlNDgwNTVmOWIyNTgwYTY0YjMxODk4YjdiMDE4MmVjZTAxOTY0ODpzZXNzaW9uX2lkPTFfTVg0ME5qSTNNREl4TW41LU1UVTFNRE00TmpFMU1ERTVPWDU0UmxReFRYSkRVM0JPUjNaa1YwdHBWRE5ZUjNkWmQyMS1mZyZjcmVhdGVfdGltZT0xNTUwMzg2MTg4Jm5vbmNlPTAuMjY5NzI5OTQ3MDkzOTcyNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTUwOTkwOTg3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
