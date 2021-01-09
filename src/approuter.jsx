import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import AppContainer from './appcontainer.jsx';
import UserProvider from "./client/context/user";
import JobProvider from "./client/context/jobs";
const AppContainer = lazy(() => import('./appcontainer.jsx'));

import SystemLoading from "./client/components/loading/systemloading";

const AppRouter = (props) => {

  return(
    <UserProvider>
        <JobProvider>
          <Suspense fallback={<SystemLoading />}>
            <Router>
              <Route render={(props)=> <AppContainer {...props}/>} />
            </Router>
          </Suspense>
        </JobProvider>
      </UserProvider>
      
  );
}

export default AppRouter;