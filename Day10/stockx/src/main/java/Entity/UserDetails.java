package Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class UserDetails {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int user_id;
	
	String name;
	String password;
	String email;
	String oraganization_name;
	public UserDetails(int id, String name, String password, String email, String oraganization_name) {
		super();
		user_id = id;
		this.name = name;
		this.password = password;
		this.email = email;
		this.oraganization_name = oraganization_name;
	}
	public UserDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return user_id;
	}
	public void setId(int id) {
		user_id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOraganization_name() {
		return oraganization_name;
	}
	public void setOraganization_name(String oraganization_name) {
		this.oraganization_name = oraganization_name;
	}

}
