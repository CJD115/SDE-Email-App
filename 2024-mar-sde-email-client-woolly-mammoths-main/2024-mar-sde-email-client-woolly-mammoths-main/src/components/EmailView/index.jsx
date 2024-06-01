import { useState, useEffect } from "react";

const EmailView = ({ id, closeEmail, buttonClass }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails/" + id)
      .then((response) => response.json())
      .then((data2) => {
        setData(data2.data.email);
      });
  }, [id]);

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={closeEmail}
          className={`${buttonClass} bg-green-400 px-2 py-1 mr-5 my-3 rounded`}
        >
          Close
        </button>
      </div>

      <div className="px-2 mx-5 mb-5 h-fit border-t border-b border-gray-300">
        {data && (
          <>
            <div className="flex justify-between pt-3">
              <h2 className="text-xl font-semibold">{data.name}</h2>
              <div className="font-bold text-xs">
                {new Date(data.date_created).toLocaleDateString()}
              </div>
            </div>
            <p className="text-xs font-semibold my-2">{data.address}</p>
            <h1 className="text-2xl font-bold">{data.subject}</h1>
            <div className="pt-8 pb-2">{data.body}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailView;
