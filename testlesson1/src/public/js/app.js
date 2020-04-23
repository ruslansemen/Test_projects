import a from './components/comp-a.js';
import b from './components/comp-b.js';


let app = () => {
    console.log(a + b);
}
/* export default app; */


export default () => {
    console.log("Hello Webpack!");
    console.log(a + b);
}; 
