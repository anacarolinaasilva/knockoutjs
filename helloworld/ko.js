// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
var ViewModel = function(first, last){
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);

    this.fullName = ko.pureComputed(function(){
      //knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName,
      //because these get called when evaluating fullName.
      return this.firstName() + " " + this.lastName();
      
    }, this);
};

// This makes knockout get to work
ko.applyBindings(new ViewModel("Planet", "Earth"));
