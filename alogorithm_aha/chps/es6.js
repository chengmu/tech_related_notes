/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/chps/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
	/**
	 * for of 循环
	 * 需要其有一个迭代器方法
	 * @type {Map}
	 */
	var pets = new Map()

	pets.set('dog', 'tars')
	pets.set('rabbit', 'yellow')

	for (let [key, value] of pets) {
	  console.log(key, value)
	}

	let someObject = {a:1, b:2}
	for (let key of Object.keys(someObject)) {
	  console.log(key + ": " + someObject[key]);
	}

	/**
	 * generator
	 * 使用`function*`定义， 内部含有类似于`return`的`yield`, 可以定义多次·
	 */

	function* quips(name) {
	  yield "你好 " + name + "!";
	  yield "希望你能喜欢这篇介绍 ES6 的译文"; if (name.startsWith("c")) {
	  yield "你的名字"+name+" 首字母是X,这很酷!"; }
	  yield "我们下次再见!";
	}

	var iter = quips('chengmu')
	console.log('generator demo', iter)

	function* range(start, stop) {
	  for (var i = start; i < stop; i++)
	    yield i;
	}

	var rangeIter = range(1,5)
	console.log('迭代器测试', rangeIter)


	/**
	 * 不定参数 & 默认参数
	 */
	function myFuc(a=42, b, ...rest) {
	  console.log('不定参数&默认参数')
	  console.log(a, b, rest)
	}
	myFuc(1,2,3,4,5,6)

	/**
	 * 解构赋值
	 */

	const [a, b, c] = [1, 2, 3]
	const [head, ...tail] = [1, 2, 3]
	console.log('数组解构赋值,', a, b, c)
	console.log('数组解构赋值 ...,', head, tail)

	var robotB = { name: "Flexo" };
	var { name: nameB } = robotB;
	console.log('对象解构赋值', nameB);

	({ blowUp } = { blowUp: 10 })
	console.log('变量名和属性名一致，', blowUp)

	function test({
	  a = 'a',
	  b = 'b',
	  c = true
	}) {
	  console.log('试着指定配置的默认值')
	  console.log(a, b, c);
	};

	// test()
	test({a:1})

/***/ }
/******/ ]);