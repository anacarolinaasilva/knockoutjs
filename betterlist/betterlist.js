//Create ViewModel
// Function Expression
var BetterListModel = function(){
  this.itemToAdd = ko.observable("");

  // Initial items vs Selected Items
  this.allItems = ko.observableArray(["Fries", "Eggs Benedict", "Ham", "Cheese"]);
  this.selectedItems = ko.observableArray(["Ham", "Eggs Benedict"]);

  this.addItem = function(){
       if ((this.itemToAdd() != "") && //verify if itemToAdd is not blank
          (this.allItems.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
       this.allItems.push(this.itemToAdd());
       this.itemToAdd(""); // Clear the text box
  };

  this.removeSelected = function () {
      this.allItems.removeAll(this.selectedItems());
      this.selectedItems([]); // Clear selection
  };

  this.sortItems = function() {
      this.allItems.sort();
  };

};
//Activate ViewModel
ko.applyBindings(new BetterListModel());
