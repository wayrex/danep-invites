const currentUrl = window.location.href;
const twoInvitees = currentUrl?.endsWith('2');
let inviteeAmount = 1;
if (twoInvitees) {
    inviteeAmount = 2;
}
document.getElementById("inviteesAmount").innerText=inviteeAmount;
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

console.log('101010;');