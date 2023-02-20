var anh = document.getElementById("anh");
var index = 1;
var img = [];
for (var i = 1; i < 3; i++) {
    img[i] = new Image();
    img[i].src = "img/slider" + i + ".jpg";
}
setInterval(function() {
    index++;
    if (index == img.length) {
        index = 1;
    }
    anh.src = img[index].src;
}, 1500);