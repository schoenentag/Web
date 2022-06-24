package co.edu;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet({ "/EmpServlet", "/Emplist" })
public class EmpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public EmpServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		EmpDAO dao = new EmpDAO();
		List<Employee>list = dao.empList();
		Gson gson = new GsonBuilder().create(); //사용자의 요청화면 json 데이터 반환
		response.getWriter().print(gson.toJson(list)); // 응답받은 결과를 화면에 출력 
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
