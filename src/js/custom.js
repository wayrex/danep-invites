const currentUrl = window.location.href;
const twoInvitees = currentUrl?.endsWith('2');
let inviteeAmount = 1;
if (twoInvitees) {
    inviteeAmount = 2;
}
document.querySelector("#inviteesAmount").innerText=inviteeAmount;

console.log(currentUrl);