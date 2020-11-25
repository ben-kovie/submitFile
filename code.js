let img = document.getElementById (  "pic"  );
let arrange = [ "1.jpg" ,  "2.jpg", '3.jpeg',  ];
let index = 0;

function changeimage() {
    img.setAttribute(  "src",arrange[index]  );
index++;
if (index >= arrange.length) {
  index = 0;  
}
}

setInterval ( changeimage, 3000);
