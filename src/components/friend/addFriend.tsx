import { useEffect, useRef, useState } from 'react';

import { useNavigate, Link, useParams } from "react-router-dom";

import { costActions } from '../../redux/modules/reducer/costReducer'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // 아이콘 사용 위해 필요
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons'; // 제거 아이콘

import styled from "styled-components"; // styled in js

import UsersSearch from './usersSearch';
import ReceivingFriendList from './receivingFriendList';


function AddFriend() {

  return(
    <Container>
      <h3>친구 신청 '◡'</h3>
      <UsersSearch />
      <ReceivingFriendList />
    </Container>
  )
}

const Container = styled.main`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background-color: #322c58;
padding: 10px;

& > h3 {
  color: #ffffff;
  margin: 0;
  font-size: 1.3rem;
  padding: 10px;
  text-align: center;
}

@media screen and (max-width: 768px) { 
  padding: 5px;
} 
`

export default AddFriend;