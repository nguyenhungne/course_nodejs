module.exports = {
  multiMongooseToOject: function (array) {
    return array.map((item) => item.toObject());
  },
  mongooseToOject: function (item) {
      return item ? item.toObject() : item
  },
};
