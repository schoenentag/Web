package co.edu.member;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MemberDAO extends co.edu.DAO {
	// 전체조회()
	public List<MemberVO> memberList() {
		getConnect(); // 부모DAO의 getConnect 호출
		List<MemberVO> list = new ArrayList<>();
		try {
			psmt = conn.prepareStatement("select * from member order by memb_no"); // 쿼리 실행문
			rs = psmt.executeQuery(); // 조회 : executeQuery, 추가, 수정, 삭제 : executeUpdate

			while (rs.next()) { // rs를 순환하면서 데이터가 있으면 true, 없으면 false 반환
				MemberVO mem = new MemberVO();
				mem.setMembNo(rs.getInt("memb_no")); // DB의 memb_no컬럼의 값을 가지고와서 setMembNo필드에 담음
				mem.setMembName(rs.getString("memb_name"));
				mem.setMembPhone(rs.getString("memb_phone"));
				mem.setMembAddr(rs.getString("memb_addr"));
				mem.setMembBirth(rs.getString("memb_birth"));
				mem.setMembImage(rs.getString("memb_image"));

				list.add(mem);
			} // DB의 값을 List<MemberVO> list 컬렉션에 담기

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect(); // 사용했던 리소스 반환
		}
		return list;

	}

	// 입력 (MemberVO)
	public MemberVO insertMember(MemberVO vo) {
		getConnect();
		String sql ="insert into member(memb_no, memb_name, memb_phone,memb_addr, memb_birth, memb_image) values(?,?,?,?,?,?)";
		String seqSql = "select memb_seq.nextval from dual";
		try {
			//시퀀스
			int nextSeq = 0; // memb_no의 자동 번호를 담을 변수 (회원번호 생성)
			psmt = conn.prepareStatement(seqSql);
			rs = psmt.executeQuery();
			if(rs.next()) { //처리된 결과를 가져오는 메소드
				nextSeq = rs.getInt(1); // seqSql쿼리 실행 후 1번째 칼럼의 값을 int type으로 import
			}
			// 입력처리
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, nextSeq);
			psmt.setString(2, vo.getMembName()); // 매개값을 values에 입력
			psmt.setString(3, vo.getMembPhone());
			psmt.setString(4, vo.getMembAddr());
			psmt.setString(5, vo.getMembBirth());
			psmt.setString(6, vo.getMembImage());
			
			vo.setMembNo(nextSeq); //회원번호를 매개값(vo)으로 넣음
			
			int r = psmt.executeUpdate(); // 구문 조회
			System.out.println(r + "건 입력");
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return vo;
	}

	// 수정 (MemberVO)
	public boolean updateMember(MemberVO vo) {
		getConnect();
		String sql = "update member"
				+ "   set    memb_name = ?,"
				+ "          memb_addr = ?,"
				+ "          memb_phone = ?,"
				+ "          memb_birth = ?,"
				+ "          memb_image = ?"
				+ "   where  memb_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1,vo.getMembName());
			psmt.setString(2,vo.getMembAddr());
			psmt.setString(3, vo.getMembPhone());
			psmt.setString(4, vo.getMembBirth());
			psmt.setString(5, vo.getMembImage());
			psmt.setInt(6, vo.getMembNo());
			
			int r = psmt.executeUpdate(); // 구문 조회
			if (r > 0) {
				return true; // 정상적으로 변경되면 true
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		return false;
	}

	// 삭제 (memb_no)
	public boolean deleteMember(int membNo) {
		getConnect();
		
		String sql = "delete from member where memb_no = ?";
		try {
			psmt = conn.prepareStatement(sql); // 구문 실행
			psmt.setInt(1, membNo);
			
			int r = psmt.executeUpdate(); //구문 조회
			if (r > 0) { //?
				return true;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
		return false;
	}

	// 조건조회(memb_no)
	public MemberVO searchMember(int membNo) {
		getConnect();
		String sql = "select * from member where membNo = ?";
		MemberVO mem = null;
		
		try {
			psmt = conn.prepareStatement(sql); //구문 실행
			psmt.setInt(1, membNo);
			rs = psmt.executeQuery(); // 결과를 쿼리문 실행
			
			while (rs.next()) { // rs를 순환하면서 데이터가 있으면 true, 없으면 false 반환
				mem = new MemberVO();
				mem.setMembNo(rs.getInt("memb_no")); // DB의 memb_no컬럼의 값을 가지고와서 setMembNo필드에 담음
				mem.setMembName(rs.getString("memb_name"));
				mem.setMembPhone(rs.getString("memb_phone"));
				mem.setMembAddr(rs.getString("memb_addr"));
				mem.setMembBirth(rs.getString("memb_birth"));
				mem.setMembImage(rs.getString("memb_image"));
		
			} // DB의 값을 List<MemberVO> list 컬렉션에 담기
				
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		
		return mem;
	}

}
