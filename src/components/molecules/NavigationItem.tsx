import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import { Navigation, NavigationData } from "@types";
import {
  GreenBorderSVG,
  GoldBorderSVG,
  ArrowIcon,
  DropdownItem,
  Dropdown,
} from "@components";
import { AnimatePresence } from "framer-motion";
import { useOutsideAlerter } from "src/hooks";

interface NavigationItemProps {
  item: NavigationData;
  callback?: () => void;
  arrow?: true | false | null;
}
const NavigationItem: FC<NavigationItemProps> = (
  props: NavigationItemProps
) => {
  const { item, callback, arrow = null } = props;

  const [hover, setHover] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const router = useRouter();

  const inMcfDropdown =
    router.asPath === "/dashboard" ||
    router.asPath === "/raffles" ||
    router.asPath === "/thor" ||
    router.asPath === "/thor-btc" ||
    router.asPath === "/mission" ||
    router.asPath === "/faction-contracts-v3";

  const active =
    (item?.href && router.asPath === item?.href) ||
    (item.name.toLocaleLowerCase() === "my cyber frogs" && inMcfDropdown);

  //close dropdown on outside click
  const ref = useRef<HTMLDivElement>(null);
  useOutsideAlerter(ref, () => setShowDropdown(false));

  const handleClick = () => {
    //open dropdown
    if (item?.dropdown) {
      setShowDropdown(!showDropdown);
      return;
    }

    //trigger custom action
    if (callback) {
      callback();
      return;
    }

    //internal link
    if (item?.href) {
      router.push(item.href);
    }
  };

  const handleDropdownItemClick = (item: Navigation) => {
    setShowDropdown(false);

    //open external link in new tab or internal link
    if (item?.href) {
      if (item?.redirect) window.open(item.href, "_blank");
      else router.push(item.href);
    }
  };

  return (
    <div
      className={`flex relative  flex-col gap-1 w-[168px] ${
        showDropdown ? "z-50" : ""
      } ${active ? "cursor-default" : "cursor-pointer"}`}
      onClick={handleClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <p
          className={`text-sm tracking-wide transition-200 font-rajdhani-bold uppercase  ${
            active
              ? "text-highlight mb-5 xl:mb-0"
              : hover
              ? "text-cf-white text-opacity-100"
              : "text-cf-white text-opacity-75"
          }`}
        >
          {item.name}
        </p>

        {arrow !== null && <ArrowIcon animate={arrow} />}
        {item?.dropdown && <ArrowIcon animate={showDropdown} />}
      </div>

      {/* bottom border */}
      {active ? (
        <GoldBorderSVG className="absolute -z-10 -left-[115px] -top-[60px] cursor-default" />
      ) : (
        <GreenBorderSVG hover={hover} />
      )}

      {/* dropdown */}
      <AnimatePresence>
        {item?.dropdown && showDropdown && (
          <Dropdown grid={item.dropdown.length > 3} active={active}>
            {item.dropdown.map((data, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleDropdownItemClick(data)}
              >
                {data.name}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationItem;
