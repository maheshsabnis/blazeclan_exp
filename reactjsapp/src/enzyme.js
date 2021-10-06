// define a configuration for enzyme object model
// to test react component
// Enzyme object Model
// Emzyme: the base object that provides a platform for executing the test
// shallow: USed to point to a specific or currently loaded parent component in memory
// mount: Used to point to all components (Parent-and-its-children) to test
// configure: the object that load the Adpater object in the current React APplication Context


// Adapter: The object the bridges the React with enzyme

import Enzyme,{shallow,mount, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({
    adapter:new Adapter()
});
// export shallow, mount and Enzyme
// so that they can be used by test cases
// by importing 
export {shallow, mount};
export default Enzyme;
