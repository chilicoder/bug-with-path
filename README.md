# bug-with-path
Its a suplementary repo for showing a bug

# install
```
npm install
```

# Run to see bug
If you run 
```
npm start
```
that will run the code in pure node without error. The function
```javascript
 function (postfix) {
    var result = process.cwd()+postfix;
    return result;
};
```
will return absolute path with adding a further part of path. E.g. `/home/chilicoder/repos/bug-with-path/test/somepath/somefile`

If your run it in tests
```
npm test
```
the test will fall with 
```
AssertionError: 'test/somepath/somefile' == '/home/chilicoder/repos/bug-with-path/t
est/somepath/somefile'
```

That means, that the function returns only relative part of the path. That is a bug, because it still should return `/home/chilicoder/repos/bug-with-path/test/somepath/somefile`
