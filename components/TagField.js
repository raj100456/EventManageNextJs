import { useState } from "react";

const TagField = ({ tags, addTag, removeTag, maxTags }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      if (
        userInput.trim() !== "" &&
        userInput.length <= 12 &&
        tags.length < maxTags
      ) {
        addTag(userInput.trim());
        setUserInput(""); 
      }
    }
  };

  return (
    <div className="flex flex-col w-full md:w-full">
      <input
        name="keyword_tags"
        type="text"
        placeholder={
          tags.length < maxTags
            ? "Add a tag"
            : `You can only enter a max of ${maxTags} tags`
        }
        className="w-full border border-gray-300 placeholder:text-gray-400  rounded-md px-4 py-2 text-sm focus-within:ring-orange-400"
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
        disabled={tags.length === maxTags}
      />

      {/* Render the tags */}
      <div className="flex flex-row flex-wrap gap-3 mt-4">
        {tags.map((tag, index) => (
          <span
            key={`${index}-${tag}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-orange-100 text-orange-800 mr-2"
          >
            {tag}
            <button
              className="ml-2 hover:text-orange-500"
              onClick={() => removeTag(tag)}
              title={`Remove ${tag}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagField;
