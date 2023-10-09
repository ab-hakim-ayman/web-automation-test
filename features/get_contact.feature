@get_contact
Feature: Get Contact Number

  Scenario: Retrieve contact number from the home page
    Given I am on the website for contact
    Then I should see the contact number
