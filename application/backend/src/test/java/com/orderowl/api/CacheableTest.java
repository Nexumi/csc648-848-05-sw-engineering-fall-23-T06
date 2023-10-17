package com.orderowl.api;

import com.orderowl.api.tracking.TrackingEntity;
import com.orderowl.api.tracking.TrackingRepository;
import com.orderowl.api.tracking.TrackingService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class CacheableTest {

    @Autowired
    private TrackingService trackingService;

    @MockBean
    private TrackingRepository trackingRepository;

    @Test
    public void testCacheableMethod() {
        // Mock the behavior of the trackingRepository
        TrackingEntity mockTrackingEntity = new TrackingEntity(1L, "Walmart", "FedEx", null,
                null, null, null, null);
        when(trackingRepository.findById(1L)).thenReturn(Optional.of(mockTrackingEntity));

        // Call the getTrackingEntityById method twice with the same ID
        TrackingEntity result1 = trackingService.getTrackingEntityById(1L);
        TrackingEntity result2 = trackingService.getTrackingEntityById(1L);

        // The second call should be cached and should return the same object
        assertEquals(result1, result2);

        // Verify that the repository's findById method was called only once
        // This ensures that caching was used
        when(trackingRepository.findById(1L)).thenReturn(Optional.of(mockTrackingEntity));
        trackingService.getTrackingEntityById(1L);
    }
}
