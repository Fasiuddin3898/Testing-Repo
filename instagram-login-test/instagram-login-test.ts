import { Builder, Capabilities, By, WebDriver, WebElement } from 'selenium-webdriver';

async function instagramLoginTest() {
  // Set up Selenium WebDriver
  const chromeCapabilities = Capabilities.chrome();
  const driver = await new Builder().withCapabilities(chromeCapabilities).build();

  try {
    // Navigate to Instagram login page
    await driver.get('https://www.instagram.com/accounts/login/');

    // Wait for elements to load
    await driver.sleep(2000);

    // Find username and password input fields
    const usernameInput: WebElement = await driver.findElement(By.css('input[name="username"]'));
    const passwordInput: WebElement = await driver.findElement(By.css('input[name="password"]'));

    // Enter username and password (replace with actual credentials)
    await usernameInput.sendKeys('your_username');
    await passwordInput.sendKeys('your_password');

    // Find and click the login button
    const loginButton: WebElement = await driver.findElement(By.css('button[type="submit"]'));
    await loginButton.click();

    // Wait for login process (adjust wait time as needed)
    await driver.sleep(5000);

    // Check if login was successful by verifying elements on the dashboard, e.g., profile picture, etc.
    const profilePicture: WebElement = await driver.findElement(By.css('div[class="XrOey"]'));
    if (profilePicture) {
      console.log('Login successful!');
    } else {
      console.log('Login failed.');
    }

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the browser window
    if (driver) {
      await driver.quit();
    }
  }
}

// Execute the test function
instagramLoginTest();
