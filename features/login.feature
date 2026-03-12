Feature: Login

  Scenario: User logs in successfully
    Given I open the application
    When I login with username "<USERNAME>" and password "<PASSWORD>"
    Then I should be logged in

  Scenario: User cannot login with incorrect password
    Given I open the application
    When I login with username "<USERNAME>" and password "wrongpassword"
    Then I should see a login error