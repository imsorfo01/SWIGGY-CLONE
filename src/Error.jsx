// import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error() {
    const error = useRouteError();
    // console.log(error);
  return (
    <div>
      <div className="error">
        {/* <h3>{error.status} <span>{error.statusText}</span></h3>
        <h1 className="status"> <span>{error.error.message}</span></h1> */}
        <h1>An Error Occured</h1>
      </div>
    </div>
  );
}
