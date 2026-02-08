let choice;
const player =[];
const goal = [];
/**
 * @description Hàm thêm thông tin cầu thủ kèm số bàn thắng
 * @param {*} playerName Tên cầu thủ
 * @param {*} goal Số bàn thắng của cầu thủ đó
 */
const addPlayer = (playerName , goal) => {
    player.push(playerName);
    goal.push(goal);
};
const showSquad = () => {
    if(player.length === goal.length) {
        for(let i=0 ; i <player.length; i++) {
            console.log(`${i+1}. ${player[i]} - ${goal[i]} bàn`);
        }
    }
    else {
        alert("Dữ liệu không hợp lệ. Hãy kết thúc chương trình và nhập lại");
    }
};
/**
 * @description Hàm tính tổng bàn thắng cả đội
 * @returns Tổng số bàn thắng
 */
const getTotalGoals = () => {
    let total = 0;
    for (let i=0 ; i<goal.length; i++) {
        total+=goal[i];
    }
    return total
};
/**
 * @description hàm tìm kiếm vua phá lưới
 * @returns Thông tin cầu thủ có số bàn thắng lớn nhất
 */
const findMostGoals = () => {
    let max=goal[0];
    let maxIndex= 0;
    for(let i =0 ; i<goal.length; i++) {
        if(goal[i]>max) {
            max = goal[i];
            maxIndex = i;
        }
    }
    return player[maxIndex];
};
do {
    choice = +prompt(
        `--- QUẢN LÝ ĐỘI BÓNG ---

1. Nhập cầu thủ mới

2. Xem danh sách đội hình

3. Xem thành tích toàn đội

4. Tìm Vua phá lưới

0. Thoát`
    );
    switch (choice) {
        case 1:
            const playerName = prompt("Nhập tên cầu thủ");
            const goal = +prompt("Nhập số bàn thắng");
            player.push(playerName);
            player.push(goal);
            alert("Thêm thông tin cầu thủ thành công");
            break;
        case 2:
            showSquad();
            break;
        case 3:
            const totalGoal = getTotalGoals();
            console.log(`Tổng số bàn thắng của toàn đội là: ${totalGoal}`);
            
            break;
        case 4:
            const playerMaxGoal = findMostGoals();
            console.log(`Cầu thủ có số bàn thắng cao nhất là: ${playerMaxGoal}`);
            break;
        case 5:
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập lại");
            break;
    }
} while (choice !== 0 );