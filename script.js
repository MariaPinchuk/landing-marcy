var menuBtn = document.getElementById('menu_btn');
var nav = document.getElementById('nav');
document.getElementById("menu_btn").onclick = changeDisplay();

// var heightLogo = document.getElementById("main_logo").clientHeight;
// var heightBtn = menu_btn.clientHeight;
// var topMargin = (heightLogo - heightBtn) / 2;

// menu_btn.style.marginTop = "(heightLogo - heightBtn) / 2 + px";
// menu_btn.style.marginTop = topMargin + "px";
function changeDisplay() {
	if (nav.style.display == 'none') {
	nav.style.display = 'block';
	} else {
	nav.style.display = 'none';
	}
};
