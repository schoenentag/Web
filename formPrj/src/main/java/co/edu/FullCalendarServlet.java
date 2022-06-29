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

@WebServlet("/FullCalendarServlet")
public class FullCalendarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public FullCalendarServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

		EmpDAO dao = new EmpDAO();
		List<CalendarVO> schedules = dao.getSchedule();
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(schedules));

		// [{title,startDate, endDate},{title, starDate, endDate}]
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		//response.setCharacterEncoding("text/html; charset=UTF-8");

		// 파라미터 정보 : cmd=insert, title=입력한 값, start=입력값, end=입력값
		String cmd, title, start, end;
		cmd = request.getParameter("cmd");
		title = request.getParameter("title");
		start = request.getParameter("start");
		end = request.getParameter("end");

		EmpDAO dao = new EmpDAO();

		if (cmd.equals("insert")) {
			CalendarVO vo = new CalendarVO();
			// 사용자 입력값을 vo 셋팅
			vo.setTitle(title);
			vo.setStartDate(start);
			vo.setEndDate(end);

			// 정상적으로 입력처리가 되면...
			if (dao.insertSchedule(vo)) {
				response.getWriter().print("{\"retCode\":\"Success\"}");

			} else {
				response.getWriter().print("{\"retCode\":\"Fail\"}");

			}

		} 
		else if (cmd.equals("delete")) {
			CalendarVO vo = new CalendarVO();
			// 사용자 입력값을 vo 셋팅
			vo.setTitle(title);
	
			//title = request.getParameter("title");
			if (dao.deleteSchedule(vo)) {
				response.getWriter().print("{\"retCode\":\"Success\"}");

			} else {
				response.getWriter().print("{\"retCode\":\"Fail\"}");

			}
		}
	}
}
