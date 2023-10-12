//package owlUsers;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.Optional;
//
//public interface owlRepository extends JpaRepository<owlUsers, Long> {
//
//    Optional<owlUsers> findByEmail(String email);
//
//    @Transactional(readOnly = true)
//    @Modifying
//    @Query("UPDATE owlUsers a " +
//            "SET a.enabled = TRUE WHERE a.email = ?1")
//    int enableOwlUser(String email);
//}
