// Initialize Firebase



$("#refresh-button").on('mousedown touchstart', function(e){
  e.preventDefault();
  $(this).addClass("activeRefresh");
})

$("#refresh-button").on("mouseup touchend", function(e) {
  e.preventDefault();
  $(this).removeClass("activeRefresh");
})

var imgArr = [];
var uid = "user1";
function getAllImages(callback) {
    document.getElementById("displayImg").innerHTML = "";
    db.collection("Users").doc(uid).collection("Images").get().then((col)=>{
      var c = 0;
        col.forEach((img) => {
            new Promise(resolve => {
                storage.ref().child("" + img.data().id).getDownloadURL().then(function (url) {
                    resolve(url);
                });
            }).then((res) => {
                c++;
                imgArr.push({
                    name: img.data().name,
                    des: img.data().description,
                    id: img.data().id,
                    url: res
                });
                if (c==col.size) {
                  callback&&callback();
                }
            });
        });
    });
}

function displayImages() {
    new Promise(resolve=>{
      imgArr = [];
        getAllImages(()=>{resolve();});
    }).then((res)=>{
        var str = "";
        for (var img of imgArr) {
          var url = img.url + "";
          str += "<div class=\"img row\">" +
              "<div class=\"col-6 px-0\">" +
              "<img src="+url+" class=\"img-fit\">" +
              "</div>" +
              "<div class=\"col-6\">" +
              "<h1>"+img.name+"</h1>" +
              "<h3>"+img.des+"</h3>" +
              "<a href="+url+" target=\"_blank\">View in new window</a>" +
              "</div></div>";
        }
        document.getElementById("displayImg").innerHTML = str;
    });
}
