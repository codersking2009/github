let form = document.getElementById("form")
let username = document.getElementById("h1")
let img = document.querySelector(".img")
let input = document.querySelector(".input")
let h2 = document.querySelector(".h2")
let h12 = document.querySelector(".h12")
let h4 = document.querySelector(".h4")
let h42 = document.querySelector(".h42")

form.addEventListener("submit",(ul) => {
ul.preventDefault();
if(input.value == ""){
    username.textContent = "Enter username"
    img.src = "./assets/img/1200px-Plus_symbol.jpg";
}else{
fetch(`https://api.github.com/users/${input.value}`)
  .then(respons => {
    if (respons.status === 200) {
      return respons.json();
      
    }else {
        h2.textContent = "Error user name";
        img.src = "./assets/img/png.jpg";
    }
  })
  .then(data => {
    username.textContent = data.name;
    img.src = data.avatar_url;
    h2.textContent = "";
    h12.textContent = `(@${data.login})`;
    h42.textContent = `Followers:${data.followers}`
    h4.textContent = `Following:${data.following}`
  })
 }
})

console.log(respons);