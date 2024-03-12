import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe 
        src="https://https://www.google.com/maps/place/Rungta+College+Of+Engineering+%26+Technology/@21.2151553,81.3049388,12z/data=!4m10!1m2!2m1!1srungta+college!3m6!1s0x3a2922b3f507ac99:0xb276f7d1a3d9c05!8m2!3d21.234836!4d81.34573!15sCg5ydW5ndGEgY29sbGVnZSIDiAEBkgEHY29sbGVnZeABAA!16s%2Fm%2F076vn09?entry=ttu" 
        width="600" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem] rounded-md map" 
        ></iframe>
    </div>
  );
}

export default Map;
