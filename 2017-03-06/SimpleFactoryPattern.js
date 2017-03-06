function Bike () {
	this.price = 100;
	console.log('bike');
};

function Car() {
	this.price = 10000;
	console.log('car');
};

function Train() {
	this.price = 1000000;
	console.log('train');
};

function Person(name) {
	this.name = name;
	this.travelTool = [];
}

Person.prototype.sell = function (type) {
	var travelTool = null;
	switch (type) {
		case 'bike':
			travelTool = new Bike(); break;
		case 'car':
			travelTool = new Car(); break;
		case 'train':
			travelTool = new Train(); break;
	}
	this.travelTool.push(travelTool);
}

var a = new Person('dys');

a.sell('bike');

如果需求不断变更，卖飞机，坦克，则需要在Person类中不断修改。

使用简单工厂模式

var travelFactory = function (type) {
	switch (type) {
		case 'bike':
			return new Bike();
		case 'car':
			return new Car();
		case 'train':
			return new Train();
	}	
};

Person.prototype.sell = function (type) {
	this.travelTool.push( travelFactory(type) );
}

而后修改改动工厂，不改变Person类



