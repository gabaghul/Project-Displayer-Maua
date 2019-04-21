

function sendData(){
    var name =  document.getElementById("inp_name").value;
    var txt1 = document.getElementById("inp_txt1").value;
    var txt2 = document.getElementById("inp_txt2").value;
    var img = document.getElementById("inp_img").value;

    try {
        var xmlhttp = new XMLHttpRequest();   
        xmlhttp.open("POST", "http://localhost/ic_api/public/index.php/api/cards/add");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        var json = JSON.stringify({name_card:name, text1:txt1, text2:txt2, img:img})
        xmlhttp.send(json);
        alert("sucesso!")
    } catch (error) {
        alert("error")
    }


}