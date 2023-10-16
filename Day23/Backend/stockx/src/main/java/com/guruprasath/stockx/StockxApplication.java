package com.guruprasath.stockx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class StockxApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockxApplication.class, args);
	}

}
