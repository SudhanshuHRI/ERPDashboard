import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Header from "./header/Header";
import Sidebar from "./sidebars/vertical/Sidebar";
import { useRouter } from 'next/router';

const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [loginsetup, setloginsetup] = useState("d-block")
  const [logincss,setLoginCss] = useState("")

  const router = useRouter();

  const showMobilemenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    //Runs only on the first render
    if (router.pathname === "/") {
      setloginsetup("d-none")
      setLoginCss("bg-white")
    }else{
      setloginsetup("d-block")
      setLoginCss('')
    }
  }, [router.pathname]);

  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-white ${!open ? "" : "showSidebar"
            } ${loginsetup}`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>
        {/********Content Area**********/}

        <div className={`contentArea ${logincss}`}>
          {/********header**********/}
          <div className={`${loginsetup}`}>
            <Header showMobmenu={() => showMobilemenu()} />
          </div>


          {/********Middle Content**********/}
          <Container className=' p-4 wrapper '  >
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
