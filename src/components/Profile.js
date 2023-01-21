import { useTheme } from "@emotion/react";
import {
  Button,
  Card,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { isLoggedIn } from "../helpers/authHelper";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share';

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const currentUser = isLoggedIn();
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;
  const shareUrl = window.location.href;

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={user.username} />
          </Box>

          <Typography variant="h5">{user.username}</Typography>

          {props.editing ? (
            <Box>
              <ContentUpdateEditor
                handleSubmit={props.handleSubmit}
                originalContent={user.biography}
                validate={props.validate}
              />
            </Box>
          ) : user.biography ? (
            <Typography textAlign="center" variant="p">
              <b>Bio: </b>
              {user.biography}
            </Typography>
          ) : (
            <Typography variant="p">
              <i>No bio yet</i>
            </Typography>
          )}

          {currentUser && user._id === currentUser.userId && (
            <Box>
              <Button
                startIcon={<AiFillEdit color={iconColor} />}
                onClick={props.handleEditing}
              >
                {props.editing ? <>Cancel</> : <>Edit bio</>}
              </Button>
            </Box>
          )}

          <Stack>
            <Typography color="text.secondary">
            Total Likes Received : <b>{props.profile.posts.likeCount}</b>
            </Typography>
            <Typography color="text.secondary">
            Total Posts Posted : <b>{props.profile.posts.count}</b>
            </Typography>
            <Typography color="text.secondary">
              Share profile to:
            </Typography>
            <HorizontalStack>
              <TwitterShareButton
                url= {shareUrl}
                quote= {'Profile share'}
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
              <FacebookShareButton
                url= {shareUrl}
                quote= {'Profile share'}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
            </HorizontalStack>
          </Stack>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;