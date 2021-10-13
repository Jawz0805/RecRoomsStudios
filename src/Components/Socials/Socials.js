import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutubeSquare,
  faTwitterSquare,
  faSpotify,
  faApple,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./_Socials.scss";

const Socials = ({ socials, color }) => {
  let facebook = "#3b5998";
  let instagram = "hot-pink";
  let twitter = "#00acee";
  let eMail = "black";
  let website = "black";
  let youtube = "#FF0000";
  let spotify = "#1DB954";
  let itunes = "black";
  let twitch = "#6441a5";

  return (
    <div className="socials-list-container">
      {socials ? (
        <ul className="socials-list ">
          {socials.facebook && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: facebook }}
            >
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                name="facebook link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  size="2x"
                  style={{ color: color ? color : facebook }}
                />{" "}
                <span>Facebook</span>
              </a>
            </motion.li>
          )}
          {socials.twitch && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: color ? color : twitch }}
            >
              <a
                href={socials.twitch}
                target="_blank"
                rel="noopener noreferrer"
                name="twitch link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faTwitch}
                  size="2x"
                  style={{ color: color ? color : twitch }}
                />
              </a>
            </motion.li>
          )}
          {socials.itunes && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: itunes }}
            >
              <a
                href={socials.itunes}
                target="_blank"
                rel="noopener noreferrer"
                name="itunes link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faApple}
                  size="2x"
                  style={{ color: color ? color : itunes }}
                />
                <span>iTunes</span>
              </a>
            </motion.li>
          )}
          {socials.instagram && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: instagram }}
            >
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                name="instagram link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  style={{ display: "inline" }}
                  className={color ? "" : "insta"}
                />
                <span>Instagram</span>
              </a>
            </motion.li>
          )}
          {socials.spotify && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: spotify }}
            >
              <a
                href={socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                name="spotify link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faSpotify}
                  size="2x"
                  style={{ color: color ? color : spotify }}
                />
                <span>Spotify</span>
              </a>
            </motion.li>
          )}
          {socials.youtube && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: youtube }}
            >
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                name="youtube link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faYoutubeSquare}
                  size="2x"
                  style={{ color: color ? color : youtube }}
                />
                <span>youTube</span>
              </a>
            </motion.li>
          )}
          {socials.twitter && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: twitter }}
            >
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                name="twitter link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  size="2x"
                  style={{ color: color ? color : twitter }}
                />
                <span>Twitter</span>
              </a>
            </motion.li>
          )}
          {socials.website && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: website }}
            >
              <a
                href={socials.website}
                target="_blank"
                rel="noopener noreferrer"
                name="website link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="2x"
                  style={{ color: color ? color : website }}
                />
                <span>website</span>
              </a>
            </motion.li>
          )}
          {socials.eMail && (
            <motion.li
              className="socials-item"
              whileHover={{ scale: 1.1 }}
              style={{ color: eMail }}
            >
              <a
                href={`mailto:${socials.eMail}`}
                target="_blank"
                rel="noopener noreferrer"
                name="email link"
                className="socials-link-item-container"
              >
                <FontAwesomeIcon
                  icon={faEnvelopeSquare}
                  size="2x"
                  style={{ color: color ? color : eMail }}
                />
                <span>email</span>
              </a>
            </motion.li>
          )}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Socials;
