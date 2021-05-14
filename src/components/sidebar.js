import {
  Add,
  Apps,
  Bookmark,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import GroupIcon from "@material-ui/icons/Group";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { db, auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("room"));
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>ARNAV WORKSPACE</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions reactions" />
      <SidebarOption Icon={Drafts} title="saved items" />
      <SidebarOption Icon={Bookmark} title="channel browser" />
      <SidebarOption Icon={PeopleAlt} title="people user groups" />
      <SidebarOption Icon={Apps} title="apps" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="channel" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="add channel" />
      {channels?.docs.map((doc) => {
        {
          return (
            <SidebarOption id={doc.id} key={doc.id} title={doc.data().name} />
          );
        }
      })}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: black;
  }
`;

const SidebarContainer = styled.div`
  color: white;
  flex: 0.3;
  background-color: var(--slack-color);
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
