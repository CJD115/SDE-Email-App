import EmailItem from "../EmailItem";
import { useEffect, useState } from "react";
import EmailView from "../EmailView";

function EmailList() {
  const [emailArray, setEmailArray] = useState(false);
  const [refreshJson, setRefreshJson] = useState(false);
  const [currentID, setCurrentID] = useState(0);
  const [emailItemWidth, setEmailItemWidth] = useState("w-full");
  const [emailViewWidth, setEmailViewWidth] = useState("w-0");
  const [buttonClass, setButtonClass] = useState("hidden");

  useEffect(() => {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
      .then((response) => response.json())
      .then((data) => {
        setEmailArray(data);
        setRefreshJson(false);
        return emailArray;
      });
  }, [refreshJson]);

  function closeEmail() {
    setCurrentID(0);
    setEmailItemWidth("w-full");
    setEmailViewWidth("w-0");
    setButtonClass("hidden");
  }

  function setRead(id) {
    fetch("https://email-client-api.dev.io-academy.uk/emails/" + id, {
      method: "PUT",
    });
    setRefreshJson(true);
  }

  return (
    <div>
      <div className="flex">
        <div className="md:w-2/6 overflow-scroll max-h-screen">
          {emailArray && (
            <div>
              {emailArray.data.map((email) => {
                return (
                  <EmailItem
                    data={email}
                    key={email.id}
                    setCurrentId={setCurrentID}
                    setRead={setRead}
                    setEmailItemWidth={setEmailItemWidth}
                    setEmailViewWidth={setEmailViewWidth}
                    setButtonClass={setButtonClass}
                    emailItemWidth={emailItemWidth}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className={`${emailViewWidth} md:w-4/6`}>
          {currentID !== 0 && (
            <EmailView
              id={currentID}
              closeEmail={closeEmail}
              buttonClass={buttonClass}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default EmailList;
