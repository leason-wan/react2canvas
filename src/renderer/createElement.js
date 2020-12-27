import { Text, createText } from './components';

let ROOT_NODE_INSTANCE = null;

function getHostContextNode(rootNode) {
	if (typeof rootNode !== undefined) {
		return (ROOT_NODE_INSTANCE = rootNode.getContext('2d'));
	} else {
		throw new Error(`${rootNode} is undefined.`);
	}
}

// Creates an element with an element type, props and a root instance
function createElement(type, props) {
	const COMPONENTS = {
		[Text]: () => createText(ROOT_NODE_INSTANCE, props),
		default: undefined,
	};

	return COMPONENTS[type]() || COMPONENTS.default;
}

export { createElement, getHostContextNode };
