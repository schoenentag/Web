package co.edu;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDAO extends DAO{
	// class => 복합적인 데이터 하나의 변수.
	// 사원번호, 이름, 이메일주소, 직무 등 => java에서는 하나의 변수에 담을 수 없으므로 class의 필드로 작성  
	/*
	 * public void insertEmp(int eId, String name, String email, String job) { }
	 * 이렇게도 가능하나 매개변수가 많아지면 비효율적임
	 */
	public void insertEmp(Employee emp) {
		getConnect(); // DB연결하는 메소드
		String sql = "insert into employees (employee_id, last_name, email, job_id, hire_date)"
				+ "values(employees_seq.nextval,?,?,?,?)"; //insert 쿼리
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
		List<String> list = new ArrayList<>(); //List 인터페이스 타입
		try {
			psmt = conn.prepareStatement(sql); //쿼리문 실행하고 받아옴
			rs = psmt.executeQuery();
			while(rs.next()) {
				list.add(rs.getString("first_name"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
}