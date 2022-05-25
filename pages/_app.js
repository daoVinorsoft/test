import Head from "next/head";
import "../styles/globals.css";
import { MessengerChat } from "react-messenger-chat-plugin";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <link
          href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
      <div className="App">
          <MessengerChat
              pageId="107585017814932"
              language="vi_VN"
              themeColor={"#004a99"}
              bottomSpacing={10}
              loggedInGreeting="Chào bạn! Tôi có thể giúp gì cho bạn"
              loggedOutGreeting="Chào bạn! Tôi có thể giúp gì cho bạn"
              greetingDialogDisplay={"show"}
              debugMode={true}
              onMessengerShow={() => {
                console.log("onMessengerShow");
              }}
              onMessengerHide={() => {
                console.log("onMessengerHide");
              }}
              onMessengerDialogShow={() => {
                console.log("onMessengerDialogShow");
              }}
              onMessengerDialogHide={() => {
                console.log("onMessengerDialogHide");
              }}
              onMessengerMounted={() => {
                console.log("onMessengerMounted");
              }}
              onMessengerLoad={() => {
                console.log("onMessengerLoad");
              }}
            />
    </div>
    </>
  );
}

export default MyApp;
