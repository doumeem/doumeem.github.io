const typed = new Typed(".typing", {
    strings: ["Developer", "Weeb", "Gamer", "Metalhead", "Streamer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    cursorChar: "",
});

$(".age").html(Math.abs(new Date(Date.now()-new Date("12/02/2007").getTime()).getUTCFullYear()-1970));