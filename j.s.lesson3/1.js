// function f1() {
//     let num, prNum, out, tempOut;
//     prNum = Math.floor((Math.random()*10)+1);
//     tempOut=document.getElementById('temp-out');
//     tempOut.innerHTML = prNum;
//
//     num =  parseInt(document.getElementById("my-num").value, 10);
//     out = document.getElementById("out");
//
//     console.log("num = " + num + " prNum = " + prNum);
//     if (num === prNum){
//         out.innerHTML ="Good";
//     }
//     else if (num>prNum){
//         out.innerHTML = "Bad";
//     }
//     else {
//         out.innerHTML ="Not good";
//     }
// }

// var parent = document.getElementById("test");
// var child1 = document.createElement("li" );
// var child2 = document.createElement("li" );
// var child3 = document.createElement("li" );
// child3.appendChild(child2);
// child1.appendChild(child3);
//
// parent.appendChild(child1);

var parent = document.getElementById("test");
for (var i = 0; i<3; i++) {
    var child = document.createElement("li");
    parent.appendChild(child);
}