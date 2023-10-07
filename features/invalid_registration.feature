@invalid_registration
Feature: Invalid User Registration

  Scenario: Registration with Invalid Email
    Given I am on registration page
    When I fill in the registration form with invalid email
    And I submit the registration form by click
    Then I should see an error message
