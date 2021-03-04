const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let val in collection) {
        callback(collection[val])
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      for(let val in collection) {
        newCollection.push(callback(collection[val]))
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      // let result = acc;
      for(let val in collection) {
        let result = callback(val, acc)
      }
      return result;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
