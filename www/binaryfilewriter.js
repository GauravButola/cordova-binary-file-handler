var exec = require('cordova/exec');

var BinaryFileWriter = {
  writeToFile: function(path, base64data, success, error) {
    cordova.exec(success, error, "BinaryFileWriter", "writeToFile", [path, base64data]);
  }
};

module.exports = BinaryFileWriter;
window.writeToFile = BinaryFileWriter.writeToFile;
