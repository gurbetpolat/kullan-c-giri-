

var items = ["E-posta", "Parola", "Giriş Yap"]

var inputtt = document.querySelector("#inputlar");

items.forEach(function (item, index) {



    var input = document.createElement("input");
    var t = document.createTextNode(item);

    input.appendChild(t);
    switch (index) {
        case 0:
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", "E-posta");
            input.setAttribute("autocomplete", "false");
            input.setAttribute("id","eposta")
            break;

        case 1:
            input.setAttribute("type", "password");
            input.setAttribute("placeholder", "Parola");
            input.setAttribute("id","password")
            break;
        case 2:
            input.setAttribute("type", "button");
           input.value="Giriş Yap"
            input.className="in";
            input.setAttribute("id","girisbtn")
            break;
        default:
            break;
    }
    input.appendChild(t);

    inputtt.appendChild(input);

});

var KullanıcıKayıtlar = [

    {
        eposta: "emine@gmail.com",
        password: 1234

    },
    {
        eposta: "emre@gmail.com",
        password: 4321

    },
    {
        eposta: "gurbet@gmail.com",
        password: 5678

    },
    {
        eposta: "buse@gmail.com",
        password: 8765

    }
];


const girisbtn=document.getElementById("girisbtn");
const eposta=document.getElementById("eposta");
const password=document.getElementById("password");

girisbtn.addEventListener("click",function(){

    let posta=eposta.value;
    let pass=password.value;
 
    let kullanıcı= KullanıcıKayıtlar.find((item)=>item.eposta==posta )
   
    
    if(!kullanıcı){
        return alert("Kullanıcı Bulunamadı");
    }
   if(pass==kullanıcı.password){
    window.location.href = "about.html";

   }
   else{
    alert("sifre yanlıs")
   }
});




