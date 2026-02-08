let playerIds = [];
let playerPositions = [];
let ask = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng");
let count =0;
for(let i=0;i<ask; i++) {
    let id = prompt("Nhập mã cầu thủ");
    if(playerIds.includes(id)) {
        alert("Mã cầu thủ bị trùng");
        i--;
        continue;
    }
    playerIds.push(id);
    playerPositions.push(prompt("Nhập vị trí"));
    if (playerPositions[i] == 1) {
        playerPositions[i] = "Thủ môn";
    }
    else if (playerPositions[i] == 2) {
        playerPositions[i] = "Hậu vệ";
        count++;
    }
    else if (playerPositions[i] == 3) {
        playerPositions[i] = "Tiền vệ";
    }
    else if (playerPositions[i] == 4 ) {
        playerPositions[i] = "Tiền đạo";
    }
}
function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${ask} cầu thủ):`);
    for(let i=0 ;i<ask;i++) {
        console.log(`${i+1}. ${playerIds[i]} - ${playerPositions[i]}`);
    }
}
function findPlayersByPosition() {
    console.log(`Số cầu thủ ở vị trí Hậu vệ: ${count}`);
}
printTeamRoster();
findPlayersByPosition();