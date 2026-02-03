import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Quick Links",
      links: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Projects", path: "/projects" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      heading: "Support page",
      links: [
        { label: "Style guide", path: "#" },
        { label: "Change log", path: "#" },
        { label: "Pass Protect", path: "#" },
        { label: "Licence", path: "#" },
        { label: "404", path: "#" },
      ],
    },
    {
      heading: "Addres",
      links: [
        { label: "info@aurelo.com", path: "#" },
        { label: "+1(212)555-0199", path: "#" },
        { label: "245 Madison Avenue, New York, NY 10016", path: "#" },
      ],
    },
  ];

  return (
    <section id="offers" className="section">
      <div className="container">
        <div className="row g-4 g-sm-5">
          <div className="col-sm-6 col-md-3">
            <div className="footerFirstBox footerLinksBox">
              <h3>Aurelo</h3>
              <p>Aurelo Interiors — crafting timeless, personalized spaces across the USA</p>
              <div className="socialLinkBox">
                <a href="/#" className="socialLink"><i class="ri-instagram-line"></i></a>
                <a href="/#" className="socialLink"><i class="ri-youtube-line"></i></a>
                <a href="/#" className="socialLink"><i class="ri-twitter-x-line"></i></a>
              </div>
            </div>
          </div>
          {footerLinks.map((link) => (
            <div className="col-sm-6 col-md-3">
              <div className=" footerLinksBox">
                <h4>{link.heading}</h4>
                {link.links.map((text)=> (
                  <a href={text.path}>{text.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
