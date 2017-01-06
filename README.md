# handbook-gulp
Try http://www.typescriptlang.org/docs/handbook/gulp.html

## First
```
$ ./node_modules/.bin/gulp tsproject
$ node dist/main.js
Hello from TypeScript
```

- src/main.ts


## Second
```
$ ./node_modules/.bin/gulp tsproject
$ node dist/main2.js
Hello from TypeScript
```

- src/main2.ts
- src/greet.ts


## Third
```
$ ./node_modules/.bin/gulp browserify
```

- src/main3.ts
- src/greet.ts
- src/index.html
- dist/bundle.js
- dist/index.html


## Fourth
```
$ ./node_modules/.bin/gulp watchify
```

- src/main4.ts
- src/greet.ts
- src/index2.html
- dist/bundle2.js
- dist/index2.html


## Fifth
```
$ ./node_modules/.bin/gulp uglify
$ cat dist/bundle3.js
```

- src/main5.ts
- src/greet.ts
- src/index3.html
- dist/bundle3.js
- dist/bundle3.js.map
- dist/index3.html

## Last
```
$ ./node_modules/.bin/gulp babelify
$ cat dist/bundle4.js
```

- src/main6.ts
- src/greet.ts
- src/index4.html
- dist/bundle4.js
- dist/bundle4.js.map
- dist/index4.html

