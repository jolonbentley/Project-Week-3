function changeMD() {

    var ceoImage = document.getElementById("ceoImage");
    var ceoHeading = document.getElementById("ceoHeading");
    var ceoParagraph = document.getElementById("ceoParagraph");
    var ceoButton = document.getElementById("ceoButton");

    if (ceoHeading.textContent == "Floyd Mayweather") {
        ceoHeading.innerHTML = "Thomas Bradley";
        ceoRole.innerHTML = "Managing Director"
        ceoParagraph.innerHTML = "Thomas has been with the company for 7 years and enjoys Netflix in his downtime";
        ceoImage.src = "/images/md.jpg";
        ceoButton.innerHTML = "Change to CEO";
    }
    else {
        ceoHeading.innerHTML = "Floyd Mayweather";
        ceoRole.innerHTML = "CEO"
        ceoParagraph.innerHTML = "Floyd has been with the company for 12 years and enjoys long walks on the beach in his downtime";
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