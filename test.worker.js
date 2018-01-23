var time = 1000;
setTimeout(function () { Tick(); }, time);
addEventListener('message', function (message) {
    console.log('in webworker', message);
});
function Tick() {
    setTimeout(function () { Tick(); }, time);
    //console.log('worker tick');
    var post = postMessage;
    post('tick');
}
