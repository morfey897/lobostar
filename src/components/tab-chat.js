import { useTranslation } from 'react-i18next';
import { List, InputBase, IconButton, Button } from '@mui/material';

import withTab from "../hocs/hoc-tab";
import ChatItem from "./chat-item";

import SmileIcon from "../../public/assets/icons/smile.svg";
import { useCallback, useState } from 'react';

const TPL = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function TabChat({ parentHeight }) {
  const { t } = useTranslation("game");

  const [MESSAGES, setMessages] = useState([
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: true, isOnline: true, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: false, isOnline: false, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: false, isOnline: false, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: true, isOnline: true, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: true, isOnline: true, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: false, isOnline: true, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
    { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: true, isOnline: true, time: Math.random() > 0.5 ? "9h ago" : "", message: TPL.slice(0, 10 + parseInt(Math.random() * (TPL.length - 10))) },
  ]);

  const [value, setValue] = useState("");

  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const onSend = useCallback(() => {
    if (value) {
      setMessages(msgs => [...msgs, { avatar: "https://picsum.photos/seed/picsum/50/50", isMe: true, isOnline: true, message: value }]);
      setValue("");
      console.log("scrollRef.current", scrollRef.current);
    }
  }, [value]);

  return <>
    <List
      sx={{
        width: '100%',
        height: `calc(${parentHeight}px - 60px)`,
        overflowY: 'auto',
        overflowX: "hidden"
      }}>
      {MESSAGES.map((value, index) => <ChatItem key={index} {...value} />)}
    </List>
    <InputBase
      value={value}
      onChange={onChange}
      sx={{
        borderRadius: 30,
        position: 'relative',
        background: "#182129",
        border: 0,
        fontSize: 16,
        lineHeight: "20px",
        width: '100%',
        paddingLeft: '30px',
        height: "50px",
        marginTop: "10px"
      }}
      placeholder={t("chat_palceholder")}
      endAdornment={<>
        <IconButton>
          <SmileIcon />
        </IconButton>
        <Button color="primary" variant='contained' onClick={onSend}>{t("btn_send")}</Button>
      </>}
    />
  </>;
}

export default withTab(TabChat);