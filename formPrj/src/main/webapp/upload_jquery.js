/**
 * upload_jquery.js
 * Ajax => XMLHttpRequest, fetch, jQuery.$ajax()
 */
$(document).ready(function() {
	//페이지에 리스트 출력
	$.ajax({
		url: 'member', //멤버서블릿 호출
		method: 'get', // 기본값 get
		data: 'cmd=list', //넘길 값
		success: showList,
		error: function(err) {
			console.log(err);
		}
	});
	//추가버튼 클릭
	$('form[name="memberFrm"]').on('submit', memberAddCallBack);

});
function memberAddCallBack(e) {
	e.preventDefault();
	console.log('e.target', e.target);
	let fData = new FormData(e.target);
	for (let d of fData.entries()) { //entries : key와 values 다 추출
		console.log(d);
	}

	//ajax 호출 => 데이터 등록(servlet), 화면에도 추가
	$.ajax({
		url: 'memberUpload',
		method: 'post',
		data: fData,
		contentType: false,
		processData: false,
		dataType: 'json', //결과 값 json형식으로 변경
		success: function(result) {
			console.log(result);
			showList(result);
		},
		error: function(err) {
			console.log(err);
		}

	});

}

function showList(result) { // success에 담을 함수
	let tbody = $('#show > table > tbody')
	$(result).each(function(idx, elem) {
		//tr, td를 만들어 tbody에 붙이기(makeTr)
		tbody.append(makeTr(elem));
	});
} //showLis 함수 끝

function makeTr(elem) {
	let btn = $('<button />').text('삭제');
	btn.on('click', removeCallBack); // 이벤트 등록(삭제)

	let imgSrc = elem.membImage ? '<img width="50px" src="images/' + elem.membImage + '">' : '';
	//tr, td를 만들어 tbody에 붙이기
	return $('<tr />').attr('id', elem.membNo)
		.append($('<td />').text(elem.membNo)
			, $('<td />').text(elem.membName)
			, $('<td />').text(elem.membPhone)
			, $('<td />').text(elem.membAddr)
			, $('<td />').text(elem.membBirth)
			, $('<td />').html(imgSrc)
			, $('<td />').append(btn))
}//makeTr 끝

function removeCallBack(e) { // 삭제 버튼 메소드
	//비동기 호출
	let membNo = $(e.target).parent().parent().attr('id');
	$.ajax({
		url: 'member',
		method: 'post',
		data: 'cmd=remove&delNo=' + membNo,//elem.membNo
		success: function(result) {
			if (result.retCode == 'Success') {
				$('#' + membNo).remove();
			} else {
				alert('처리 중 에러');
			}
		},
		error: function(err) {
			console.log(err);
		}
	})
}//removeCallBack 끝