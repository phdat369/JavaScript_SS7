// tính tổng các số trong mảng sau
const firstArray = [1, 30, 40, 50, 60, 100];
let total_1=0;
for(let i =0 ; i < firstArray.length ; i++) {
    total_1 +=firstArray[i];
}
const secondArray = [40, 30, 40, 30, 90, 800];
let total_2=0;
for(let i =0 ; i < firrstArray.length ; i++) {
    total_2 +=firrstArray[i];
}
const thirdArray = [10, 30, 40, 20, 900, 1000];
let total_3=0;
for(let i =0 ; i < firrstArray.length ; i++) {
    total_3 +=firrstArray[i];
}
console.log("total_1: ", total_1);
console.log("total_2: ", total_2);
console.log("total_3: ", total_3);
//khai báo hàm
// khi xây duqngj hàm cần phỉa xác định những tông tin sau:
//1. Tên hàm
//2. Số lượng tham số và đối số
//3. Logic xử lí
//4. Kết quả trẩ về
//Function declaration
function sum(firrstNumber , secondNumber){
    console.log("Hàm tính tổng",firrstNumber,secondNumber);
}
//gọi hàm được thực thi cần phải gọi
sum();
//lấy kết quả trả về từ hàm
const result = sum(10, 20); 
function sumArray(array) {
    let total= 0;
    for (let i=0;i<array.length; i++) {
        total+= array[i];
    }
    return total;
}
const totalSumArray = sumArray(firstArray);
console.log("totalSumArray: ",totalSumArray);
//function expression
const expression = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
//Arrow function
const getName = (userName) => `Tên của tôi là : ${userName}`
//lưu ý : đối với những hàm có logic xử lí đơn giản thì có thể return trực tiếp mà không cần từ khóa return
//arrow function không có ngữ cảnh (dùng từ khóa this) và không có object constructor
console.log(getName("Nguyễn Văn A"));
//Quy tắc commet theo chuẩn của JSDoc
/**
 * @description Hàm định dạng chuỗi họ và tên
 * @param {*} firstName Họ và tên đệm
 * @param {*} lastName Tên
 * @returns Họ và tên đầy đủ
 * @author Phạm Thành Đạt (06/02/2026)
 */
const getFullName = (firstName , lastName) => `Họ và tên: ${firstName} ${lastName}`
getFullName("Nguyễn Văn", "Nam");
//IIFE
(
    () => {
        console.log("IIFE");
        
    }
)
