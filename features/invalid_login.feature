@invalid_login
Feature: Invalid User Login

  Scenario: Login with Invalid Credentials
    Given I am on login page
    When I enter invalid username and password
    And I click the login button
    Then I should see an login error message
