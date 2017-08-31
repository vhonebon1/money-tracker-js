describe('Ledger', function() {

  var Ledger = require('../lib/ledger');
  var ledger;
  var entry = {};

  beforeEach(function() {
    ledger = new Ledger()
  });

  it('has starts with an empty array', function() {
    expect(ledger.list).toEqual([]);
  });

  describe('#addEntry', function() {
    it('adds an entry to the list', function() {
      ledger.addEntry(entry);
      expect(ledger.list.length).toEqual(1);
    });
  });
});
