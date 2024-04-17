"use client";
import ChatList from "@/src/components/admin/chat/ChatList";
import ChatMessage from "@/src/components/admin/chat/ChatMessage";
import SearchInput from "@/src/components/dashboard/dashboardComponents/SearchInput";
import { AgentAvatarOne, AgentAvatarTwo } from "@/src/utils/images/images";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const list = [
  {
    id: 1,
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 2,
    img: AgentAvatarTwo,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 3,
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 4,
    img: AgentAvatarTwo,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
  {
    id: 5,
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 6,
    img: AgentAvatarTwo,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 7,
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 8,
    img: AgentAvatarTwo,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
  {
    id: 9,
    img: AgentAvatarOne,
    name: "Anil",
    message: "April fool’s day",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 10,
    img: AgentAvatarTwo,
    name: "Chuuthiya",
    message: "Bhaag",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 11,
    img: AgentAvatarOne,
    name: "Mary ma’am",
    message: "You have to report it",
    date: "Today, 9.52pm",
    status: "1",
  },
  {
    id: 12,
    img: AgentAvatarTwo,
    name: "Bill Gates",
    message: "Nevermind bro",
    date: "Yesterday, 9.52pm",
    status: "1",
  },
];

const chats = [
  {
    recevie: "1",
    sender: "",
    message: "Hello",
  },
  {
    recevie: "",
    sender: "",
    message: "Hi",
  },
  {
    recevie: "1",
    sender: "",
    message: "How are you doing",
  },
  {
    recevie: "",
    sender: "",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
  },
  {
    recevie: "1",
    sender: "",
    message: "Hello",
  },
  {
    recevie: "",
    sender: "",
    message: "Hi",
  },
  {
    recevie: "1",
    sender: "",
    message: "How are you doing",
  },
  {
    recevie: "",
    sender: "",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever ",
  },
];

const columns = ["#", "User", "Date", "Action"];

function Chats() {
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [changeScreen, setChangeScreen] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const theme = useTheme();
  const smallScreen: any = useMediaQuery(theme.breakpoints.down("md"));

  const getChat = (id: number) => {
    try {
      if (smallScreen) {
        setChangeScreen(true);
      }
      setLoading(true);
      let user = list.find((v) => v.id === id);
      setSelectedUser(user);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (!smallScreen) setChangeScreen(false);
    if (smallScreen && selectedUser) setChangeScreen(true);
  }, [smallScreen, selectedUser]);

  const backScreen = () => {
    try {
      setSelectedUser(null);
      setChangeScreen(false);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <Grid container mb={3} spacing={3}>
        <Grid item xs={12} md={4}>
          <div>
            <h1 className="text-2xl font-semibold">Chats</h1>
            <h6 className="text-xs text-[#475467] pt-1 md:pt-0">
              Fund any wallet quickly. you can enter a negatice amount to deduct
              from wallet.
            </h6>
          </div>
        </Grid>
        <Grid item xs={12} md={5} />
        <Grid item xs={12} md={3} className="flex items-center">
          <SearchInput />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {showChat ? (
            <div className="border rounded-lg pl-3 pt-3">
              <BackBtn onClick={() => setShowChat(false)} className="cursor-pointer" />
              <ChatMessage selectedUser={{ id: "1" }} chats={chats} />
            </div>
          ) : (
            <ChatList columns={columns} onOpenChat={() => setShowChat(true)} />
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;

const BackBtn = ({ ...other }) => (
  <svg
    width="79"
    height="24"
    viewBox="0 0 79 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...other}
  >
    <path
      d="M19 12L5 12M5 12L12 19M5 12L12 5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.4382 19V5.90909H38.2322C39.1612 5.90909 39.9304 6.0625 40.5398 6.36932C41.1491 6.67187 41.6051 7.0831 41.9077 7.60298C42.2102 8.11861 42.3615 8.70028 42.3615 9.34801C42.3615 9.89347 42.2614 10.3537 42.0611 10.7287C41.8608 11.0994 41.5923 11.3977 41.2557 11.6236C40.9233 11.8452 40.5568 12.0071 40.1562 12.1094V12.2372C40.5909 12.2585 41.0149 12.3991 41.4283 12.6591C41.8459 12.9148 42.1911 13.2791 42.4638 13.7521C42.7365 14.2251 42.8729 14.8004 42.8729 15.478C42.8729 16.147 42.7152 16.7479 42.3999 17.2805C42.0888 17.8089 41.6072 18.2287 40.9553 18.5398C40.3033 18.8466 39.4702 19 38.456 19H33.4382ZM35.4134 17.3061H38.2642C39.2102 17.3061 39.8878 17.1229 40.2969 16.7564C40.706 16.3899 40.9105 15.9318 40.9105 15.3821C40.9105 14.9687 40.8061 14.5895 40.5973 14.2443C40.3885 13.8991 40.0902 13.6243 39.7024 13.4197C39.3189 13.2152 38.8629 13.1129 38.3345 13.1129H35.4134V17.3061ZM35.4134 11.5724H38.0597C38.5028 11.5724 38.9013 11.4872 39.255 11.3168C39.6129 11.1463 39.8963 10.9077 40.1051 10.6009C40.3182 10.2898 40.4247 9.9233 40.4247 9.50142C40.4247 8.96023 40.2351 8.50639 39.8558 8.13991C39.4766 7.77344 38.8949 7.5902 38.1108 7.5902H35.4134V11.5724ZM47.9194 19.2173C47.2972 19.2173 46.7347 19.1023 46.2319 18.8722C45.729 18.6378 45.3306 18.299 45.0366 17.8558C44.7468 17.4126 44.6019 16.8693 44.6019 16.2259C44.6019 15.6719 44.7085 15.2159 44.9215 14.858C45.1346 14.5 45.4222 14.2166 45.7844 14.0078C46.1467 13.799 46.5515 13.6413 46.9989 13.5348C47.4464 13.4283 47.9023 13.3473 48.3668 13.2919C48.9549 13.2237 49.4322 13.1683 49.7987 13.1257C50.1651 13.0788 50.4315 13.0043 50.5977 12.902C50.7638 12.7997 50.8469 12.6335 50.8469 12.4034V12.3587C50.8469 11.8004 50.6893 11.3679 50.3739 11.0611C50.0629 10.7543 49.5984 10.6009 48.9805 10.6009C48.337 10.6009 47.8299 10.7436 47.4592 11.0291C47.0927 11.3104 46.8391 11.6236 46.6985 11.9688L44.9023 11.5597C45.1154 10.9631 45.4265 10.4815 45.8356 10.1151C46.2489 9.74432 46.7241 9.47585 47.261 9.30966C47.7979 9.1392 48.3626 9.05398 48.9549 9.05398C49.3469 9.05398 49.7624 9.10085 50.2013 9.1946C50.6445 9.28409 51.0579 9.45028 51.4414 9.69318C51.8292 9.93608 52.1467 10.2834 52.3938 10.7351C52.641 11.1825 52.7646 11.7642 52.7646 12.4801V19H50.8981V17.6577H50.8214C50.6978 17.9048 50.5124 18.1477 50.2653 18.3864C50.0181 18.625 49.7006 18.8232 49.3129 18.9808C48.9251 19.1385 48.4606 19.2173 47.9194 19.2173ZM48.3349 17.6832C48.8633 17.6832 49.315 17.5788 49.69 17.37C50.0692 17.1612 50.3569 16.8885 50.5529 16.5518C50.7532 16.2109 50.8533 15.8466 50.8533 15.4588V14.1932C50.7852 14.2614 50.6531 14.3253 50.457 14.3849C50.2653 14.4403 50.0458 14.4893 49.7987 14.532C49.5515 14.5703 49.3107 14.6065 49.0763 14.6406C48.842 14.6705 48.646 14.696 48.4883 14.7173C48.1175 14.7642 47.7788 14.843 47.4719 14.9538C47.1694 15.0646 46.9265 15.2244 46.7433 15.4332C46.5643 15.6378 46.4748 15.9105 46.4748 16.2514C46.4748 16.7244 46.6495 17.0824 46.9989 17.3253C47.3484 17.5639 47.7937 17.6832 48.3349 17.6832ZM59.4458 19.1982C58.4956 19.1982 57.6774 18.983 56.9913 18.5526C56.3095 18.1179 55.7853 17.5192 55.4189 16.7564C55.0524 15.9936 54.8691 15.12 54.8691 14.1357C54.8691 13.1385 55.0566 12.2585 55.4316 11.4957C55.8066 10.7287 56.335 10.13 57.0169 9.69957C57.6987 9.26918 58.502 9.05398 59.4267 9.05398C60.1724 9.05398 60.8372 9.19247 61.421 9.46946C62.0048 9.74219 62.4757 10.1257 62.8336 10.62C63.1958 11.1143 63.411 11.6918 63.4792 12.3523H61.6191C61.5169 11.892 61.2825 11.4957 60.916 11.1634C60.5538 10.831 60.068 10.6648 59.4586 10.6648C58.926 10.6648 58.4593 10.8054 58.0588 11.0866C57.6625 11.3636 57.3535 11.7599 57.1319 12.2756C56.9103 12.7869 56.7995 13.392 56.7995 14.0909C56.7995 14.8068 56.9082 15.4247 57.1255 15.9446C57.3429 16.4645 57.6497 16.8672 58.046 17.1527C58.4466 17.4382 58.9174 17.581 59.4586 17.581C59.8208 17.581 60.149 17.5149 60.443 17.3828C60.7413 17.2464 60.9906 17.0526 61.1909 16.8011C61.3954 16.5497 61.5382 16.2472 61.6191 15.8935H63.4792C63.411 16.5284 63.2044 17.0952 62.8592 17.5938C62.514 18.0923 62.0517 18.4844 61.4721 18.7699C60.8968 19.0554 60.2214 19.1982 59.4458 19.1982ZM67.2809 15.6697L67.2681 13.3366H67.6005L71.5124 9.18182H73.8008L69.3391 13.9119H69.0387L67.2809 15.6697ZM65.5231 19V5.90909H67.4343V19H65.5231ZM71.7234 19L68.2077 14.3338L69.5245 12.9979L74.0692 19H71.7234Z"
      fill="black"
    />
  </svg>
);
