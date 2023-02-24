import { useEffect, useState } from "react";
import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import { io } from "socket.io-client";


const socket = io("http://localhost:3001", { transports: ["websocket"] });

const Home = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (isTyping) {
      socket.emit("typing", { id: socket.id, isTyping: true });
    } else {
      socket.emit("typing", { id: socket.id, isTyping: false });
    }
  }, [isTyping]);

  useEffect(() => {
    socket.on("welcome", (welcomeMessage) => {
      console.log(welcomeMessage);

      socket.on("loggedIn", (onlineUsersList) => {
        console.log("logged in event:", onlineUsersList);
        setLoggedIn(true);
        setOnlineUsers(onlineUsersList);
      });

      socket.on("updateOnlineUsersList", (onlineUsersList) => {
        console.log("A new user connected/disconnected");
        setOnlineUsers(onlineUsersList);
      });

      socket.on("newMessage", (newMessage) => {
        console.log(newMessage);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          newMessage.message,
        ]);
      });

      socket.on("typing", ({ id, isTyping }) => {
        const userIndex = onlineUsers.findIndex(
          (user) => user.socketId === id
        );
        if (userIndex !== -1) {
          const updatedUsers = [...onlineUsers];
          updatedUsers[userIndex].isTyping = isTyping;
          setOnlineUsers(updatedUsers);
        }
      });
    });
  }, [chatHistory, loggedIn, onlineUsers]);

  const submitUsername = () => {
    socket.emit("setUsername", { username });
    setCurrentUser(username);
  };

  const sendMessage = () => {
    const newMessage = {
      sender: username,
      text: message,
      createdAt: new Date().toLocaleString("en-US"),
      isTyping: false,
    };
    socket.emit("sendMessage", { message: newMessage });
    setChatHistory([...chatHistory, newMessage]);
    setIsTyping(false);
    socket.emit("typing", { id: socket.id, isTyping: false });
    setMessage(``);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);

    // Emit a "typing" event to the server when the user starts or stops typing
    if (value.length > 0 && !isTyping) {
      setIsTyping(true);
    } else if (value.length === 0 && isTyping) {
      setIsTyping(false);
    }
  };
  

  return (
    <Container fluid>
      <Row style={{ height: "95vh" }} className="my-3">
        <Col md={9} className="d-flex flex-column justify-content-between">
          {/* LEFT COLUMN */}
          {/* TOP AREA: USERNAME INPUT FIELD */}
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              submitUsername()
            }}
          >
            <FormControl
              type="text"
              placeholder="Enter username"
              className="mr-sm-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
          {loggedIn && (
            <div className="d-flex flex-column" style={{ height: "100%" }}>
              {/* CHAT HISTORY */}
              <div style={{ flex: 1, overflowY: "scroll" }}>
                <ListGroup>
                  {chatHistory.map((message, index) => (
                    <ListGroup.Item key={index}>
                      <strong>{message.sender}:</strong> {message.text}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              {/* BOTTOM AREA: MESSAGE INPUT FIELD */}
              <div>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault()
                    sendMessage()
                  }}
                >
                  <FormControl
                    type="text"
                    placeholder="Type message here"
                    className="mr-sm-2"
                    value={message}
                    onChange={handleChange}
                  />
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </Form>

                
              <div className="mt-2">
                {onlineUsers.length > 0 && (
                  <small>{`${onlineUsers.length} online user(s): `}</small>
                )}
                {onlineUsers.map((user, index) => (
                  <small
                    key={index}
                    className={user.isTyping ? "font-italic" : ""}
                  >
                    {user.username}
                    {user.isTyping && " is typing..."}
                    {user.username === currentUser && " (you)"}
                    {index < onlineUsers.length - 1 && ", "}
                  </small>
                ))}
              </div>
            </div>
          </div>
        )}
      </Col>
    </Row>
  </Container>
)}
export default Home




