function Stack() {
	var items = [];
	this.isEmpty = function() {
		return items.length === 0;
	};

	this.push = function(element) {
		items.push(element);
	}

	this.size = function(){
		return items.length;
	}

	this.pop = function() {
		return items.pop();
	}

	this.peek = function() {
		return items[items.length-1];
	}
}

function Graph() {
	var vertices= [];
	var adjList = new Dictionary();
	this.addVertex = function(v){
		vertices.push(v);
		adjList.set(v, []);
	}

	this.addEdge = function(v, w){
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	}
}

var quick = function(array, left, right){
	var index;

	if(array.length > 1){
		index = partition(array, left, right);
		if(left < index -1){
			quick(array, left, index);
		}
		if(index < right) {
			quick(array, index, right);
		}
	}
}

var swapQuickSort = function(array, index1, index2){
	var aux = array[index1];
	array[index1] = array[index2];
	array[index2] = aux;
}

