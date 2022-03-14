import { styled } from "@mui/system";
import BgImg from "../../public/assets/imgs/chess.png";

const Bg = styled("div")({
  position: "fixed",
  // minHeight: "100vh",
  width: "100%",
  height: "100%",
  zIndex: -100,
  top: 0,
  left: 0,
  /* The background image */
  backgroundImage: `url(${BgImg})`,

  /* Set background image to fixed (don't scroll along with the page) */
  // backgroundAttachment: "fixed",

  /* Center the background image */
  // backgroundPosition: "center",

  /* Set the background image to no repeat */
  backgroundRepeat: "no-repeat",

  /* Scale the background image to be as large as possible */
  backgroundSize: "cover",
  backgroundColor: "rgba(17, 27, 37, 0.6)"
});

const Overlay = styled("div")({
  position: "fixed",
  // minHeight: "100vh",
  width: "100%",
  height: "100%",
  zIndex: -50,
  backgroundColor: "rgba(17, 27, 37, 0.6)"
})

function Layout({ children }) {
  return <div>
    {children}
    <Bg>
      <Overlay />
    </Bg>
  </div>;
}

export default Layout;