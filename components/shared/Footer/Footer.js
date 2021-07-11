import { Facebook, YouTube, YoutubeSearchedFor } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
export default function Footer() {
  return (
    <Container>
      <p>Hotel Magic Moon</p>
      <Facebook
        onClick={() =>
          (window.location.href = "https://www.facebook.com/uriel.arriaga.547/")
        }
      />
      <YouTube
        onClick={() =>
          (window.location.href =
            "https://www.youtube.com/watch?v=hAKWtP8BPR8&ab_channel=ChineseZenMusic")
        }
      />
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  margin-top: 80px;
  border: 1px solid red;
  background-color: #ef6c00;
`;
