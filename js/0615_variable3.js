//variable3.js

//표로 구구단 2단 출력해보기
let str = '';
let num = 2;
str = '<table border="1">';
for (let i = 1; i <= 9; i++) {
    str += '<tr>' + '<td>' + num + '</td>' + '<td>' + '*' + '</td>' + '<td>' + i + '</td>' +
        '<td>' + '=' + '</td>' + '<td>' + num * i + '</td>' + '</tr>';
}
str += '</table>';
document.write(str);

//달력 만들기
let mon = 5;
showCalendar(mon);

function showCalendar(mon){
    let days = ['일', '월', '화', '수', '목', '금', '토'];

let str2 = '<table border=1><caption>' + mon + '월 달력</caption><tr>';
for (let day of days) {
    str2 += '<th>' + day + '</th>';
}
str2 += '</tr><tr>';
let vtd = getFirstDay(mon); //6월의 1일 값 : 4
for (let i = 1; i < vtd; i++) {
    str2 += '<td></td>';
}

for (let i = 1; i <= getLastDate(mon); i++) {
    str2 += '<td>' + i + '</td>';
    if ((vtd - 1 + i) % 7 == 0) { //7의배수
        str2 += '</tr><tr>';
    }
}
str2 += '</tr></table>';

document.write(str2);
}

function getLastDate(mon) {
    //1,3,5,7,8,10,12월 => 31일까지 return
    //4,6,9,11 => 30일 // 2월 => 28일
    switch (mon) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
    }

}

function getFirstDay(mon) {
    // 월(mon)을 입력하면 해당되는 월의 1일이 오는 위치를 return해주는 기능
    switch (mon) {
        case 1:
            return 7;
        case 2:
            return 7;
        case 3:
            return 3;
        case 4:
            return 6;
        case 5:
            return 1;
        case 6:
            return 4;
        case 7:
            return 6;
        case 8:
            return 2;
        case 9:
        case 10:
            return 5;
        case 11:
            return 7;
        case 12:
            return 5;
        default:
            0;
    }
}