Feature: Signin to the Creatio Application

  Background: 
    Given Launch the Creatio CRM application
    Then Cookies page should be displayed
    When User clicks on "allow all" button
    Then cookies popup should be closed
    And Login page should be displayed
    @signin
    Scenario Outline:Signin to the Creatio Application
    When user clicks on the signup button
    Then validate the verification
    And  enter the username "<username>" and password "<password>"
    And fill all the mandatory fields 
    Examples:
    |username                                 | password        |
    | rajithapulimiplaywrightcourse@gmail.com | Changecompany@26|