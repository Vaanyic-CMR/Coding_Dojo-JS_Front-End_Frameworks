let today = new Date();
let time = ""

const splitter = React.createElement('hr', null );
const myTime = React.createElement('h1', null, `The time is: ${time}`);

time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
ReactDOM.render(myTime, document.getElementById('app'));