// 时间
function showTime(params) {
    const time = document.getElementById("time");
    time.innerText = new Date().toLocaleTimeString();
    const showTime = setInterval(() => {
        time.innerText = new Date().toLocaleTimeString();
    }, 1000);
}

function menuSel() {
    const menu = document.getElementById("menu");
    menu.onclick = function (ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        sibling(target, "active");
        if (target.nodeName.toLowerCase() == "li") {
            target.classList.add("active");
        }
    };
}

function sibling(e, key) {
    var brother = e.parentNode.children;
    for (let i = 0; i < brother.length; i++) {
        if (brother[i].classList.contains(key)) {
            brother[i].classList.remove(key);
        }
    }
}

// 初始化
function init() {
    showTime();
    menuSel();
}
init();
