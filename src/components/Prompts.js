import { memo } from "react";

const Prompts = ({ POTD }) => {
  return (
    <div className="prompts">
      <h2>"{POTD}"</h2>
    </div>
  );
};
export default memo(Prompts);
