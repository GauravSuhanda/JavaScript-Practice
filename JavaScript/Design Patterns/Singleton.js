/**
 * 
 A Singleton only allows for a single instantiation, but many instances of the same object. The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.
 */

var printer = () => {
  var printerInstance;
  function create() {
    function print() {
      // printer mechanics
    }

    function startPrinter() {
      // Validation of checking a paper, power and toner
    }

    return {
      // public + private states and behaviour
      print: print,
      startPrinter: startPrinter,
    };
  }

  return {
    getInstance: function () {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    },
  };

  function singleton() {
    if (!printerInstance) {
      printerInstance = intialize();
    }
  }
};

var officePrinter = printer.getInstance();
