import React from "react";

function About() {
  return (
    <div className="page">
      <h1>About StreamList</h1>

      <img
        src={`${process.env.PUBLIC_URL}/image/streamlist.jpg`}
        alt="StreamList"
        className="about-image"
      />

      <p>
        Mission Statement
        <p>

        </p>
        EZTechMovie’s mission is to be the highest quality movie streaming entity nationally and to
        acquire licensing for movie content globally, plus create a plethora of user-friendly apps to
        handle customer’s various needs.
        <p>

        </p>
        Values
        EZTechMovie’s values include (a) high creativity, (b) integrity, (c) geniality, (d) reliability,
        and (e) economy.
        Goals and Objectives
        CONTENT AND SERVICES GOAL
        Encourage an intelligent culture through offering reliable content and services accessible
        through multiple platforms.
        <p>

        </p>
        • The company offers noncommercial content and services, with special
        consideration for children’s needs and diverse and multicultural audiences.
        <p>

        </p>
        • The company enables the distribution of genuine content complying with the
        editorial integrity of movie producers that is selected according to customer
        preferences.
        <p>

        </p>
        • The company makes content development available to all across multiple
        platforms.
        NOVELTY GOAL
        Improve the quality of media content and service by supporting ground-breaking,
        innovative projects.
        <p>

        </p>
        • Cultivates new approaches that align with the fast-paced means by which the
        public uses the media
      </p>
    </div>
  );
}

export default About;
