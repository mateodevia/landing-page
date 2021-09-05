import SocialMediaIcons from "./SocialMediaIcons/SocialMediaIcons";

const socialMedia = [
  {
    link: "https://www.linkedin.com/in/mateodevia",
    icon: "/SocialMedia/linkedin.svg",
    altText: "LinkedIn logo",
  },
  {
    link: "https://github.com/mateodevia",
    icon: "/SocialMedia/github.svg",
    altText: "GitHub logo",
  },
  {
    link: "mailto:mateodevia2@hotmail.com",
    icon: "/SocialMedia/email.svg",
    altText: "Email logo",
  },
  {
    link: "https://wa.me/573132803320",
    icon: "/SocialMedia/whatsapp.svg",
    altText: "Email icon",
  },
  {
    link: "https://www.instagram.com/mateodevia/",
    icon: "/SocialMedia/instagram.svg",
    altText: "Instagram logo",
  },
  {
    link: "https://twitter.com/MateoDevia5",
    icon: "/SocialMedia/twitter.svg",
    altText: "Twitter logo",
  },
  {
    link: "https://www.facebook.com/mateo.devia",
    icon: "/SocialMedia/facebook.svg",
    altText: "Facebook logo",
  },
];

const FooterSection = () => <SocialMediaIcons icons={socialMedia} />;
export default FooterSection;
