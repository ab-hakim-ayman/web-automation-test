@logout
Feature: User Logout

  Scenario: Successful user logout
    Given the user is logged in
    When I am on the logout page
    And the user clicks on the logout button
    Then the user should be logged out