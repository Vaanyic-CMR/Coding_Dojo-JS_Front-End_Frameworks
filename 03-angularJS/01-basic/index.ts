// Convert the following JavaScript code into TypeScript (specify types and rewrite code as needed).
// var myNum = 5;
// var myString = "Hello Universe";
// var anythingOne = "Hey";
// anythingOne = 25;
// var anythingTwo = "Hey";
// anythingTwo = [1, 2, 3, 4];
// var anythingThree = "Hey";
// anythingThree = { x: 1, y: 2 };
// // There are two ways of declaring an array type
// var arrayNumbersOne = [1, 2, 3, 4, 5, 6]; 
// var arrayNumbersTwo = [1, 2, 3, 4, 5, 6];
// var myObj = { x: 5, y: 10 };
// // function constructor
// var MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// var myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// // This function will return nothing.
// function myFunction() {
//     console.log("Hello World");
// }

var myNum: number = 5;
var myString: string = "Hello Universe";

var anythingOne: any = "Hey";
anythingOne = 25;
var anythingTwo: any = "Hey";
anythingTwo = [1, 2, 3, 4];
var anythingThree: any = "Hey";
anythingThree = { x: 1, y: 2 };

// There are two ways of declaring an array type
var arrayNumbersOne: number[] = [1, 2, 3, 4, 5, 6]; 
var arrayNumbersTwo: Array<number> = [1, 2, 3, 4, 5, 6];
var myObj: object = { x: 5, y: 10 };

// function constructor
var MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
var myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

// This function will return nothing.
function myFunction(): void {
    console.log("Hello World");
}
