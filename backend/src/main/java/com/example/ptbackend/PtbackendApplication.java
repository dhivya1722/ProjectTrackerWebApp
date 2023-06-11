package com.example.ptbackend;




import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;



@SpringBootApplication
@EntityScan("com.example")
@ComponentScan("com.example")
@EnableJpaRepositories("com.example")




public class PtbackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(PtbackendApplication.class, args);
		System.out.println("HI");
	
	}

	

	@Override
	public void run(String... args) throws Exception {
		
	
	

}
}
