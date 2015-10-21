var assert = require('assert'),
    myFunc = require('../index.js');
describe.only('only path given, absolute path', function () {
    it('should bubble up every folder and merge corresponding config', function (done) {
//    var absPath = '/home/jaroslav/repos/magga-merge/fixtures/page/domain/someFolder/menu/test/test.conf';
        //TODO: Somehow resolving absolute path doesn't work. Fix it
        var absPath = myFunc('/test/somepath/somefile');
        //    absPath = path.resolve('/test/fixtures/page/domain/someFolder/menu/test/test.conf');
        assert.equal(absPath,'/home/chilicoder/repos/bug-with-path/test/somepath/somefile');
    });
});