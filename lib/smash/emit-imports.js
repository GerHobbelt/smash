var path = require("path"),
    events = require("events"),
    emitLines = require("./emit-lines"),
    expandFile = require("./expand-file"),

		config = require("./config");

console.error(config);

// Returns an emitter for the specified file. The returned emitter emits
// "import" events whenever an import statement is encountered, and "data"
// events whenever normal text is encountered, in addition to the standard
// "error" and "end" events.
module.exports = function(file) {
  var emitter = new events.EventEmitter(),
      directory = path.dirname(file),
      extension = path.extname(file),
      lines = [];

  file = expandFile(file, extension);

  var lineEmitter = emitLines(file)
      .on("line", line)
      .on("end", end)
      .on("error", error);

  function line(line, number) {

	  if(number === 0 && config.appendInfo){
			lines.push(new Buffer("//#Import Source File => " + file + " Start.#\n\n"));
	  }

	  var key;

	  for(key in config.keywords){
		  if(new RegExp("^\\s*" + key).test(line)){
			  flush();
			  var match = config.keywords[key].regex.exec(line);
			  if (match) {
				  console.error(match);
				  emitter.emit("import", path.join(directory, expandFile(match[config.keywords[key].index], extension)));
				  break;
			  } else {
				  lineEmitter.removeAllListeners(); // ignore subsequent lines
				  error(new Error("invalid import: " + file + ":" + number + ": " + line));
			  }
		  }
	  }

	  if(!match){
		  lines.push(line, newline);
	  }
  }

  function flush() {
    if (lines.length){
	    emitter.emit("data", Buffer.concat(lines)), lines = [];
    }
  }

  function end() {
	  if(config.appendInfo){
	    lines.push(new Buffer("//#Import Source File => " + file + " End.#\n\n"));
	  }

    flush();
    emitter.emit("end");
  }

  function error(e) {
    emitter.emit("error", e);
  }

  return emitter;
};

var newline = new Buffer("\n");
