var assert = require('assert'),
    myFunc = require('../index.js');

describe('abs path bug', function () {
    it('should check absolute path', function () {
        var absPath = myFunc('/test/somepath/somefile');
        assert.equal(absPath,'/home/chilicoder/repos/bug-with-path/test/somepath/somefile');
    });
});

describe('abs path normally resolves', function () {
    it('should check absolute path', function () {
        var absPath = myFunc('');
        assert.equal(absPath,process.cwd());
    });
});