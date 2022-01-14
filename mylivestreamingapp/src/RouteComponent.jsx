import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FormComponent from './Components/FormComponent/ForrmComponent';
import LivestreamDashboardComponent from './Components/LivestreamDashboard/LivestreamDashboardComponent';
import UserProfileComponent from './Components/ProfilePage/UserProfileComponent';
import { VideoPLayerComponent } from './Components/VideoPlayer/VIdeoPlayerComponent';

const RouteComponent = () => {
    return (

     <Switch>
     <Route path={'/videoPlayer'} component={VideoPLayerComponent} />
     <Route path='/Form' component={FormComponent } />
     <Route path='/user-profile' component={UserProfileComponent } />
     <Route path='/homepage' component={LivestreamDashboardComponent}/>
     <Route path='/' component={FormComponent } />
    </Switch>




      );
}
 
export default RouteComponent;
