import LogoDark from "../../assets/images/logos/xtremelogo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src='/dummylgo.jpg' alt="logo" height={90} width={250}/>
        {/* <h3>NextUpgrad</h3> */}
      </a>
    </Link>
  );
};

export default Logo;
