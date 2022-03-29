import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

export default function JobAnnouncmentSlide() {
  return (
    <div
      style={{ minHeight: "700px", padding: "1em 0em" }}
      class="ui inverted vertical center aligned segment"
    >
      <div class="ui large inverted pointing secondary menu">
        <div class="ui container"></div>
      </div>
      <div class="ui text container">
        <h1
          style={{ fontSize: "4.5em", marginTop: "2em" }}
          class="ui inverted header" id="playfair"
        >
          Geleceğini Bul
        </h1>
        <h2
          style={{ fontSize: "1.7em", marginTop: "1.5em" }}
          class="ui inverted header" id="libre"
        >
          Yüzlerde iş ilanı arasından istediğini bul ve hemen başvur
        </h2>
      </div>
    </div>
  );
}
