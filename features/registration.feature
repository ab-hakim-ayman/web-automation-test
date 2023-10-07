@registration
Feature: User Registration

  Scenario: Successful User Registration
    Given I am on the registration page
    When I fill in the registration form with valid information
    And I submit the registration form
    Then I should see a success message