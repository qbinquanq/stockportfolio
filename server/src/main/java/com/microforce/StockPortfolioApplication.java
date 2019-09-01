package com.microforce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@SpringBootApplication(scanBasePackages = {"com.microforce.controller", "com.microforce.service"})
@EnableJpaRepositories("com.microforce.repository")
public class StockPortfolioApplication implements WebMvcConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(StockPortfolioApplication.class, args);
	}
	//@Override public void configureViewResolvers(ViewResolverRegistry registry) {
		  // TODO Auto-generated method stub
		  //WebMvcConfigurer.super.configureViewResolvers(registry);
			//registry.jsp("/WEB-INF/html/", ".html"); 
			  
		  //InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		  //resolver.setPrefix("/WEB-INF/html/"); 
		  //resolver.setSuffix(".html");
		 // registry.viewResolver(resolver); 
    //}
}
