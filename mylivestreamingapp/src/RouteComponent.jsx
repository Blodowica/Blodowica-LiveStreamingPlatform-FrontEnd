import React from 'react';
import {Routes, Route} from 'react-router-dom'
import FormComponent from './Components/FormComponent/ForrmComponent';
import UserProfileComponent from './Components/UserProfileComponent';
import { VideoPLayerComponent } from './Components/VIdeoPlayerComponent';

const RouteComponent = () => {
    return (
<div>
     <Routes>
     <Route path='/videoPlayer' element={<VideoPLayerComponent />} />
     <Route path='/Form' element={<FormComponent />} />
     <Route path='/user-profile' element={<UserProfileComponent />} />
    </Routes>

</div>


      );
}
 
export default RouteComponent;
