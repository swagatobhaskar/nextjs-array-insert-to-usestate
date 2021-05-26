import { useState } from "react";

export default function IndexPage() {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [diag, setDiag] = useState("");

  const addTag = ({ target }) => {
    setTag(target.value);
  };

  const addThisTag = (tag) => {
    setTags((tags) => [...tags, tag]);
    setTag("");
  };

  const sendTags = () => {
    setDiag("Sent tags: ", tags);
  };

  return (
    <div>
      <h4>Hello there!</h4>
      <div style={{ border: "2px solid green" }}>
        <div>
          <input
            type="text"
            name="tags"
            value={tag}
            placeholder="Search tags"
            onChange={addTag}
            //onChange={(e) => setTag(e.target.value)}
          />
          <button
            type="submit"
            style={{
              border: "none",
              backgroundColor: "gold",
              margin: "0px 2px"
            }}
            onClick={() => addThisTag(tag)}
          >
            Add
          </button>
        </div>
        <br />
        Tags:{" "}
        {tags.map((tag) => (
          <li key={tag} style={{ color: "green", fontWeight: "bolder" }}>
            {tag}
          </li>
        ))}
      </div>
      <button onClick={sendTags}>Submit</button>
      {diag.length > 0 ? (
        <h3 style={{ color: "purple" }}>Sent tags: {tags}</h3>
      ) : null}
    </div>
  );
}
