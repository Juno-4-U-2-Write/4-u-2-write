import { memo, useEffect } from "react";

const Prompts = ({ prompts, POTD, setPOTD }) => {
	useEffect(() => {
		setPOTD(prompts[Object.keys(prompts)[0]]);
		// comment to make eslint not angry with us:
	}, [prompts, POTD]); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="prompts">
			<h2>Prompt of the day:</h2>
			<h2>{POTD.prompt}</h2>
		</div>
	);
};
export default memo(Prompts);
