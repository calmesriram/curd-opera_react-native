import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'

import CurdAdd from '../components/card_add'
import CurdView from '../components/curd_view'
import CurdUpdate from '../components/curd_update'
import CurdDelete from '../components/curd_delete'



const ToptabNav = createMaterialTopTabNavigator({
    Add:CurdAdd,
    View:CurdView,
    Update:CurdUpdate,
    Delete:CurdDelete
  });

export default createAppContainer(ToptabNav);
