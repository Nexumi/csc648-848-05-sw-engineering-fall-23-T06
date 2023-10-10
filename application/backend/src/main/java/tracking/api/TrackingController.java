package tracking.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// TrackingController.java
@RestController
@RequestMapping("/api/tracking")
public class TrackingController {
    private final TrackingRepository trackingRepository;

    @Autowired
    public TrackingController(TrackingRepository trackingRepository) {
        this.trackingRepository = trackingRepository;
    }

    @GetMapping
    public List<TrackingEntity> getAllTrackingRecords() {
        return trackingRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrackingEntity> getTrackingRecordById(@PathVariable Long id) {
        Optional<TrackingEntity> trackingRecord = trackingRepository.findById(id);
        return trackingRecord.map(record -> new ResponseEntity<>(record, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<TrackingEntity> createTrackingRecord(@RequestBody TrackingEntity trackingEntity) {
        TrackingEntity savedRecord = trackingRepository.save(trackingEntity);
        return new ResponseEntity<>(savedRecord, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TrackingEntity> updateTrackingRecord(@PathVariable Long id, @RequestBody TrackingEntity updatedTrackingEntity) {
        if (!trackingRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        updatedTrackingEntity.setId(id);
        TrackingEntity updatedRecord = trackingRepository.save(updatedTrackingEntity);
        return new ResponseEntity<>(updatedRecord, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrackingRecord(@PathVariable Long id) {
        if (!trackingRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        trackingRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
