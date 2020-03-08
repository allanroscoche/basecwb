import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <iframe 
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.2874023510444!2d-49.29303208441372!3d-25.462076983773677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce362efc5e613%3A0x811cc074693dee20!2sBase+Curitiba!5e0!3m2!1spt-BR!2sbr!4v1535655590639" 
          width="100%"
          height="350" 
          frameBorder="0" 
          style={{border: 0}} 
          allowFullScreen
        />
      </div>
    );
  }
}

export default Location;
