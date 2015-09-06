// *
//  * @name  linkedListGenerator
//  * @description  Main Module
//  * @return {Object} an object exposing methods to be used to manipulate a linked list
 
// var eyes = require('eyes')


function linkedListGenerator(){
	var head = null;
	var tail = null;
	var length = 0;

	var node = {
		value : null,
		next : null
	};

	function newNode(foovalue) {
	 	node = {value : foovalue,
	 			next : null };
		return node;
	 }

	function getHead(){
		return head;
	}

	function getTail (){
		return tail;
	}

	function add(foovalue) {
		var node = newNode(foovalue);
		if (length === 0) {
			head = node;
			tail = node;
			length++;
			return node;
		} else {
			tail.next = node;
			tail = node;
			length++; 
			return tail;
			}
		}

	function get(num) {
		var current = head;
		if (num >= 0 && num < length){
			for(i = 0; i < num; i++) {
			current = current.next;}
			return current;
		} else {
			return false;
		}
	}



	function remove (num) {
		debugger;
		var prev = get(num - 1);
		var after = get(num + 1);
		var current = get(num);
	 
	 	if (num < 0 || num > length){
	 		return false;
	 	} else if (num === 0) {
	 		head = after; 
	 	} else if (num >= 1 && num < (length - 1) ) {
	 		prev.next = after;
	 	} else {
	 		tail = prev;
	 	}
	 		length--;

	 		return false;
	
	 }
	



	function insert (value, num) {
		var current = get(num);
		var special = newNode(value);
		
		if (length < num) {
			return false;
		} else if(num >=1 && num < length){
			special.next =  current;
			get(num - 1).next = special;
			length++;
		} else if (num === 0 ) {
			special.next = head;
			head = special;
			length++;
		} else {
			return false;
		}

	}

return {
	getHead : getHead,
	getTail : getTail,
	add : add,
	get : get,
	remove : remove,
	insert : insert


};

}





// var stuff = linkedListGenerator();
// stuff.add(0);
// stuff.add(1);
// stuff.add(2);
// stuff.add(3);
// stuff.add(3);
// stuff.add(4);
// stuff.add(5);

// eyes.inspect(stuff.getHead());
// eyes.inspect(stuff.getTail());
// eyes.inspect(stuff.insert(6,7));
// eyes.inspect(stuff.getHead());
// eyes.inspect(stuff.getTail());
// eyes.inspect(stuff.insert(6,6));
// eyes.inspect(stuff.getHead());
// eyes.inspect(stuff.getTail());
// eyes.inspect(stuff.insert(7,1));
// eyes.inspect(stuff.getHead());
// eyes.inspect(stuff.getTail());











