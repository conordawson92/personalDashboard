const iconData = [
  {
    label: "G Calendar",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/calendar.png",
    url: "https://calendar.google.com",
  },
  {
    label: "G Drive",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/gdrive.png",
    url: "https://drive.google.com",
  },
  {
    label: "G Keep",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/gkeep.png",
    url: "https://keep.google.com/u/0/",
  },
  {
    label: "G Mail",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/gmail.png",
    url: "https://mail.google.com/mail/u/0/?ogbl#inbox",
  },
  {
    label: "Google",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/google.png",
    url: "https://www.google.com/",
  },
  {
    label: "GPT",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/gpt.png",
    url: "https://chat.openai.com/",
  },
  {
    label: "Phind",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/phind.svg",
    url: "https://www.phind.com/",
  },
  {
    label: "Youtube",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/youtube.png",
    url: "https://www.youtube.com/",
  },
  {
    label: "Orange",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/orange.png",
    url: "https://client.orange.lu/selfcare/login?targetUrl=%252Fdashboard",
  },
  {
    label: "Amazon",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/amazon.png",
    url: "https://www.amazon.com/",
  },
  {
    label: "Daws Bum",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/dawsbum.png",
    url: "https://the-dawson-bum-experience.vercel.app/",
  },
  {
    label: "Daws Coin",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/dawscoin.png",
    url: "https://daws-coins.netlify.app/",
  },
  {
    label: "T-Customiser",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/tcustomiser.png",
    url: "https://t-customiser.netlify.app/",
  },
  {
    label: "Encore",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/encore.png",
    url: "https://vintage-encore-f453a24a0605.herokuapp.com/",
  },
  {
    label: "Profile",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/profile.png",
    url: "https://conordawson.net/",
  },
  {
    label: "Old Profile",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/oldprofile.png",
    url: "https://conor-dawson-old.netlify.app/",
  },
  {
    label: "Netlify",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/netlify.png",
    url: "https://app.netlify.com/teams/conordawson92/overview",
  },
  {
    label: "Notion",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/notion.svg",
    url: "https://www.notion.so/Persona-c7825818d7bd4592b33d7e2503543a4e",
  },
  {
    label: "Github",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/github.jpg",
    url: "https://github.com/",
  },
  {
    label: "Vercel",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/vercel.jpg",
    url: "https://vercel.com/conordawson92",
  },
  {
    label: "Render",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/render.png",
    url: "https://dashboard.render.com/",
  },
  {
    label: "Heroku",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/heroku.svg",
    url: "https://id.heroku.com/login",
  },
  {
    label: "Hostinger",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/hostinger.png",
    url: "https://hpanel.hostinger.com/",
  },
  {
    label: "AI Detect",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/aidetect.svg",
    url: "https://writer.com/ai-content-detector/",
  },
  {
    label: "Cactus AI",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/cactusai.jpg",
    url: "https://caktus.ai/",
  },
  {
    label: "Bard AI",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/bardai.png",
    url: "https://bard.google.com/chat",
  },
  {
    label: "AI Detect",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/aidetect2.png",
    url: "https://undetectable.ai/?via=25&gclid=Cj0KCQjwuNemBhCBARIsADp74QTLMqzTdOzuJ3y9FKzOjnkI2dR-Pu7btjIVRaCDH9uEDw3e6iT4_6kaAq4oEALw_wcB",
  },
  {
    label: "Point Blank",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/pointblank.png",
    url: "https://www.pointblankmusicschool.com/courses/london/music-production-courses/",
  },
  {
    label: "Adem",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/adem.png",
    url: "https://jobboard.adem.lu/login",
  },
  {
    label: "Sound Gym",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/soundgym.png",
    url: "https://www.soundgym.co/dashboard/gym",
  },
  {
    label: "Animension",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/animension.png",
    url: "https://animension.to/",
  },
  {
    label: "Loadout",
    imgSrc: process.env.PUBLIC_URL + "/assets/images/loadout.png",
    url: "https://warzoneloadout.games/",
  },
];

// Export a separate array for the dock icons
export const dockIcons = iconData.filter((icon) =>
  ["GPT", "Point Blank", "Profile", "Bard AI"].includes(icon.label)
);

// Export a separate array for the page icons
export const pageIcons = iconData.filter(
  (icon) => !["GPT", "Point Blank", "Profile", "Bard AI"].includes(icon.label)
);

console.log(dockIcons, pageIcons);
