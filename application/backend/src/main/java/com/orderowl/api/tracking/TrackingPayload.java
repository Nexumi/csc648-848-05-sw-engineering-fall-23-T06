package com.orderowl.api.tracking;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrackingPayload {

    private String tracking_number;
    private String carrier;
}
