import React from "react";

const SpotifyWidget = () => {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator"
      width="420"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyWidget;
