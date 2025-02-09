const $el = document.querySelector(".follower");
window.addEventListener("mousemove", (e) => {
    const { target, x, y } = e;
    gsap.to($el, {
        x: x-20,
        y: y-15,
        duration: 0.5,
        opacity: 0.5,
    });
});
window.addEventListener("mouseout", (e) => {
    gsap.to($el, {
        duration: 0.5,
        opacity: 0,
    });
});

const typed = new Typed(".typing", {
    strings: ["Developer", "Weeb", "Gamer", "Metalhead", "Streamer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    cursorChar: ' |',
});

$(".age").html(Math.abs(new Date(Date.now()-new Date("12/02/2007").getTime()).getUTCFullYear()-1970));

setInterval(() => {
    $.ajax({
        url: "https://decapi.me/twitch/uptime/dou_meem",
        success: (data) => {
            if (!data.includes("offline")) $(".twitch").addClass("live");
            else $(".twitch").removeClass("live");
        }
    });
    $.ajax({
        url: "https://decapi.me/twitch/uptime/mehrsonn",
        success: (data) => {
            if (!data.includes("offline")) $(".mehrsonn").addClass("live");
            else $(".mehrsonn").removeClass("live");
        }
    });
}, 10000);