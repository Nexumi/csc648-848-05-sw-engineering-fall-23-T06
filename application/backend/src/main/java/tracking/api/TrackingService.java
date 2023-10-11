package tracking.api;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackingService {

    public List<TrackingEntity> getTracking(){
        return List.of(
                new TrackingEntity("abcd1234","Out for Delivery")
        );
    }
}
