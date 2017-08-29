function Ledger() {
  this.list = [];
}

Ledger.prototype.addEntry = function(entry) {
  this.list.push(entry);
};

module.exports = Ledger;
