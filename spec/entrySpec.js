describe('Entry', function() {

  var Entry = require('../lib/entry');
  var entry;

  beforeEach(function() {
    entry = new Entry(10, '02-02-2017');
  });

  it('has an amount', function() {
    expect(entry.amount).toEqual(10);
  });
});
