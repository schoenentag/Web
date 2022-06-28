/**
 * upload.js
 */
document.addEventListener('DOMContentLoaded', function() { // (script태그가 헤드에 있기때문에) 문서를 다 불러온 다음에 함수에 있는 내용 실행 // 안그러면 tbl값이 null로 뜸
	let tbl = document.querySelector('#show table');
	let capt = document.createElement('caption');
	capt.innerHTML = '회원리스트';
	tbl.appendChild(capt);

	//list 출력 - 홈페이지 오픈 시 DB 정보 자동 출력해주는 기능
	let ajax = new XMLHttpRequest();
	ajax.open('get', 'member?cmd=list');
	ajax.send();
	ajax.onload = function() {
		let data = JSON.parse(this.responseText);
		let tbody = document.querySelector('#show tbody');

		data.forEach(member => {
			tbody.append(makeTr(member));
		});

	};//onload끝

	//form 기본 기능 => ajax 처리(XMLHttpRequest, fetch)
	document.forms.memberFrm.addEventListener("submit", function(e) {
		e.preventDefault(); //이벤트 기본기능 차단
		let formData = new FormData(e.target); // e.target = form , form의 내용을 key와 value형식으로 바꾸어줌
		for (let ent of formData.entries()) {
			console.log(ent);
		};

		// get: url, post: 추가정보지정필요
		fetch('memberUpload', {
			method: 'post',
			body: formData
		})
			.then(function(result) {
				return result.json();
			})
			.then(function(result) {
				console.log(result);
			})
			.catch(function(err) {
				console.log(err);
			})
	})

}); // addEventListener 콜백함수 끝


// TR생성 
let fields = ['membNo', 'membName', 'membPhone', 'membAddr', 'membBirth', 'membImage'];
function makeTr(member) {
	let tr = document.createElement('tr');
	tr.setAttribute('id', member.membNo); //tr의 attribute 중에 id 활용
	//tr.addEventListener('click', showDetail);

	fields.forEach(field => {
		let td = document.createElement('td');
		//null, 0, undifined, '' => false이외 true;
		td.innerHTML = member[field] ? (field == 'membImage') ? '<img width="60px" src ="images/' + member[field] + '">' : member[field] : '';
		/* td.innerHTML = member[field]; */
		tr.append(td);
	})
	//삭제 버튼
	let btn = document.createElement('button');
	btn.innerHTML =  '삭제'
	btn.addEventListener('click', rowDelete, false); /* 더블링 false */
	let td = document.createElement('td');
	td.append(btn);
	tr.append(td);
	//체크박스.input type='checkbox', tr> td > 버튼
	let chk = document.createElement('input');
	chk.setAttribute("type", "checkbox");
	td = document.createElement('td');
	td.append(chk);
	tr.append(td);

	return tr;
}// tr생성 끝

function rowDelete() {
	let delId = this.parentElement.parentElement.getAttribute('id');
	let formData = new FormData();
	formData.append("cmd", "delete");
	formData.append("delId", delId);
	//id=32&name=hong
	fetch('memberUpload', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: `cmd=delete&delId=${delId}`
	})
		.then(function(result){
			return result.json();
		})
		.then(function(result){
			console.log(result)
		})
		.catch(function(err){
			console.error(err);
		})

}//rowDelete 끝

