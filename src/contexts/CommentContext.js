import { createContext, useState } from "react";

let commentContext = createContext();

function CommentContxtProvier({ children }) {
  let [infoReply, setInfoReply] = useState(null);
  return (
    <commentContext.Provider value={{ infoReply, setInfoReply }}>
      {children}
    </commentContext.Provider>
  );
}

export { commentContext };
export default CommentContxtProvier;
