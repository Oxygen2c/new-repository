var array = []
for (var i = 0;i < 4;++i) {
  array[i] = function() {
      
    return i
  }
}
for (var j = 0;j < 4;++j) {
  console.log(array[j]())
}
console.log(array);