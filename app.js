let imgBox = document.querySelector(".imgBox");
let qrImg = document.querySelector("#qrImg");
let inpt = document.querySelector("#inpt");
let btn = document.querySelector(".btn");

let getCode = () => {
    let value = inpt.value;

    if(value.length > 0){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;   //loading image
        // console.log(value);
        imgBox.classList.add("imgBox-visible");
    }else{
        inpt.classList.add("error");
        setTimeout(() => {
            inpt.classList.remove("error");
        }, 1000);
    }
}

btn.addEventListener("click", getCode);