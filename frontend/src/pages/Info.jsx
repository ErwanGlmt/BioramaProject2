/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/aria-role */
import React from "react";
// eslint-disable-next-line import/extensions
import Presentation from "/src/components/Presentation";
// eslint-disable-next-line import/extensions
import Team from "/src/components/Team";

function Info() {
  return (
    <div>
      <Presentation />
      <div className="team-container">
        <Team
          name="Séverine"
          role="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964433928817639424/me.jpg"
        />
        <Team
          name="Lamarre"
          role="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964435188337737748/IMG-20200606-WA00002.jpg"
        />
        <Team
          name="Erwan"
          role="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964439981747744818/photo_linkedin.jpg"
        />
        <Team
          name="Kévin"
          role="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964440867043676170/4f7cr7ZE32SLnhG3IPKWDu3OTvcvkVVA.jpg"
        />
      </div>
    </div>
  );
}

export default Info;
