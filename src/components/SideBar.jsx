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
import { fetchUserDetails } from "../redux/actions";

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
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <>
      <Container className="w-50 container">
        <div className="heading d-flex justify-content-between align-items-center">
          <img style={{ maxWidth: "5rem" }} src={myProfile?.avatar} />
          1d6a8baa34a532d8352d6a54f0db2e210664
          <div className="icons">
            <HiOutlineUserGroup className="icon" />
            <GiCircle className="icon" />
            <BsFillChatLeftTextFill className="icon" />
            <BiLogOut className="icon" onClick={logout} />
          </div>
        </div>
        <Contact
          name="Timm"
          lastMessage="How are you?"
          lastMessageTime="14:50"
        />
      </Container>
    </>
  );
};

export default SideBar;
