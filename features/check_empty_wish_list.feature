@check_empty_wish_list
Feature: Check if Wish List is Empty

  Scenario: Verify wish list is empty
    Given I am on the website home page wish list
    And I should logged in wish list
    And I navigate to the wish list page directly for empty wish list 
    Then I should see an empty wish list
