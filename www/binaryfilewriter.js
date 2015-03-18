var exec = require('cordova/exec');

var BinaryFileWriter = {
  writeToFile: function(success, error, path, base64data) {
    cordova.exec(success, error, "BinaryFileWriter", "writeToFile", [path, base64data]);
  }
};

module.exports = BinaryFileWriter;
window.writeToFile = BinaryFileWriter.writeToFile;
