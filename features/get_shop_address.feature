@get_shop_address
Feature: Get Shop Address

  Scenario: Retrieve shop address from the home page
    Given I am on the website for address
    Then I should see the shop address
