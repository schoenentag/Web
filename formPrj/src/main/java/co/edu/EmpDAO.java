package co.edu;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmpDAO extends DAO {
	// class => 복합적인 데이터 하나의 변수.
	// 사원번호, 이름, 이메일주소, 직무 등 => java에서는 하나의 변수에 담을 수 없으므로 class의 필드로 작성
	/*
	 * public void insertEmp(int eId, String name, String email, String job) { }
	 * 이렇게도 가능하나 매개변수가 많아지면 비효율적임
	 */
	//입력기능
	public boolean insertSchedule(CalendarVO vo) {
		//정상적으로 한건 입력 true
		//예외, 0건 : false;
		getConnect();
		String sql = "insert into full_calendar values(?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getTitle());
			psmt.setString(2,vo.getStartDate());
			psmt.setString(3,vo.getEndDate());
			
			int r = psmt.executeUpdate();
			if(r>0) {
				return true;
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return false;
	}
	
	//삭제기능
	public boolean deleteSchedule(CalendarVO vo) {
		getConnect();
		String sql = "delete full_calendar where title = ?";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, vo.getTitle());
			
			int r = psmt.executeUpdate();
			if (r>0) {
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return false;
	}
	
	//일정정보
	public List<CalendarVO> getSchedule(){
		   // 전체 일정정보를 가지고 오도록 메소드 완성하세요.
	      getConnect();
	      String sql = "select * from full_calendar";
	      List<CalendarVO> list = new ArrayList<>();
	      
	      try {
	         psmt = conn.prepareStatement(sql); // psmt : "select * from employees" 실행하고 결과 받아옴.
	         rs = psmt.executeQuery(); // rs
	         while (rs.next()) { // rs를 한건씩 끌어옴 -> 가지고 오면 true.
	            CalendarVO  cal = new CalendarVO();
	            cal.setTitle(rs.getString("title"));
	            cal.setStartDate(rs.getString("start_date"));
	            cal.setEndDate(rs.getString("end_date"));
	            
	            list.add(cal);
	         }
	      } catch (SQLException e) {
	         e.printStackTrace();
	      } finally {
	         disconnect(); // getConnect();
	      }
	      return list;

	}

	// 부서정보, 인원정보
	public Map<String, Integer> getDeptCnt() {
		Map<String, Integer> map = new HashMap<String, Integer>();
		getConnect();
		String sql = "select department_name, count(1) " + "from employees e, departments d "
				+ "where e.department_id = d.department_id " + "group by department_name";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();

			while (rs.next()) {
				map.put(rs.getString(1), rs.getInt(2));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return map;
	}

	public void insertEmp(Employee emp) {
		getConnect(); // DB연결하는 메소드
		String sql = "insert into employees (employee_id, last_name, email, job_id, hire_date)"
				+ "values(employees_seq.nextval,?,?,?,?)"; // insert 쿼리
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, emp.getLastName());
			psmt.setString(2, emp.getEmail());
			psmt.setString(3, emp.getJobid());
			psmt.setString(4, emp.getHireDate());
			int r = psmt.executeUpdate(); // 처리된 쿼리 return하는 메소드
			System.out.println(r + "건 입력");
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

	}

	public List<String> getNames() {
		getConnect();
		String sql = "select first_name from employees"; // 쿼리문
		List<String> list = new ArrayList<>(); // List 인터페이스 타입
		try {
			psmt = conn.prepareStatement(sql); // 쿼리문 실행하고 받아옴
			rs = psmt.executeQuery();
			while (rs.next()) {
				list.add(rs.getString("first_name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	public List<Employee> empList() {
		getConnect();
		String sql = "select * from employees";
		List<Employee> list = new ArrayList<>();

		try {
			psmt = conn.prepareStatement(sql);
			// PreparedStatement : sql문에 변수나 값을 넣을 때 사용
			rs = psmt.executeQuery();
			// ResultSet : 결과값 불러오기
			// executeQuery : ResultSet 객체의 값을 반환
			while (rs.next()) { // 값이 true일 동안 계속 반복
				Employee emp = new Employee();
				emp.setEmail(rs.getString("email")); // Email 필드에 값을 담아줌
				emp.setEmpID(rs.getInt("employee_id"));
				emp.setHireDate(rs.getString("Hire_date"));
				emp.setJobid(rs.getString("job_id"));
				emp.setLastName(rs.getString("last_name"));
				list.add(emp); // list 컬렉션에 담아줌
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	} // end of empList()

}
