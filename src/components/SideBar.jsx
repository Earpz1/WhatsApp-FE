import { Container } from "react-bootstrap";
import { GiCircle } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import Contact from "./Contact";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserChats, fetchUserDetails } from "../redux/actions";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const logout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  useEffect(() => {
    dispatch(fetchUserDetails());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchUserChats());
  }, [dispatch]);
  const myProfile = useSelector((state) => state.userInfo);
  const myChats = useSelector((state) => state.chats);
  useEffect(() => {
    console.log(myProfile);
    console.log(myChats);
  }, []);

  return (
    <>
      <Container className="w-50 container">
        <div className="heading d-flex justify-content-between align-items-center">
          <img style={{ maxWidth: "5rem" }} src={myProfile?.avatar} />
          <p>{myProfile?.userName}</p>
          <div className="icons">
            <HiOutlineUserGroup className="icon" />
            <GiCircle className="icon" />
            <BsFillChatLeftTextFill className="icon" />
            <BiLogOut className="icon" onClick={logout} />
          </div>
        </div>
        {myChats.length > 0 && myChats.map((chat) => (
  <Contact
    key={chat._id}
    name={chat.members.join(', ')}
    lastMessage={chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : ''}
    lastMessageTime={chat.updatedAt}
  />
))}

      </Container>
    </>
  );
};

export default SideBar;
