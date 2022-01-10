import RouteComponent from './RouteComponent';
import './App.css';
import { useStore } from './Stores/store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';


//<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

function App() {
  const { commonStore, userStore } = useStore();

  useEffect(() => {
    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.appLoaded);
    } else {
      commonStore.setAppLoaded();
    }
  })
  //if(!commonStore.appLoaded) return <LoadingComponent content='Loading ap... />'

  return (

    <RouteComponent />

  );
}

export default observer(App);

