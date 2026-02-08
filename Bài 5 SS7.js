let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
function  getAllPositions() {
    let position = [];
    for(let i=0 ; i<players.length ; i++) {
        let inforPlayer = players[i].split("-");
        if(position.indexOf(inforPlayer[2]) === -1) {
            position.push(inforPlayer[2]);
        }
    }
    console.log(position);
}
getAllPositions();
function findPlayersWithLongestName() {
    let max = 0;
    let nameLength ="";
    for(let i=0 ;i< players.length; i++) {
        let name = players[i].split("-");
        if(name[1].length>max) {
            max = name[1].length;
            nameLength = name[1];
        }
    }
    console.log(nameLength);
}
findPlayersWithLongestName();
function countPlayersStartingWithLetter(letter) {
    let count = 0;
    letter = letter.toLowerCase();
    for (let player of players) {
        let parts = player.split("-");
        let name = parts[1];
        let firstChar = name[0].toLowerCase();
        if (firstChar === letter) {
            count++;
        }
    }
    console.log(count);
}
let search = prompt("Nhập chữ cái đầu tiên");
countPlayersStartingWithLetter(search);
