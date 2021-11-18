import { FunctionComponent } from 'react';

type Props = {
	flex?: boolean;
};

const Container: FunctionComponent<Props> = ({ children, ...props }) => {
	return (
		<div className={`max-w-8xl mx-auto px-2 ${props.flex ? 'flex' : 'block'} dark:text-gray-200`}>
			{children}
		</div>
	);
};

export default Container;
