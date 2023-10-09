@get_wish_list_item_number
Feature: Get Wish List Item Number

  Scenario: Retrieve the number of items in the wish list
    Given I am on the tv hut home page
    When I have to login
    And I navigate to the wish list page
    Then I should see the number of items in the wish list
