package tracking.api;

import org.springframework.data.jpa.repository.JpaRepository;

// TrackingRepository.java
public interface TrackingRepository extends JpaRepository<TrackingEntity, Long> {
    // Custom query methods if needed
}
