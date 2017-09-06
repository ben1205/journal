var sym01 = Symbol();
	var obj01 = Object();
	var obj02 = new Object();
	var Array01 = new Array();
	console.log(typeof sym01 , obj01.constructor === Object, Array01.constructor === Array);
	console.log(Symbol.prototype);

	var obj = {};

	obj[Symbol('a')] = 'a';
	obj[Symbol.for('b')] = 'b';
	obj['c'] = 'c';
	obj.d = 'd';

	for(var i in obj){
		console.log(i);
	}

	console.log(JSON.stringify(obj));

	//isFinite检测对象是否为有限数，是返回true,否则返回false
	console.log(isFinite(1/0), isFinite(-Infinity), isFinite(NaN));

	function svg(){
		var sum = 0;
		for(var i of arguments){
			sum += i;
		}
		return sum/arguments.length;
	}

	console.log(svg.apply(null, [2,3,4,5]));

	//简单实现new 原理方法
	function Person(first, last){
		this.first = first;
		this.last = last;
	}

	function trivialNew(constructor){
		var o = {};
		var args = [];
		for(var i of arguments){
				args[args.length] = i
		}
		args.shift()
		constructor.apply(o, args);
		return o;
	}

	var bill = trivialNew(Person, 'bob', 'tom');//该方法等价于下方

	var bill = new Person('bob', 'tom');

	//call方法
	function greet(){
		var reply = [this.person, 'Is An Awesome', this.role].join(' ');
		console.log(reply);
	}

	var i = {
		person : 'bob is cool',
		role : 'javaScript Developer'
	}

	greet.call(i);

	/*------------------------------------------*/
	//closures关闭
	function makeAdder(a){
		return function(b) {
			return a + b;
		};
	}

	var x = makeAdder(5);
	var y = makeAdder(20);
	console.log(x(6), y(7));

	//Object.is(value, value)比较两个值是否相同(用于区分+0与-0的区别，以及区分NaN不等于自身问题)
	console.log(Object.is('0', 0), "0" == 0, +0 == -0);

	//Object.is原理实现
	if(!Object.is){
		Object.is = function(x, y){
			if(x === y){
				return x !== 0 || 1/ x === 1/ y;
			}else{
				return x !== x && y !== y;
			}
		}
	}
