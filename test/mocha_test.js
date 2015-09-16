require('../ambit.js')("simple check internet", function() {
    driver.get("https://www.google.com/"); 
    driver.findElement(By.id("lst-ib")).clear(); 
    driver.findElement(By.id("lst-ib")).sendKeys("hello"); 
    driver.findElement(By.id("lst-ib")).sendKeys("\n");
});