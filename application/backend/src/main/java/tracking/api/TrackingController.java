package tracking.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// TrackingController.java
@RestController
@RequestMapping(path = "/api/tracking")
public class TrackingController {
    private final TrackingService trackingService;

    @Autowired
    public TrackingController(TrackingService trackingService) {
        this.trackingService = trackingService;
    }

    @GetMapping
    public List<TrackingEntity> getTracking(){
        return trackingService.getTracking();
    }

    @PostMapping
    public void registerNewTracking(@RequestBody TrackingEntity tracking) {
        trackingService.addNewTracking(tracking);
    }
}
