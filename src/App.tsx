import {  gql, useQuery, useReactiveVar } from '@apollo/client';
//components
import { LoggedOutRouter } from './routers/logged-out-router';
import { LoggedInRouter } from './routers/logged-in-router copy';
import { reactiveVar } from './apollo-client';

export default function App() {
  const isLoggedIn = useReactiveVar(reactiveVar)

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center text-black text-4xl">
      {
        isLoggedIn? <LoggedInRouter /> : <LoggedOutRouter />
      }
    </div>
  );
}
