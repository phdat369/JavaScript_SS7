let playerIds = ["P001", "P002", "P003", "P004", "P005"];
let playerNames = [
    "Nguyễn Văn A",
    "Trần Thị B",
    "Lê Văn C",
    "Phạm Văn D",
    "Hoàng Thị E",
];
let playerJerseyNumber = [10, 7, 8, 9, 11];
function printTeamRoster() {
    console.log("Danh sách cầu thủ");
    for (let i = 0; i < playerNames.length; i++) {
        console.log(`${i + 1}. ${playerIds[i]} - ${playerNames[i]} - ${playerJerseyNumber[i]}`);
    }
}
function updatePlayerNameAndJersey(playerId) {
    let index = playerIds.indexOf(playerId);
    if (index !== -1) {
        let newName = prompt("Nhập tên mới cho cầu thủ");
        let newJerseyNumber = +prompt("Nhập số áo mới");
        playerNames[index] = newName;
        playerJerseyNumber[index] = newJerseyNumber;
        alert("Cập nhật thành công");
        return true;
    }
    else {
        alert("Không tìm thấy mã này");
        return false;
    }
}
let playerId = prompt("Nhập mã cầu thủ muốn cập nhật");
updatePlayerNameAndJersey(playerId);
printTeamRoster();