// React
import React, { useState, useEffect } from "react";

// Images
import emojiOne from "../assets/images/in-love.svg";

const Generator = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [bgOpacity, setBgOpacity] = useState("0.1");
  const [blur, setBlur] = useState("30");
  const [showBorder, setShowBorder] = useState(true);
  const [css, setCss] = useState("");

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
          result[3],
          16
        )}`
      : null;
  }

  useEffect(() => {
    setCss(
      `background-color: rgba(${hexToRgb(
        bgColor
      )}, ${bgOpacity}); backdrop-filter: blur(${blur}px); ${
        showBorder ? `border: 1px solid rgba(255, 255, 255, 0.2);` : ""
      }`
    );
  }, [bgColor, bgOpacity, blur, showBorder]);

  return (
    <>
      <div className="bgBlock">
        <img src={emojiOne} className="emojiOne" alt="emoji" />
        <div
          className="glassBlock"
          style={{
            backgroundColor: `rgba(${hexToRgb(bgColor)}, ${bgOpacity})`,
            backdropFilter: `blur(${blur}px)`,
            border: showBorder ? `1px solid rgba(255, 255, 255, 0.2)` : "none",
          }}
        />
      </div>
      <div className="settings">
        <div className="containerMainRow">
          <p className="label">Color</p>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
          <p className="label borderLabel">Border?</p>
          <input
            type="checkbox"
            defaultChecked={showBorder}
            onChange={() => {
              setShowBorder(!showBorder);
            }}
          />
        </div>
        <div className="containerMainRow">
          <p className="label">Opacity</p>
          <input
            type="range"
            value={bgOpacity}
            onChange={(e) => {
              setBgOpacity(e.target.value);
            }}
            min="0"
            max="1"
            step="0.1"
          />
        </div>
        <div className="containerMainRow">
          <p className="label">Blur</p>
          <input
            type="range"
            value={blur}
            onChange={(e) => {
              setBlur(e.target.value);
            }}
            min="0"
            max="50"
            step="1"
          />
        </div>
        <p className="label">CSS</p>
        <div className="cssDisplay">
          {css.split(/(?<=;)/).map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(css);
          }}
        >
          COPY
        </button>
      </div>
    </>
  );
};

export default Generator;
