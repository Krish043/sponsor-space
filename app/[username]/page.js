import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=zQveauUqcI98L9tF0j3FauGI6WNfKcQT93CAZFZZ1Ec%3D"
          alt=""
        />
        <div className="absolute -bottom-10 left-[46%] border-white border-2 rounded-full">
          <img
            className="rounded-full"
            width={100}
            height={100}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
            alt=""
          />
        </div>
      </div>
      <div className="info flex flex-col justify-center items-center my-12">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          12,708 members . 86 posts . $16,870/release
        </div>

        <div className="payment flex gap-3 w-[90%] mt-9">
          <div className="supporters w-1/2 bg-slate-900 p-5 rounded-lg text-white">
            <h2 className="text-2xl font-bold my-2">Supporters</h2>
            <ul className="mx-5 text-md">
              <li className="my-2 flex gap-2 items-center">
                <img
                  width={40}
                  className="bg-red-50 rounded-full p-2"
                  src="avatar.gif"
                  alt="user avatar"
                />
                <span>
                  Jaivik donated <span className="font-bold">$30</span> with a
                  message "I support you bro. lots of ❤️"
                </span>
              </li>
              <li className="my-2 flex gap-2 items-center">
                <img
                  width={40}
                  className="bg-red-50 rounded-full p-2"
                  src="avatar.gif"
                  alt="user avatar"
                />
                <span>
                  Jaivik donated <span className="font-bold">$30</span> with a
                  message "I support you bro. lots of ❤️"
                </span>
              </li>
              <li className="my-2 flex gap-2 items-center">
                <img
                  width={40}
                  className="bg-red-50 rounded-full p-2"
                  src="avatar.gif"
                  alt="user avatar"
                />
                <span>
                  Jaivik donated <span className="font-bold">$30</span> with a
                  message "I support you bro. lots of ❤️"
                </span>
              </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 p-5 rounded-lg text-white">
            <h2 className="text-2xl font-bold my-2">Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </div>
            <div className="flex gap-2 mt-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
