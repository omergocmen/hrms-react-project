import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

export default function JobAnnouncmentSlide() {
  return (
    <div
      style={{ minHeight: "700px", padding: "1em 0em" }}
      className="ui inverted vertical center aligned segment"
    >
      <div className="ui large inverted pointing secondary menu">
        <div className="ui container"></div>
      </div>
      <div className="ui text container">
        <h1
          style={{ fontSize: "4.5em", marginTop: "2em" }}
          className="ui inverted header" id="playfair"
        >
          Geleceğini Burada Bul
        </h1>
        <h2
          style={{ fontSize: "1.7em", marginTop: "1.5em" }}
          className="ui inverted header" id="libre"
        >
          Yüzlerde iş ilanı arasından aradığını bul ve hemen başvur
        </h2>
      </div>
    </div>
  );
}
