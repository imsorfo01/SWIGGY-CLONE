import React from 'react';
import useOnlineStatus from './utils/useOnlineSatus';

export default function Contact() {
  const onlineStatus = useOnlineStatus();
  return !onlineStatus?<h1 className="offline">Looks Like You are offline !! <br /> <span className="Iconnection">Please Check Your Internet Connection</span></h1>: (
    <div>
      <div className="mainContact">
        <div className="c1">
            <h1>Create SEO-Friendly Content Enriched With Real-Time Data</h1>
            <p>Try ContentShake AI—powered by Semrush data, this tool generates entire articles using real-life competitive insights and up-to-date information.</p>
            <button className='cbtn'>Try It For Free</button>
        </div>
        <div className="c2">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2021/06/semrush-logo-white-60dc77e110d97.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
