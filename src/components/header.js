import { Avatar } from "@material-ui/core";
import {
  AccessTimeOutlined,
  HelpOutline,
  SearchOutlined,
} from "@material-ui/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            alt={user?.displayName}
            onClick={() => auth.signOut()}
            src={user?.photoURL}
          />
          <AccessTimeOutlined />
        </HeaderLeft>

        <HeaderSearch>
          <SearchOutlined />
          <input placeholder="search  the chanel" />
        </HeaderSearch>

        <HeaderRight>
          <HelpOutline />
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  display: flex;
  padding: 0 50px;
  border: 1px gray solid;
  background-color: #421f44;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
  align-items: center;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
