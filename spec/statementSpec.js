describe('Statement', function() {

  var Statement = require('../lib/statement');
  var statement;
  var ledger = 'mock ledger';

  beforeEach(function() {
    statement = new Statement(ledger);
  });

  it('takes a ledger', function() {
    expect(statement.ledger).toEqual('mock ledger');
  });


});
