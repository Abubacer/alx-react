import { configure } from 'enzyme';
import 'text-encoding';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
