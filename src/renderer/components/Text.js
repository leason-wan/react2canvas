export function createText(root, newProps) {
	root.font = "48px serif";
	Object.keys(newProps).forEach(propName => {
		const propValue = newProps[propName];
		if (propName === 'children') {
			if (typeof propValue === 'string' || typeof propValue === 'number') {
				root.strokeText(propValue, 10, 50);
			}
		}
	});
}

export const Text = 'TEXT';
