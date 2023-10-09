@modify_wish_list
Feature: Modify Wish List

  Scenario: Update Wish List
    Given I am on the tvhut for wish list
    When the user have to login for wish list
    When I navigate to the wish list page directly
    And I update the wish list
    Then I should see the updated wish list
