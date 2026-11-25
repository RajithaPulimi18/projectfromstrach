Feature: Login to the Creatio Application

  Scenario: Verify the login page
    Given Launch the Creatio CRM application
    Then Cookies page should be displayed
    When User clicks on "allow all" button
    Then cookies popup should be closed
    And Login page should be displayed