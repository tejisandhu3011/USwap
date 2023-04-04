import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "../styles";
import { usePools } from "../hooks";
import { Exchange, Loader } from "./";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const App = () => {
  const { account } = useEthers();
  const [poolsLoading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Welcome to Krypt USwap</h1>
          <p className={styles.subTitle}>Exchange tokens in seconds</p>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
        <h1 className="text-1xl sm:text-3xl text-white text-gradient py-10">
        Transform your financial future with our <br/> innovative crypto exchange solution
          </h1>
        <div>
        <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 p-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
