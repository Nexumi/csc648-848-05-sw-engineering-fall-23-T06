package SearchBarAlgorithm;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tracking.api.TrackingEntity;
import tracking.api.TrackingRepository;

import java.util.List;

@Service
public class SearchBar {
    private final TrackingRepository trackingRepository;

    @Autowired
    public SearchBar(TrackingRepository trackingRepository) {
        this.trackingRepository = trackingRepository;
    }

    @Transactional(readOnly = true)
    public List<TrackingEntity> searchTrackingEntities(String trackingNumber,
                                                       String retailer,
                                                       String address,
                                                       String location) {
        // Implement your custom search logic here.
        return trackingRepository.findTrackingByCriteria(trackingNumber, retailer, address,location);
    }
}
