var isDragging = false;
var startAngle = 0;
var startRotation = 0;

function startDrag(event) {
  isDragging = true;
  var circle = document.getElementById('circle');
  var transformStyle = getComputedStyle(circle).getPropertyValue('transform');
  var transformValues = transformStyle.split('(')[1].split(')')[0].split(',');
  startAngle = Math.atan2(parseFloat(transformValues[1]), parseFloat(transformValues[0]));
  startRotation = getRotationDegrees(circle);

  document.addEventListener('mousemove', dragCircle);
  document.addEventListener('mouseup', stopDrag);
}

function dragCircle(event) {
  if (isDragging) {
    var circle = document.getElementById('circle');
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var circleX = circle.offsetLeft + circle.clientWidth / 2;
    var circleY = circle.offsetTop + circle.clientHeight / 2;
    var angle = Math.atan2(mouseY - circleY, mouseX - circleX);
    var rotation = (angle - startAngle) * (180 / Math.PI) + startRotation;
    circle.style.transform = 'rotate(' + rotation + 'deg)';
  }
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener('mousemove', dragCircle);
  document.removeEventListener('mouseup', stopDrag);
}

function rotateCircle(direction) {
  var circle = document.getElementById('circle');
  var currentRotation = getRotationDegrees(circle);

  var rotateAmount = 45; // Cantidad de grados a girar

  if (direction === 'left') {
    currentRotation -= rotateAmount;
  } else if (direction === 'right') {
    currentRotation += rotateAmount;
  }

  circle.style.transform = 'rotate(' + currentRotation + 'deg)';
}

function getRotationDegrees(obj) {
  var matrix = getComputedStyle(obj).getPropertyValue('transform');
  if (matrix !== 'none') {
    var values = matrix.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return angle;
  }
  return 0;
}
