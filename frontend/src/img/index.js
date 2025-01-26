import Wave from "./wave.svg";
import Portfolio from "./portfolio.svg";
import LogoOriginal from "./logo.png";
import Avatar from "./avatar.svg";
import PageNotFound from "./pageNotFound.svg";
import BTC_logo from "./btc_logo.svg";
import ETH_logo from "./eth_logo.svg";
import USDT_logo from "./usdt_logo.svg";
import XRP_logo from "./xrp_logo.svg";
import BCH_logo from "./bch_logo.svg";
import BSV_logo from "./bsv_logo.svg";
import LTC_logo from "./ltc_logo.svg";
import BNB_logo from "./bnb_logo.svg";
import EOS_logo from "./eos_logo.svg";
import XTZ_logo from "./xtz_logo.svg";
import React from "react";

class LogoLP extends React.Component {
  render() {
    return (
      <div>
        <a href="./">
          <img
            src={LogoOriginal}
            style={{
              width: "15vw",
              height: "7vw",
              padding: "0vw 0.5vw 0vw 0.5vw",
              margin: "24px 2.7vw 0vw 40vw",
            }}
          />
        </a>
      </div>
    );
  }
}
class LogoLLP extends React.Component {
    render() {
      return (
        <div>
          <a href="./">
            <img
              src={LogoOriginal}
              style={{
                width: "21vw",
                height: "11vw",
                padding: "0vw 0.5vw 0vw 0.5vw",
                margin: "54px 2.7vw 0vw 61vw",
              }}
            />
          </a>
        </div>
      );
    }
  }

class Logo extends React.Component {
  render() {
    return (
      <div>
        <a href="./">
          <img
            src={LogoOriginal}
            style={{
              width: "13vw",
              height: "7vw",
              padding: "0vw 0.5vw 0vw 0.5vw",
              margin: "0vw 1.3vw 0vw 1.3vw",
            }}
          />
        </a>
      </div>
    );
  }
}

export {
    LogoLLP,
  LogoLP,
  Logo,
  Wave,
  Portfolio,
  Avatar,
  PageNotFound,
  BTC_logo,
  ETH_logo,
  USDT_logo,
  XRP_logo,
  BCH_logo,
  BSV_logo,
  LTC_logo,
  BNB_logo,
  EOS_logo,
  XTZ_logo,
};
