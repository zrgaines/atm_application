//Begin with the document ready function
$(document).ready(function() {

    //Checking account deposit function
    $('#depositChecking').click(function() {
      var curCheckBalance = $('#checkingBalance').text().replace('$','');
      var convertCheck = parseFloat(curCheckBalance);
      var inputC = parseFloat($('#amountChecking').val());
      var finalCheckDep = convertCheck + inputC;
      $('#checkingBalance').text('$' + finalCheckDep);
    })

    //Checking account withdrawl funtion
    $('#withdrawChecking').click(function() {
      var curCheckBalance = $('#checkingBalance').text().replace('$','');
      var convertCheck = parseFloat(curCheckBalance);
      var inputC = parseFloat($('#amountChecking').val());
      var finalCheckWith = convertCheck - inputC;
      if (inputC > convertCheck) {
        return;
      }
        else {$('#checkingBalance').text('$' + finalCheckWith)};
    })

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function
    $('#depositSavings').click(function() {
      var curSavBalance = $('#savingsBalance').text().replace('$','');
      var convertSav = parseFloat(curSavBalance);
      var inputS = parseFloat($('#amountSavings').val());
      var finalSavDep = convertSav + inputS;
      $('#savingsBalance').text('$' + finalSavDep);
    })

    //Savings account withdrawal function
    $('#withdrawSavings').click(function() {
      var curSavBalance = $('#savingsBalance').text().replace('$','');
      var convertSav = parseFloat(curSavBalance);
      var inputS = parseFloat($('#amountSavings').val());
      var finalSavWith = convertSav - inputS;
      if (convertSav < inputS) {
        return;
      }
        else {$('#savingsBalance').text('$' + finalSavWith)};
    })

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
})
