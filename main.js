let s = 0

function f1() {
  if (s == 1) {
    $('#img').attr('src', '2.jpg')
    s = 2
  }
  else if (s == 2) {
    $('#img').attr('src', '3.jpeg')
    s = 3
  }
  else if (s == 3) {
    $('#img').attr('src', '4.jpeg')
    s = 4
  }
  else if (s == 4) {
    $('#img').attr('src', '5.jpeg')
    s = 5
  }
  else {
    $('#img').attr('src', 'img1.jpeg')
    s = 1
  }
}

$('#but').click(f1)