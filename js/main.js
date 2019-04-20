// Initialize Firebase

var imgArr = [];

function getAllImages() {
    document.getElementById("displayImg").innerHTML = "";
    db.collection("Users").doc("user1").collection("Images").get().then((col)=>{
        col.forEach((img) => {
            new Promise(resolve => {
                storage.ref().child("" + img.data().id).getDownloadURL().then(function (url) {
                    resolve(url);
                });
            }).then((res) => {
                imgArr.push({
                    name: img.data().name,
                    des: img.data().description,
                    id: img.data().id,
                    url: res
                });
                document.getElementById("displayImg").innerHTML += "<div class=\"img row\">" +
                    "<div class=\"col-6 px-0\">" +
                    "<img src=" + res + " class=\"img-fit\">" +
                    "</div>" +
                    "<div class=\"col-6\">" +
                    "<h1>" + img.data().name + "</h1>" +
                    "<h3>" + img.data().description + "</h3>" +
                    "<a href=" + res + " target=\"_blank\">View in new window</a>" +
                    "</div></div>"
            });
        });
    });
}

function displayImages() {
    var dis = document.getElementById("displayImg");
    new Promise(resolve=>{
        var a = getAllImages();

    }).then((images)=>{
        var str = "";
        console.log(images);
        images.forEach((img)=> {
            console.log(img);
            var url = img.url + "";
            console.log(url);
            str += "<div class=\"img row\">" +
                "<div class=\"col-6 px-0\">" +
                "<img src="+url+" class=\"img-fit\">" +
                "</div>" +
                "<div class=\"col-6\">" +
                "<h1>"+img.name+"</h1>" +
                "<h3>"+img.des+"</h3>" +
                "<a href="+url+" target=\"_blank\">View in new window</a>" +
                "</div></div>"
        });
        dis.innerHTML = str;
    });
}
