import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FormComponent from './Components/FormComponent/ForrmComponent';
import UserProfileComponent from './Components/UserProfileComponent';
import { VideoPLayerComponent } from './Components/VIdeoPlayerComponent';

const RouteComponent = () => {
    return (
<div>
     <Switch>
     <Route path={'/videoPlayer'} component={VideoPLayerComponent} />
     <Route path='/Form' component={FormComponent } />
     <Route path='/user-profile' component={UserProfileComponent } />
     <Route path='/' component={FormComponent } />
    </Switch>

</div>


      );
}
 
export default RouteComponent;
