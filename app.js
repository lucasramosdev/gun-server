var Gun = require('gun');
require('axe');
var express = require('express');
console.log("If module not found, install express globally `npm i express -g`!");
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.VCAP_APP_PORT || process.env.PORT || process.argv[2] || 8765;

async function startGun() {
  try {

    var app = express();
    app.use(Gun.serve);
    app.use(express.static(__dirname));

    var server = app.listen(port);
    Gun({ file: false, web: server, });

  } catch (error) {
    console.error("❌ Erro ao subir o servidor:", error);
  }
}

startGun();