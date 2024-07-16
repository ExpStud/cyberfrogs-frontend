import { FC, Fragment, useState } from "react";
import {
  ConnectWalletButton,
  HeaderIcons,
  Logo,
  Menu,
  MenuIcon,
  NavigationItem,
} from "@components";
import { navigationData } from "@constants";
import { useRouter } from "next/router";
import { useWallet } from "@solana/wallet-adapter-react";

const Navigation: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const router = useRouter();
  const { connected } = useWallet();

  const mintPage = router.pathname === "/mint";

  return (
    <div className="page-spacing pt-1 md:pt-3 lg:pt-6 w-screen flex items-center justify-between gap-8 z-20">
      <Logo />

      {/* desktop nav */}
      {!mintPage && (
        <>
          <div className="hidden xl:flex gap-4 xl:gap-8 2xl:gap-10">
            {navigationData.map((nav, index) => (
              <Fragment key={index}>
                {nav?.component ? (
                  <nav.component />
                ) : (
                  <NavigationItem item={nav} />
                )}
              </Fragment>
            ))}
          </div>

          <HeaderIcons className="hidden xl:!flex " />
        </>
      )}

      {/* mobile nav */}
      {!mintPage && (
        <div className="flex xl:hidden gap-10">
          <MenuIcon
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer "
          />

          <Menu toggleMenu={setOpenMenu} open={openMenu} />
        </div>
      )}

      {mintPage && connected && <ConnectWalletButton />}
    </div>
  );
};
export default Navigation;
