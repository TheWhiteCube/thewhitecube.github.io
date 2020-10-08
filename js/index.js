
socket = null;
connected = false;
function connect() {
  if(connected) return false;
url = document.getElementById('tbox').value;
socket = new WebSocket(url);
socket.addEventListener('error',function(){
    document.getElementById('state').innerText = "Connection Error";
  });
  
  socket.addEventListener('open',function(){
    
document.getElementById('state').innerText = "Connection Successful";
connected = true;
  });
  
socket.addEventListener('message', function (event) {
   document.getElementById('msgsbox').innerHTML += `<p>${event.data}</p>`
});

socket.addEventListener('close',function(){
document.getElementById('state').innerText = "Connection Closed";
document.getElementById('msgsbox').innerHTML = "";
connected = false;

})
connected = true;
}






