package co.edu.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

// 서블릿은 자바 소스코드 속에 HTML코드가 들어가는 형태
// get 방식 요청 : 조회
// post방식 요청 : 입력, 수정, 삭제

//서블릿 처리
// 1) form :JSP ( 서블릿 => 화면.jsp)
// 2) AJAX (single Page Application)

@WebServlet({ "/member" }) // 주소창에 member라고 검색하면 MemberServlet 클래스 실행
public class MemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberServlet() {
		super();
	}

	// doGet : 주소창에 값 노출 o
	protected void doGet(HttpServletRequest request, HttpServletResponse response) // request 요청 , response 응답
			throws ServletException, IOException {
		// 응답정보에 한글처리
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		String cmd = request.getParameter("cmd");
		Gson gson = new GsonBuilder().create(); // json 데이터 생성해주는 라이브러리 인스턴스 생성
		MemberDAO dao = new MemberDAO();

		if (cmd.equals("list")) { // 파라메터 cmd가 list이면...
			// 전체리스트 => json 화면 보여주기
			List<MemberVO> list = dao.memberList();
			// 응답정보 처리
			response.getWriter().print(gson.toJson(list));

		} else if (cmd.equals("insert")) { // 파라메터 cmd가 insert이면...
			String name = request.getParameter("name");
			String addr = request.getParameter("addr");
			// 주소창에 http://localhost:8088/formPrj/member?cmd=insert&name=Park&addr=Daegu
			// 파라메터를 입력하면 해당값이 DB에 저장 및 출력
			MemberVO vo = new MemberVO();
			vo.setMembName(name);
			vo.setMembAddr(addr);

			dao.insertMember(vo);
			// {"retCod":Success"}
			response.getWriter().print(gson.toJson(vo));

		} else if (cmd.equals("update")) {
			// 전화번호
			String numb = request.getParameter("no");
			String phone = request.getParameter("ph");

			MemberVO vo = new MemberVO();
			vo.setMembNo(Integer.parseInt(numb));
			vo.setMembPhone(phone);

			if (dao.updateMember(vo)) {
				// {"retCod":"Success"}
				response.getWriter().print("{\"retCod\":\"Success\"}");
			} else {
				// {"retCod":"Fail"}
				response.getWriter().print("{\"retCod\":\"Fail\"}");
			}
		} else if (cmd.equals("delete")) { // 삭제
			String delNo = request.getParameter("delNumber");

			if (dao.deleteMember(Integer.parseInt(delNo))) {
				// {"retCod":"Success"}
				response.getWriter().print("{\"retCod\":\"Success\"}");
			} else {
				// {"retCod":"Fail"}
				response.getWriter().print("{\"retCod\":\"Fail\"}");
			}
		}

	}

	// doPost : 주소창에 값 노출 x
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 한글처리
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");

		// post방식이 요청되면 실행 메소드
		String cmd = request.getParameter("cmd"); // parameter:매개변수

		String membName = request.getParameter("name");
		String membAddr = request.getParameter("addr");
		String membPhon = request.getParameter("phone");
		String membBirth = request.getParameter("birth");
		String membImag = request.getParameter("image");

		MemberVO vo = new MemberVO();
		vo.setMembName(membName);
		vo.setMembAddr(membAddr);
		vo.setMembPhone(membPhon);
		vo.setMembBirth(membBirth);
		vo.setMembImage(membImag);

		MemberDAO dao = new MemberDAO();
		Gson gson = new GsonBuilder().create();
		PrintWriter out = response.getWriter();

		// 매개값의 정보가 add면...1.입력
		if (cmd.equals("add")) {
			dao.insertMember(vo);
			out.print(gson.toJson(vo));

			// 2.수정
		} else if (cmd.equals("modify")) {
			if (dao.updateMember(vo)) {
				out.print("{\"retCod\":\"Success\"}");
			} else {
				out.print("{\"retCod\":\"Fail\"}");
			}

			// 3.삭제
		} else if (cmd.equals("remove")) {
			String delNo = request.getParameter("delNo");
			if (dao.deleteMember(Integer.parseInt(delNo))) {
				out.print("{\"retCod\":\"Success\"}");
			} else {
				out.print("{\"retCod\":\"Fail\"}");
			}

		}

	}

}
