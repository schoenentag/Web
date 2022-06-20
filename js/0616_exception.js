//exception.js
let fname = document.getElementById('selectFile');

let data = '';
try {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
        data = reader.result;
        console.log('파일 내용 : ' + data);
    })
    reader.addEventListener('error', function () {
        throw '파일 읽기 에러';
    })

    fname.addEventListener('change', function () {
        reader.readAsText(fname.files[0], 'utf-8'); // .readAsText 파일 읽기
    })
} catch (err /*매개값*/ ) {
    console.log(err.message);
    console.log('정상진행');
}