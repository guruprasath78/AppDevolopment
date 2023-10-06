package Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Entity.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, Integer> {

}
