import React, { useState, useEffect } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "../Menu/MenuToggle";

interface AnimationProps {
  transform: string;
  ease: number[];
  duration: number;
  opacity: 1;
  filter: string;
  from: string;
  at: string;
  animate: [];
  d: boolean;
}
function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations: any = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleTogle = () => {
    setOpen((prev) => !prev);
  };
  const scope = useMenuAnimation(isOpen);
  return (
    <div>
      <div className="hamburger" onClick={handleTogle}>
        {!isOpen ? (
          <DehazeIcon className="hamburger-icon" />
        ) : (
          <CloseIcon className="hamburger-icon" />
        )}
      </div>
      <nav ref={scope}  className={!isOpen ? "container-nav" : ""}>
        <nav  className="navigation">
          <div className="left-nav">
            <Link href={"product"} className="nav-item">
              Product
            </Link>
            <Link href={"product"} className="nav-item">
              Solution
            </Link>
            <Link href={"product"} className="nav-item">
              Business
            </Link>
          </div>
          <div className="right-nav">
            <Link href={"login"} className="nav-item">
              Log in
            </Link>
            <Link href={"account"} className="nav-item signup">
              Sign up
            </Link>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
