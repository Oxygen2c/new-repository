// var array = []
// for (var i = 0;i < 3;++i) {
//   array[i] = function() {
//     return i
//   }
// }
// for (var j = 0;j < 3;++j) {
//   console.log(array[j]())
// }

// var array = []

//   for (var i = 0; i < 3; i++)(function(i) {

//     var f = function() {
//       console.log(i);
//     };
//     array.push(f);

//   })(i);

// for (var j = 0;j < 3;++j) {
//   array[j]()
// }

// let inp = document.querySelector('.imginput');
//   inp.addEventListener('change',previewFile);
  $('.imginput').change(function previewFile() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
    console.log(reader)
  });
  
  

