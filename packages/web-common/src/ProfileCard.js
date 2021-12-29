//
// Copyright 2020 DXOS.org
//

import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

import { SmallTitle } from "./SmallTitle";

const styles = {
  label: {
    display: "inline-block",
    width: 50,
    paddingRight: 8,
    textAlign: "right"
  }
};

/**
 * Renders a card with a title and body
 * @param {string} heading
 * @param {string} [username]
 * @param {string} geo
 * @param {string} variant Defaults to `light`
 * @returns {React.Component} `React.Component`
 */
export const ProfileCard = ({
  name,
  city,
  username,
  geo,
  variant = "dark"
}) => (
  <div style={{ userSelect: "none" }}>
    <div className="d-flex mt-5 mt-md-1">
      {name && (
        <>
          <div style={styles.label}>
            {username && (
              <a
                href={`https://github.com/${username}`}
                className="ml-2"
                rel="noreferrer"
                target="_blank"
              >
                <span style={{ color: "white" }}>
                  <AiOutlineGithub size={24} />
                </span>
                <span className="sr-only">{name}</span>
              </a>
            )}
          </div>

          <SmallTitle as="div" variant={variant}>
            <div>{name}</div>
            <div>{city && `${city}`}</div>
          </SmallTitle>
        </>
      )}
    </div>

    {geo && false && (
      <div>
        <div className="dxos-monospace">
          <span style={styles.label} className="dxos-all-caps">
            LAT
          </span>
          <span>{String(geo.lat.toFixed(6))}</span>
        </div>
        <div className="dxos-monospace">
          <span style={styles.label} className="dxos-all-caps">
            LNG
          </span>
          <span>{String(geo.lng.toFixed(6))}</span>
        </div>
      </div>
    )}
  </div>
);
