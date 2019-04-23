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

//задание с инпутом и загрузкой картинки
// let f = function () {
//     var preview = document.querySelector('img');
//     var file    = document.querySelector('input[type=file]').files[0];
//     var reader  = new FileReader();
    
//     reader.addEventListener("load", function () {
//         preview.src = reader.result;
//     }, false);
    
//     if (file) {
//         reader.readAsDataURL(file);
//     }
//     console.log(reader)
// }
// $('.imginput').change(f);

//   делегирование
//   let li = document.querySelector('list-item');
//   $('.list').on('click', function (e) {
//     var target = e.target;
//     if (target.tagName == 'LI'){
//         console.log(target.innerHTML);
//     }
//   })


// toggle

// let list1 = document.querySelector('.list-1');
// var f2  =   function(e) {
//     var target = e.target;
//     target.children[0].classList.toggle("display-none");
//   };
// $('.tree').on('click', f2);
