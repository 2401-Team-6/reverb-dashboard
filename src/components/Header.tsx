import { Navbar } from "flowbite-react";

const NAV_LINKS = ["Logs", "Docs", "Case Study", "Connect to API"];

export default function Header(props: {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const docsUrl = "https://github.com/reverb-app";

  return (
    <header className="font-sans">
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
          <img
            src="/src/assets/logo.ico"
            className="m-4 ml-6 mr-2 h-12"
            alt="Reverb Logo"
          />
          <div className="whitespace-nowrap text-[3rem] text-offWhite">
            Reverb
          </div>
        </Navbar.Brand>
        <Navbar.Collapse className="items-right relative -bottom-4 mr-8 text-slate-400">
          <Navbar.Link as="button" active>
            Logs
          </Navbar.Link>
          <a href={docsUrl} target="_blank" rel="noopener noreferrer">
            <Navbar.Link as="button">Docs</Navbar.Link>
          </a>
          <Navbar.Link as="button">Case Study</Navbar.Link>
          <Navbar.Link
            as="button"
            onClick={() => {
              props.setOpenModal(true);
              // localStorage.removeItem("apiUrl");
            }}
          >
            Connect to API
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
