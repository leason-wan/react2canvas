export function createText(root, newProps) {
	Object.keys(newProps).forEach(propName => {
		const propValue = newProps[propName];
		if (propName === 'children') {
			if (typeof propValue === 'string' || typeof propValue === 'number') {
				const fontSize = newProps.size || '48px';
				const left = newProps.left || 50;
				const top = newProps.top || 50;
				root.font = `${fontSize} serif`;
				root.strokeText(propValue, left, top);
			}
		}
	});
}

export const Text = 'TEXT';
