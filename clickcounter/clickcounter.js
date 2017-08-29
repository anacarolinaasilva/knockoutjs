/* Computed Observables are functions that are dependent on one or more other observables,
and will automatically update whenever any of these dependencies change.
If your computed observable simply calculates and returns a value based on some observable dependencies,
then it’s better to declare it as a ko.pureComputed instead of a ko.computed.
*/

//Declare ViewModel
var ClikckCounterViewModel = function(){
    this.numberOfClicks = ko.observable(0);

    this.registerClick = function(){
      this.numberOfClicks(this.numberOfClicks() + 1);
    };

    this.resetClicks = function(){
      this.numberOfClicks(0);
    };

    this.hasClickedTooManyTimes = ko.pureComputed(function(){
      return this.numberOfClicks() >= 3;
    }, this).extend({ notify: 'always' });;


};

//Activate ViewModel
ko.applyBindings(new ClikckCounterViewModel());
