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
	 * 解密
	 * 把第一个数字删掉 把第二个放到尾部
	 * 重复进行，直到剩下最后一个数
	 */

	let Queue = class {
	  constructor(props) {
	    this.items = props.initValue
	  }
	  enqueue (el) {
	    return this.items.push(el)
	  }
	  dequeue () {
	    return this.items.shift()
	  }
	  front () {
	    return this.items[0]
	  }
	}


	class Decrep extends Queue {
	  constructor(props) {
	    super(props);
	  }
	  result () {
	    let resultQue = []
	    length = this.items.length
	    for (let [index, item] of this.items.entries()) {
	      // console.log(index, item)
	      if (index >= length) break;
	      if (index % 2 === 1) {
	        resultQue.push(this.dequeue())
	      } else {
	        this.enqueue(this.dequeue)
	      }
	    }
	    return resultQue
	  }
	}

	window.q = new Decrep({initValue : [0,6,3,1,7,5,8,9,2,4]})
	// q.result()


	let nums = [0,6,3,1,7,5,8,9,2,4]
	let head = 1, tail = 10, result = []
	while (head < tail) {
	  console.log(nums[head], '出列')
	  head++
	  nums[tail] = nums[head]
	  tail++
	  head++
	}
	console.log(nums, head, tail)

/***/ }
/******/ ]);