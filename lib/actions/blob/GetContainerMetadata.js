/** @format */

"use strict";

const storageManager = require("./../../core/blob/StorageManager");

class GetContainerMetadata {
  constructor() {}

  process(request, res) {
    storageManager.getContainerMetadata(request).then((response) => {
      res.set(response.httpProps);
      res.status(200).send();
    });
  }
}

module.exports = new GetContainerMetadata();
