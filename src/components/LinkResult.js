import { useState } from "react";

const LinkResult = () => {
  const [shortenLink, setShortenLink] = useState("Shorten Link");
  return (
    <div className="result">
      <p>{shortenLink}</p>
      <button>Copy to Clipboard </button>
    </div>
  )
}

export default LinkResult