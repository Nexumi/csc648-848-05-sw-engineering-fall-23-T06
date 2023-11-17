package com.orderowl.api;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

//    @Bean
//    public CorsFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//
//        // Allow requests from this origin
//        config.addAllowedOrigin("https://alpha.orderowl.jpkit.us");
//        config.addAllowedOrigin("https://orderowl.jpkit.us");
//
//        // Allow all HTTP methods (GET, POST, etc.)
//        config.addAllowedMethod("*");
//
//        // Allow all headers
//        config.addAllowedHeader("*");
//
//        // Expose headers that the client can read
//        config.addExposedHeader("header1");
//        config.addExposedHeader("header2");
//
//        source.registerCorsConfiguration("/**", config);
//        return new CorsFilter(source);
//    }
}
