@get_title
Feature: Get Website Title

  Scenario: Verify Website Title
    Given I am on the website
    When I retrieve the website title
    Then I should see the website title
