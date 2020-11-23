const image = document.querySelector("#img");

const mainBox = document.querySelector(".main-box");
const handballBox = document.querySelector("#handball");
const jackBox = document.querySelector("#jack");
const hennessyBox = document.querySelector("#hennessy");
const vodkaBox = document.querySelector("#vodka");
const main = document.querySelector("#main");
const mainBoxText = document.querySelector(".main-box_text")



handballBox.addEventListener("click", (event) => {
console.log(event.target.src);
main.src= event.target.src;
event.preventDefault();
});

jackBox.addEventListener("click", (event) => {
    console.log(event.target.src);
    main.src= event.target.src;
    event.preventDefault();
    });


    hennessyBox.addEventListener("click", (event) => {
        console.log(event.target.src);
        main.src= event.target.src;
        event.preventDefault();
        });

    vodkaBox.addEventListener("click", (event) => {
            console.log(event.target.src);
            main.src= event.target.src;
            event.preventDefault();
            });