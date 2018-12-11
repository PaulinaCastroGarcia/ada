var li = document.getElementsByTagName('li');
console.log(li)

// for (i = 1; i <= li.length; i++) {
//   if (i % 3 == 0 && i % 5 == 0){
//     li[i-1].style.color = 'green';
//   } else if (i % 3 == 0) {
//     li[i-1].style.color = 'red';
//   } else if (i % 5 == 0) {
//     li[i-1].style.color = 'blue';
//   }
// }

for (i = 0; i < li.length; i++) {
  var imasuno = i + 1;

  if (imasuno % 3 == 0 && imasuno % 5 == 0){
    li[i].style.color = 'green';
  } else if (imasuno % 3 == 0) {
    li[i].style.color = 'red';
  } else if (imasuno % 5 == 0) {
    li[i].style.color = 'blue';
  }
}

