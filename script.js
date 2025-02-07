const isTouchDevice = "ontouchstart" in window;
const createCursorFollower = () => {
    const $el = document.querySelector(".follower");
    window.addEventListener("mousemove", (e) => {
        const { target, x, y } = e;
        gsap.to($el, {
            x: x-20,
            y: y-15,
            duration: 0.25,
            opacity: 0.25,
        });
    });
    window.addEventListener("mouseout", (e) => {
        gsap.to($el, {
            duration: 0.25,
            opacity: 0,
        });
    });
};

const typed = new Typed(".typing", {
    strings: ["Dude", "Developer", "Weeb", "Gamer", "Metalhead", "Streamer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    cursorChar: ' |',
});

setInterval(() => {
    $.ajax({
        url: "https://decapi.me/twitch/uptime/dou_meem",
        success: (data) => {
            if (!data.includes("offline")) $(".twitch").addClass("live");
            else $(".twitch").removeClass("live");
        }
    });
}, 10000);

if (!isTouchDevice) createCursorFollower();