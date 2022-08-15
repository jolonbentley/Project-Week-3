function changeMD() {

    var ceoImage = document.getElementById("ceoImage");
    var ceoHeading = document.getElementById("ceoHeading");
    var ceoParagraph = document.getElementById("ceoParagraph");
    var ceoButton = document.getElementById("ceoButton");

    if (ceoHeading.textContent == "Floyd Mayweather") {
        ceoHeading.innerHTML = "Thomas Bradley";
        ceoParagraph.innerHTML = "Managing Director";
        ceoImage.src = "/images/md.jpg";
        ceoButton.innerHTML = "Change to CEO";
    }
    else {
        ceoHeading.innerHTML = "Floyd Mayweather";
        ceoParagraph.innerHTML = "Chief Executive Officer";
        ceoImage.src = "/Images/ceo-about.jpg";
        ceoButton.innerHTML = "Change to MD";
    }

}

/*Created to toggle between the two styles when clicked*/

function contactHeading() {
    var toggleHeading = document.getElementById("contactHeading");
    toggleHeading.classList.toggle("contactHeadingAltStyle");
}

var btn = document.getElementById("staffBtn");
btn.style.visibility = "hidden";

function hideAllStaff() {
    var staff = document.getElementById("allStaff");
    staff.style.visibility = "hidden"
}

function showStaffBtn() {
    btn.style.visibility = "visible";
}

function hideStaffBtn() {
    btn.style.visibility = "hidden"
}

function mouseEnter() {
    var infoRight = document.querySelector(".jsAlign");
    infoRight.classList.add("jsAlignClass");
}

function mouseExit() {
    var infoRevert = document.querySelector(".jsAlign");
    infoRevert.classList.remove("jsAlignClass");
}