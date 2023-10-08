@invalid_email_forgot_password
Feature: Invalid Email Forgot Password

  Scenario: Request Password Reset with Invalid Email
    Given I am in the login page
    When I click the "Forgot Password"
    And I enter an invalid email address
    And I click the "Reset Password"
    Then I should see an error message for the invalid email
