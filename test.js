var test = require('tape'),
  testCommon = require('abstract-leveldown/testCommon'),
  rocksDOWN = require('./leveldown'),
  testBuffer = require('fs').readFileSync(__filename),
  db;

/*** compatibility with basic LevelDOWN API ***/

require('abstract-leveldown/abstract/leveldown-test').args(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/open-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/del-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/get-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/put-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/put-get-del-test').all(
  rocksDOWN,
  test,
  testCommon,
  testBuffer,
);

require('abstract-leveldown/abstract/batch-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/chained-batch-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/close-test').close(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/iterator-test').all(
  rocksDOWN,
  test,
  testCommon,
);

require('abstract-leveldown/abstract/ranges-test').all(
  rocksDOWN,
  test,
  testCommon,
);
