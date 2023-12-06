package com.orderowl.api.tracking;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class UserPinRequest {
    private Long userId;
    private String pin;
}
