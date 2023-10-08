@forgot_password
Feature: Forgot Password

  Scenario: Request a Password Reset
    Given I am in login page
    When I click the "Forgot Password" link
    And I enter my registered email address
    And I click the "Reset Password" button
    Then I should see a success email sending message
