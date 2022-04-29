import React from "react";
import Presentation from "../components/Presentation";
import Team from "../components/Team";

function Info() {
  return (
    <div>
      <Presentation />
      <div className="team-container">
        <Team
          name="Séverine"
          fonction="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964433928817639424/me.jpg"
        />
        <Team
          name="Lamarre"
          fonction="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964435188337737748/IMG-20200606-WA00002.jpg"
        />
        <Team
          name="Erwan"
          fonction="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964439981747744818/photo_linkedin.jpg"
        />
        <Team
          name="Kévin"
          fonction="Developpeur"
          image="https://cdn.discordapp.com/attachments/959460659416924204/964440867043676170/4f7cr7ZE32SLnhG3IPKWDu3OTvcvkVVA.jpg"
        />
      </div>
    </div>
  );
}

export default Info;
