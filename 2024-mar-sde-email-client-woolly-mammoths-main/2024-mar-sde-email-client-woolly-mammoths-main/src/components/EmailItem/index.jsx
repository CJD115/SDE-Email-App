import React, { useState } from "react";

function EmailItem({
  data,
  setCurrentId,
  setRead,
  setEmailViewWidth,
  setEmailItemWidth,
  emailItemWidth,
  setButtonClass,
}) {
  const [dateObj, setDateObj] = useState(
    new Date(data.date_created).toLocaleDateString()
  );

  const readClassNames =
    data.read === "1" ? "bg-slate-100 text-black" : "bg-gray-500 text-white";

  const handleClick = () => {
    setCurrentId(data.id);
    setRead(data.id);
    setEmailItemWidth("w-0");
    setEmailViewWidth("w-full");
    setButtonClass("block");
  };

  return (
    <button
      id={data.id}
      onClick={handleClick}
      data-id={data.id}
      className={`${emailItemWidth} md:w-full`}
    >
      <div
        className={`${readClassNames} p-2.5 border-b border-r border-gray-200 hover:bg-blue-500`}
      >
        <div className="flex justify-between">
          <div className="flex flex-col text-left">
            <p className="text-xl font-bold">{data.name}</p>
            <p>{data.subject}</p>
            <p>{data.body}</p>
          </div>
          <div className="flex flex-col text-right">
            <p className="font-bold">{dateObj}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default EmailItem;
