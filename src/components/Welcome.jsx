import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionsContext } from "../context/TransactionContext";
import Loader from "./Loader";
import { shortenAddress } from "../../utils/helpers";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ ...props }) => (
  <input
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    {...props}
  />
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    sendTransaction,
    isLoading,
  } = useContext(TransactionsContext);

  const handleSubmit = (e) => {
    console.log(formData);
    const { addressTo, amount, keyword, message } = formData;
    sendTransaction();
    if (!addressTo || !amount || !keyword || !message) return;
    e.preventDefault();
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Stop Child Labour <br /> Save Future
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Donate money using the safest way possible and make children's life better by educating them
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <span className="text-white text-base font-semibold">
                Connect Wallet
              </span>
            </button>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}><a  href="https://www.savethechildren.in/" target="_blank">NGOs seeking donations</a></div>
            <div className={`${commonStyles}`}><a  href="https://pencil.gov.in/" target="_blank">PENSIL</a></div>
            <div className={`rounded-tr-2xl ${commonStyles}`}><a  href="https://www.unicef.org/india/what-we-do/child-labour-exploitation#:~:text=Child%20labour%20and%20exploitation%20are,social%20inequities%20reinforced%20by%20discrimination." target="_blank">Causes of child labour</a></div>
            <div className={`rounded-bl-2xl ${commonStyles}`}><a  href="https://www.childlineindia.org/blog/How-To-Stop-Child-Labour-inia-with-Case-study-Childline-India-1098.html#:~:text=Education%20and%20awareness,the%20laws%20and%20their%20penalties." target="_blank">How to help</a></div>
            <div className={`${commonStyles}`}>Contact us</div>
            <div className={`rounded-br-2xl ${commonStyles}`}><a  href="https://builtin.com/blockchain#:~:text=Cryptocurrencies%20are%20digital%20currencies%20that,purchases%2C%20like%20cars%20and%20homes." target="_blank">Blockchain</a></div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col h-full w-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {currentAccount ? shortenAddress(currentAccount) : "Address"}
                </p>
                <p className="text-white semi-bold text-lg mt-1">Ethereum</p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              onChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              step="0.0001"
              onChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              onChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              onChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-600 my-2" />
            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:border-[#5d76b6]"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
