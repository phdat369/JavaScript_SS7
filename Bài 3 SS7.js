let players = [];
let ask = +prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng");
for (let i=0 ;i < ask ; i++) {
    let newPlayerIds = prompt("Nhập mã cầu thủ");
    let newName = prompt("Nhập tên cầu thủ");
    let newPosition = +prompt("Nhập vị trí");
    if (newPosition === 1) {
        newPosition = "Thủ môn";
    }
    else if (newPosition === 2) {
        newPosition = "Hậu vệ";
    }
    else if (newPosition === 3 ) {
        newPosition = "Tiền vệ";
    }
    else if (newPosition === 4) {
        newPosition = "Tiền đạo";
    }
    let inforPlayer = newPlayerIds.concat("-",newName,"-",newPosition);
    players.push(inforPlayer);
}
function printTeamRoster() {
    console.log("Danh sách cầu thủ");
    for(let i=0 ; i<players.length ; i++) {
        console.log(`${i+1} ${players[i]}`);
    }
}
function pushPlayer() {
    let addPlayerIds = prompt("Nhập mã cầu thủ cần thêm");
    let addName = prompt("Nhập tên cầu thủ cần thêm");
    let addPosition = +prompt("Nhập vị trí cần thêm");
    if (addPosition === 1) {
        addPosition = "Thủ môn";
    }
    else if (addPosition === 2) {
        addPosition = "Hậu vệ";
    }
    else if (addPosition === 3 ) {
        addPosition = "Tiền vệ";
    }
    else if (addPosition === 4) {
        addPosition = "Tiền đạo";
    }
    let addInforPlayer = addPlayerIds.concat("-",addName,"-",addPosition);
    players.push(addInforPlayer);
}
pushPlayer();
printTeamRoster();