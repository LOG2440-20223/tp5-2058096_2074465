import React from "react";
import { SERVER_URL } from "../assets/js/consts";
import { NavLink } from "react-router-dom";

export default function Playlist({ playlist }) {
  return (
    <NavLink className="playlist-item flex-column" to={`/playlist/${playlist.id}`}>
      <div className="playlist-preview">
        {/* Ajouter l'image de la playlist */}
        <img alt="" src={`${SERVER_URL}/${playlist.thumbnail}`} />
        <i className="fa fa-2x fa-play-circle hidden playlist-play-icon"></i>
      </div>
      {/* Ajouter les informations de la playlist */}
      <p>{playlist.name}</p>
      <p>{playlist.descrition}</p>
    </NavLink>
  );
}
