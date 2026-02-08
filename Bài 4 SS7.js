let players = [
    "P001-Nguyễn Văn A-Thủ môn",
    "P002-Trần Thị B-Hậu vệ",
    "P003-Lê Văn C-Hậu vệ",
    "P004-Phạm Văn D-Tiền vệ",
    "P005-Hoàng Thị E-Tiền đạo",
    "P006-Vũ Minh F-Tiền đạo",
    "P007-Đặng Văn G-Thủ môn",
];
function  printTeamRoster() {
    for (let i=0 ; i<players.length; i++) {
        let arrayPlayers = players[i].split("-");
        let stringPlayers = arrayPlayers.join(" | ");
        console.log(stringPlayers);
        
    }
}
let countGoalkeeper = 0;
let countDefender = 0;
let countStriker = 0;
let countMidfielder = 0;
printTeamRoster();
function countPlayerByPostion() {
    for(let i=0 ; i<players.length ; i++) {
        let inforPlayer = players[i].split("-");
        if(inforPlayer[2] === "Tiền đạo") {
            countStriker++;
        }
        else if(inforPlayer[2] === "Hậu vệ") {
            countDefender++;
        }
        else if(inforPlayer[2] === "Thủ môn") {
            countGoalkeeper++;
        }
        else if(inforPlayer[2] === "Tiền vệ") {
            countMidfielder++;
        }
    }
    console.log(`Tiền đạo: ${countStriker}
Hậu vệ: ${countDefender}
Thủ môn: ${countGoalkeeper}
Tiền vệ: ${countMidfielder}`);
}
countPlayerByPostion();
function hasGoalkeeper() {
    if (countGoalkeeper>=1) {
        return true;
    }
    else {
    return false;
    }
}