//
// Copyright 2020 DXOS.org
//

import React from "react";

import Headroom from "react-headroom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

export const DXOSNavbar = ({
  logo,
  navigationLinks,
  socialLinks,
  className = "",
  renderContentUnder = true
}) => {
  const baseStyles = renderContentUnder
    ? `headroom-wrapper-over-content ${className}`
    : className;
  return (
    <Headroom className={baseStyles}>
      <Navbar
        variant="light"
        collapseOnSelect
        expand={"md"}
        role="navigation"
        as="nav"
        className="py-lg-3"
      >
        <Container>
          <Navbar.Brand style={{ maxWidth: "120px" }} href="/">
            {logo}
            <span className="sr-only">DXOS Logo</span>
          </Navbar.Brand>
          <NavBarLinksContainer
            navigationLinks={navigationLinks}
            socialLinks={socialLinks}
          />
        </Container>
      </Navbar>
    </Headroom>
  );
};

const NavBarLinksContainer = ({ navigationLinks, socialLinks }) => {
  return (
    <>
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" as="ul">
          <NavigationLinks links={navigationLinks} />
          <SocialLinks links={socialLinks} />
        </Nav>
      </Navbar.Collapse>
    </>
  );
};

const NavigationLinks = ({ links }) => {
  if (!links) {
    return null;
  }

  return links.map(anchor => (
    <CustomNavLink
      href={anchor.link}
      className="text-uppercase"
      key={`nav-${anchor.name}`}
    >
      {anchor.name}
    </CustomNavLink>
  ));
};

const SocialLinks = ({ links }) => {
  if (!links) {
    return null;
  }

  const components = {
    twitter: AiOutlineTwitter,
    github: AiOutlineGithub
  };

  return links.map(anchor => {
    const socialName = anchor.name;
    const IconComponent = components[socialName.toLowerCase()];

    if (!IconComponent) {
      console.warn(`Social Icon not imported for name: "${socialName}"`);
    }

    return (
      // Add a wee bit of negative margin top as the icons don't look
      // optically vertically-centered when they're rendered by default.
      // Also, when the menu is expanded on mobile, it looks a bit odd to just have
      // social icons, and their tap-targets are too small. So we append the name
      // of the social network beside the icon.
      <CustomNavLink
        href={anchor.link}
        title={`View us on ${socialName}`}
        style={{ marginTop: "-2px" }}
        key={`nav-${anchor.name}`}
        linkTarget="_blank"
      >
        {IconComponent ? <IconComponent /> : socialName}
        {IconComponent ? (
          <span className="hide-when-collapsed text-uppercase">
            {" "}
            {socialName}
          </span>
        ) : null}
      </CustomNavLink>
    );
  });
};

const CustomNavLink = ({
  href,
  children,
  title,
  linkTarget = "_self",
  ...props
}) => (
  <Nav.Item as="li" {...props}>
    <Nav.Link
      href={href}
      title={title}
      className="text-black-80 dxos-fw-500 dxos-f1 dxos-tracked-loose dxos-nav-link"
      target={linkTarget}
      onClick={e => {
        // Logic to detect if we have an anchor, if so animate it smoothly
        const hasAIdReference = href.includes("#") && href.indexOf("#") === 0;
        if (hasAIdReference) {
          e.preventDefault();
          const target = document.getElementById(href.replace("#", ""));
          target.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", href);
        }
      }}
    >
      {children}
    </Nav.Link>
  </Nav.Item>
);
