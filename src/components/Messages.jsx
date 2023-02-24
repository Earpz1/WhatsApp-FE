import { Button, Container } from "react-bootstrap";
import { AiOutlineMore, AiOutlineSearch } from "react-icons/ai";
import ChatBubble from "react-chat-bubble";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchChatData } from "../redux/actions";
import axios from "axios";

const Messages = ({ myProfile }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const activeChatId = useSelector((state) => state.activeChat);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/chats/${activeChatId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.error(error);
      }
    };
    if (activeChatId) {
      fetchData();
    }
  }, [activeChatId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:3001/chats/${activeChatId}`,
        { text: inputMessage },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setInputMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setInputMessage(e.target.value);
  };

  console.log("myProfile:", myProfile);


  return (
    <>
      <Container>
        <div className="message-heading d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="https://via.placeholder.com/50" />
            <h4>Tim</h4>
          </div>
          <div className="icons">
            <AiOutlineSearch className="icon" />
            <AiOutlineMore className="icon" />
          </div>
        </div>
        <div className="d-flex flex-column messageContainer">
        {messages &&
  messages.map((message) => (
    <div
      key={message._id}
      className={`message${
        message.sender._id === myProfile.userName ? "Sent" : "Recieved"
      }`}
    >
      {message.content.text}
    </div>
  ))
}







        </div>
        <form className="d-flex message-heading" onSubmit={handleSubmit}>
          <input
            type="text"
            name="enter message"
            className="input-message"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={handleChange}
          />
          <Button type="submit" className="w-25">
            Send Message
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Messages;
