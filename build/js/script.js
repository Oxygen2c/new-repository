// var array = []
// for (var i = 0;i < 3;++i) {
//   array[i] = function() {
//     return i
//   }
// }
// for (var j = 0;j < 3;++j) {
//   console.log(array[j]())
// }

var array = []

  for (var i = 0; i < 3; i++)(function(i) {

    var f = function() {
      console.log(i);
    };
    array.push(f);

  })(i);

for (var j = 0;j < 3;++j) {
  array[j]()
}


