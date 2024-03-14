import React from "react";

function Map() {
  return (
    <div className="m-4 md:m-8 xl:mx-20">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.272507514746!2d81.34573!3d21.234836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2922b3f507ac99%3A0xb276f7d1a3d9c05!2sRungta%20College%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1647311242600!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[30rem] rounded-md map" 
        title="Rungta College of Engineering & Technology Location"
      ></iframe>
    </div>
  );
}

export default Map;

