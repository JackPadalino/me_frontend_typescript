import { MouseEvent, RefObject } from "react";
import { Link } from "react-router-dom";

// MUI imports
import { Box, Typography, Avatar, IconButton, Drawer } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from "@mui/icons-material/Replay10";
import { TrackInt } from "../../ints/ints";
import "./mobileWaveform.css";

interface Drawer2Props {
  waveformTrack: TrackInt;
  isPlaying: boolean;
  handleToggleDrawer: () => void;
  handlePlayPauseClick: (event: MouseEvent) => void;
  handleJumpBack: () => void;
  handleJumpForward: () => void;
  trackModalState: boolean;
  waveformRef: RefObject<HTMLDivElement | null>;
  currentTime: number;
  trackDuration: number;
}

const MobileWaveformDrawer2 = ({
  waveformTrack,
  isPlaying,
  handleToggleDrawer,
  handlePlayPauseClick,
  handleJumpBack,
  handleJumpForward,
  trackModalState,
  waveformRef,
  currentTime,
  trackDuration,
}: Drawer2Props) => {
  return (
    <Drawer
      anchor={"bottom"}
      open={trackModalState}
      onClose={handleToggleDrawer}
      // variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box className="waveformDrawer2Container">
        <IconButton
          onClick={handleToggleDrawer}
          sx={{
            position: "absolute",
            top: 10,
            left: "5%",
            // transform: "translateX(-50%)",
          }}
        >
          <KeyboardArrowDownIcon
            fontSize="large"
            sx={{
              color: "white",
            }}
          />
        </IconButton>
        <img src={waveformTrack.track_photo} className="waveformDrawer2Img" />
        <Box className="waveformDrawer2TrackArtistsDiv">
          {Object.keys(waveformTrack).length > 0 && (
            <>
              <Typography
                variant="h4"
                sx={{ color: "#EAA128", fontFamily: "Quantify" }}
              >
                {waveformTrack.title}
              </Typography>
              {waveformTrack.artists.map((artist) => (
                <Link
                  key={artist.id}
                  to={`/artist/${artist.id}`}
                  className="waveformDrawer2ArtistLink"
                  onClick={handleToggleDrawer}
                >
                  {artist.name}
                </Link>
              ))}
            </>
          )}
        </Box>
        <Box ref={waveformRef} className="waveformRef"></Box>
        <Box className="waveformDrawer2ControlsDiv">
          <IconButton onClick={handleJumpBack}>
            <Replay10Icon
              fontSize="large"
              sx={{
                color: "white",
              }}
            />
          </IconButton>
          <IconButton onClick={handlePlayPauseClick}>
            {isPlaying ? (
              <Avatar
                sx={{
                  bgcolor: "black",
                  border: "2px solid white",
                  width: 50,
                  height: 50,
                }}
              >
                <PauseIcon
                  fontSize="large"
                  sx={{
                    color: "white",
                  }}
                />
              </Avatar>
            ) : (
              <Avatar
                sx={{
                  bgcolor: "white",
                  border: "2px solid white",
                  width: 50,
                  height: 50,
                }}
              >
                <PlayArrowIcon
                  fontSize="large"
                  sx={{
                    color: "black",
                  }}
                />
              </Avatar>
            )}
          </IconButton>
          <IconButton onClick={handleJumpForward}>
            <Forward10Icon
              fontSize="large"
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </Box>
        <Typography sx={{ color: "white", fontSize: "16px" }}>
          {currentTime}/{trackDuration}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default MobileWaveformDrawer2;
