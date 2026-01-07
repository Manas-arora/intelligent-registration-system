import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RegistrationAutomationTest {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        driver.get("registration_form_url");

        System.out.println(driver.getTitle());
        System.out.println(driver.getCurrentUrl());

        // Negative Scenario
        driver.findElement(By.id("fname")).sendKeys("Test");
        driver.findElement(By.id("email")).sendKeys("test@gmail.com");
        driver.findElement(By.id("submitBtn")).click();

        // Positive Scenario
        driver.findElement(By.id("lname")).sendKeys("User");
        driver.findElement(By.id("phone")).sendKeys("9876543210");
        driver.findElement(By.id("password")).sendKeys("Test@123");
        driver.findElement(By.id("confirmPassword")).sendKeys("Test@123");
        driver.findElement(By.id("terms")).click();
        driver.findElement(By.id("submitBtn")).click();

        driver.quit();
    }
}
