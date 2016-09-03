/* eslint-disable max-len */
const globals = [{
	d: 'M12 20.5c-3.046 0-5.716-1.616-7.217-4.03l.16.065 1.75-4.25c.08-.196.075-.416-.015-.607l-1.936-4.08c.595-.977 1.38-1.824 2.305-2.49L8.25 6.31V9c0 .116.028.23.08.335l3 6c.1.2.282.343.498.394.057.01.115.02.172.02.16 0 .32-.06.45-.15l4-3c.167-.13.275-.32.296-.53l.283-2.746 2.83-.543c.404.99.632 2.075.632 3.21 0 4.688-3.814 8.5-8.5 8.5M3.92 9.37l1.258 2.65-1.172 2.848C3.686 13.97 3.5 13.008 3.5 12c0-.92.15-1.802.422-2.63M19.138 7.4l-2.94.564c-.324.06-.57.33-.604.66l-.306 2.972-3.02 2.264L9.75 8.823V6c0-.2-.08-.39-.22-.53L8.38 4.32c1.1-.52 2.325-.82 3.62-.82 2.992 0 5.623 1.558 7.138 3.9M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2'
}];

const environment = globals;

const atoms = [
	{
		d: 'M12 3c-1.39 0-2.7.324-3.874.886.355.357.608.807.75 1.305.952-.436 2.008-.69 3.124-.69 4.135 0 7.5 3.367 7.5 7.5s-3.365 7.5-7.5 7.5-7.5-3.363-7.5-7.5c0-1.114.252-2.17.69-3.123-.497-.14-.947-.395-1.304-.75C3.324 9.3 3 10.612 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9'
	},
	{
		d: 'M13.5 12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5M6 7.5c.828 0 1.5-.672 1.5-1.5S6.828 4.5 6 4.5 4.5 5.172 4.5 6 5.172 7.5 6 7.5'
	}
];

const molecules = [{
	d: 'M6.372 4.75h11.255v1.5H6.372zM12.9 16.172c.32.124.617.31.868.56.12.12.222.248.312.383l5.626-9.143c-.514-.06-.99-.274-1.377-.624l-5.43 8.824zM6.08 6.886c-.09.135-.193.263-.312.382-.25.25-.548.437-.87.56l5.43 8.825c.388-.35.864-.564 1.378-.624L6.08 6.883zm4.86 10.554c-.587.586-.587 1.536 0 2.12.585.587 1.535.587 2.12 0 .586-.584.586-1.534 0-2.12-.585-.586-1.535-.586-2.12 0m10.12-13c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12m-16 0c-.585-.586-1.535-.586-2.12 0-.586.586-.586 1.536 0 2.12.585.587 1.535.587 2.12 0 .587-.584.587-1.534 0-2.12'
}];

const polymers = [{
	d: 'M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.008-1.078-.207-1.495-.528l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567 0 1.083.2 1.5.52l-.01-4.04c-.418.32-.933.514-1.498.515m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238m11.064.152l-4.79 2.392v-5.41c-.238.076-.486.127-.75.127-.262 0-.51-.06-.75-.13v5.44l-4.79-2.4c-.088.51-.327.98-.68 1.34l4.512 2.26-4.502 2.24c.35.36.58.82.67 1.34l4.79-2.397v5.42c.24-.074.48-.127.75-.127s.51.05.75.126v-5.38l4.78 2.394c.077-.516.31-.983.653-1.35l-4.543-2.27 4.56-2.27c-.35-.36-.584-.827-.666-1.343M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m0-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5'
}];

const organisms = [{
	d: 'M6.475 15.75c.008.084.025.165.025.25 0 .48-.142.922-.376 1.302l3.766 2.37c.287-.455.715-.808 1.224-1.002l-4.64-2.92zm11.05-.004l-4.64 2.923c.51.19.937.54 1.225 1l3.765-2.37c-.233-.38-.375-.83-.375-1.3 0-.09.017-.17.026-.26m2.454-5.25c-.564-.004-1.078-.203-1.495-.524l-.032 4.08c.417-.33.934-.54 1.505-.55l.023-3.005zm-15.973.01l.008 3c.567.003 1.083.203 1.5.524l-.01-4.042c-.418.318-.933.515-1.498.516m13.515-2.28c-.007-.08-.022-.15-.022-.22 0-.49.145-.94.386-1.32l-3.773-2.36c-.285.45-.71.81-1.22 1l4.63 2.893zm-11.046.01l4.635-2.91c-.5-.194-.93-.548-1.22-1.003L6.12 6.69c.237.383.38.83.38 1.31 0 .082-.016.16-.024.238M4 9.5c.828 0 1.5-.672 1.5-1.5S4.828 6.5 4 6.5 2.5 7.172 2.5 8 3.172 9.5 4 9.5m8-5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5m-8 10c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8 5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-8-4c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m8-1c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5'
}];

const ecospheres = [{
	d: 'M18.052 15.315c0 .287-.162.55-.418.677l-5.296 2.648c-.107.053-.222.08-.338.08-.116 0-.232-.027-.34-.08l-5.295-2.648c-.256-.128-.418-.39-.418-.677v-6.63c0-.287.162-.55.418-.677L11.66 5.36c.108-.053.224-.08.34-.08.116 0 .23.027.338.08l5.296 2.648c.256.128.418.39.418.677v6.63zm.253-8.65L13.01 4.02c-.313-.155-.662-.238-1.01-.238-.35 0-.698.083-1.01.238L5.696 6.666c-.77.385-1.248 1.16-1.248 2.02v6.63c0 .86.478 1.633 1.247 2.017l5.296 2.648c.315.16.66.24 1.01.24s.7-.08 1.01-.235l5.298-2.65c.77-.383 1.247-1.157 1.247-2.017v-6.63c0-.86-.478-1.634-1.247-2.02'
}];

const home = [{
	d: 'M12.055 2l-11 10h1.89v9.02c0 .524.422.95.943.95h7.223V18.2H13v3.77l7.103.03h.008c.524 0 .947-.424.947-.95v-9.01l1.89-.04-10.89-10zm-.005 2.032l7.505 6.892v9.574l-5.055-.023V16.7H9.61v3.77H4.445v-9.525L12.05 4.03'
}];

const patternplate = [{
	d: 'M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm-2 15.5v-2H8v2h2zm3-3v-2h-2v2h2zm-3 0v-2H8v2h2zm6 0v-2h-2v2h2zm-6-3v-2H8v2h2zm6 0v-2h-2v2h2zm-3-3v-2h-2v2h2zm-3 0v-2H8v2h2zm6 0v-2h-2v2h2z'
}];

const dark = [{
	d: 'M12 16v3.227L5.52 15.15l-.02-6.3L12 4.77V8l-2 2 4 4-2 2zm0-13L4 8.02l.02 7.96L12 21l7.937-5L20 8l-8-5z'
}];

const light = [{
	d: 'M12 8V4.773l6.48 4.078.018 6.3L12 19.23V16l2-2-4-4 2-2zm0 13l8-5.02-.02-7.96L12 3 4.063 8 4 16l8 5z'
}];

const fullscreen = [{
	d: 'M9 3.75v-1.5l-5 .003c-.966 0-1.75.785-1.75 1.75V9h1.5V4.813L8.38 9.44l1.06-1.06-4.63-4.63H9zm-.62 10.81l-4.63 4.626V15h-1.5v4.997c0 .964.785 1.75 1.75 1.75l5 .002v-1.5l-4.19-.005 4.63-4.626-1.06-1.06zM20 2.25l-5-.005v1.5l4.194.003-4.634 4.63 1.06 1.06 4.63-4.624v4.18h1.5V4c0-.966-.785-1.75-1.75-1.75m.25 16.936l-4.63-4.626-1.06 1.06 4.634 4.63-4.194.005v1.5l5-.004c.965 0 1.75-.782 1.75-1.75v-4.993h-1.5v4.18z'
}];

const arrowLeft = [{
	d: 'M9.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z'
}];

const arrowRight = [{
	d: 'm 14.202,10.767 c 0.14,0.147 0.258,0.31 0.344,0.494 0.215,0.464 0.215,1.01 0,1.474 -0.085,0.185 -0.203,0.347 -0.343,0.494 L 10.66,16.775 9.6,15.715 c 1.183,-1.186 2.46,-2.285 3.55,-3.558 0.058,-0.075 0.073,-0.176 0.033,-0.262 -0.013,-0.03 -0.033,-0.055 -0.056,-0.08 L 9.601,8.29 l 1.06,-1.06 3.54,3.54 z'
}];

const arrowDoubleLeft = [
	{
		d: 'M7.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z'
	},
	{
		d: 'M12.452 13.233c-.14-.148-.258-.31-.344-.494-.215-.465-.215-1.01 0-1.475.085-.184.203-.346.343-.494l3.543-3.544 1.06 1.06c-1.183 1.186-2.46 2.285-3.55 3.558-.058.075-.073.175-.033.262.013.03.033.054.056.078l3.527 3.527-1.06 1.06-3.54-3.54z'
	}
];

const arrowDoubleRight = [
	{
		d: 'M16.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L11.947 8.29l1.06-1.06 3.54 3.54z'
	},
	{
		d: 'M11.548 10.767c.14.147.258.31.344.494.215.464.215 1.01 0 1.474-.085.185-.203.347-.343.494l-3.543 3.546-1.06-1.06c1.183-1.186 2.46-2.285 3.55-3.558.058-.075.073-.176.033-.262-.013-.03-.033-.055-.056-.08L6.947 8.29l1.06-1.06 3.54 3.54z'
	}
];

const folder = [{
	d: 'M10.5 4.5h-8v14c0 .552.448 1 1 1h17c.552 0 1-.448 1-1v-11h-11v-3zM9 6v3h11v9H4V6h5'
}];

const pattern = [{
	d: 'M12.75 18.948v-7.412c.846-.34 2.457-1.153 5.75-2.892v7.43l-5.75 2.874zM5.5 8.588l5.75 2.874v7.486L5.5 16.073V8.588zm6.5-3.91l5.546 2.772c-3.208 1.687-4.896 2.514-5.47 2.75l-5.56-2.78L12 4.676zm7.447 2.046l-7-3.5c-.14-.07-.294-.106-.447-.106-.153 0-.306.035-.447.106l-7 3.5c-.34.17-.553.515-.553.894v8.764c0 .38.214.725.553.894l7 3.5c.14.07.294.106.447.106.153 0 .307-.035.447-.106l7-3.5c.34-.17.553-.515.553-.894V7.618c0-.38-.214-.725-.553-.894'
}];

const dependencies = [{
	d: 'M9.453 20.026L6.75 21.378v-4.17l3.256-1.627v3.56c0 .38-.214.73-.553.9m-6.906 0c-.34-.17-.553-.515-.553-.893v-3.55l3.256 1.62v4.17L2.547 20.03zm3.006-7.062c.14-.07.294-.106.447-.106.153 0 .306.036.447.106l2.72 1.36L6 15.906 2.833 14.32l2.72-1.36zm4.57.16L7.12 11.62c-.345-.17-.732-.263-1.118-.263-.386 0-.773.09-1.118.26L1.878 13.12c-.854.423-1.384 1.28-1.384 2.233v3.77c0 .953.53 1.81 1.382 2.237l3.006 1.503c.345.174.732.266 1.118.266.386 0 .773-.09 1.118-.27l3.006-1.505c.852-.427 1.382-1.283 1.382-2.236v-3.77c0-.954-.53-1.81-1.382-2.237m11.33 6.906l-2.704 1.35V17.2l3.256-1.625v3.55c0 .38-.214.728-.553.897m-6.906 0c-.34-.17-.553-.517-.553-.895v-3.55l3.256 1.627v4.17l-2.703-1.353zm3.006-7.064c.14-.07.294-.104.447-.104.153 0 .306.04.447.11l2.72 1.36L18 15.91l-3.167-1.583 2.72-1.36zm4.57.16l-3.005-1.5c-.345-.17-.732-.262-1.118-.262-.386 0-.773.097-1.118.27l-3.006 1.502c-.852.425-1.382 1.28-1.382 2.234v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.17.732.262 1.118.262.386 0 .773-.092 1.118-.264l3.006-1.5c.852-.43 1.382-1.287 1.382-2.24v-3.77c0-.953-.53-1.81-1.382-2.236M8.547 9.53c-.34-.17-.553-.516-.553-.894v-3.55l3.256 1.627v4.17L8.547 9.53zm3.006-7.063c.14-.07.294-.106.447-.106.153 0 .306.04.447.11l2.72 1.36L12 5.41 8.833 3.827l2.72-1.36zm3.9 7.063l-2.703 1.352v-4.17l3.256-1.627v3.55c0 .38-.214.726-.553.895m.67 1.342c.853-.427 1.383-1.283 1.383-2.236V4.864c0-.953-.53-1.81-1.382-2.236l-3.006-1.503C12.773.953 12.386.86 12 .86c-.386 0-.773.093-1.118.265L7.876 2.628c-.852.427-1.382 1.283-1.382 2.236v3.772c0 .952.53 1.81 1.382 2.236l3.006 1.503c.345.172.732.264 1.118.264.386 0 .773-.1 1.118-.27l3.006-1.51z'
}];

const reload = [{
	d: 'M17.266 6.664C15.91 5.327 14.05 4.5 12 4.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5c0-.544-.058-1.074-.168-1.586h1.53C20.95 10.93 21 11.46 21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.453 0 4.677.98 6.3 2.572v-.986h1.5v3.578h-3.578v-1.5h1.044zM12 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5c.828 0 1.5.673 1.5 1.5s-.672 1.5-1.5 1.5z'
}];

const search = [{
	d: 'M8.65 14.248c-.376-.46-.697-.962-.955-1.496-.335-.695-.56-1.44-.668-2.205-.11-.787-.096-1.59.044-2.373.13-.726.37-1.432.71-2.09.75-1.448 1.96-2.636 3.43-3.343.64-.3 1.32-.52 2.02-.64.35-.05.69-.08 1.04-.09h.29c.35.01.7.03 1.04.09.7.11 1.39.32 2.03.62 1.53.717 2.8 1.95 3.55 3.466.32.63.54 1.31.67 2.006.14.78.16 1.584.05 2.37-.106.76-.332 1.51-.667 2.204-.393.81-.933 1.55-1.586 2.174-.675.643-1.472 1.16-2.34 1.515-.895.365-1.862.553-2.832.553s-1.933-.186-2.83-.553c-.684-.28-1.325-.66-1.9-1.13-2.09 2.21-4.294 4.307-6.437 6.464-.09.08-.186.15-.3.187-.1.034-.205.046-.31.035-.072-.01-.145-.03-.213-.058-.308-.13-.497-.455-.454-.79.02-.15.088-.28.184-.395 2.09-2.23 4.3-4.343 6.46-6.506zM14.377 3.5c-.28.006-.56.027-.836.07-.56.085-1.1.25-1.62.49-1.16.542-2.13 1.457-2.74 2.58-.28.518-.48 1.075-.6 1.65-.13.65-.15 1.318-.07 1.974.08.612.25 1.21.52 1.77.31.655.73 1.253 1.25 1.758.54.523 1.17.945 1.86 1.236.715.302 1.486.462 2.26.472.777.01 1.554-.13 2.277-.416.695-.275 1.34-.682 1.885-1.192.53-.492.97-1.08 1.29-1.726.276-.55.464-1.144.557-1.753.1-.63.09-1.273-.01-1.9-.094-.56-.266-1.103-.51-1.613-.58-1.197-1.555-2.185-2.744-2.776-.505-.252-1.047-.43-1.603-.53-.273-.05-.55-.077-.83-.09-.1-.003-.204-.004-.31-.004z'
}];

const documentation = [
	{
		d: 'M18.375 16.625h-9v-13h9v13zm-10.5-14.5v15c0 .552.447 1 1 1h11v-16h-12z'
	},
	{
		d: 'M14.125 20.375h-8.25c-.137 0-.25-.112-.25-.25V6.875h1.25v-1.5h-2.75v14.75c0 .965.786 1.75 1.75 1.75h9.75v-2.75h-1.5v1.25z'
	},
	{
		tagName: 'circle',
		cx: 14,
		cy: 6.5,
		r: 1.5
	},
	{
		d: 'M14.75 9h.75v1.5h-.75v3H16V15h-4v-1.5h1.25v-3h-.75V9h.75v-.004h1.5V9z'
	}
];

const code = documentation;

export default {
	'arrow-double-left': () => arrowDoubleLeft,
	'arrow-double-right': () => arrowDoubleRight,
	'arrow-left': () => arrowLeft,
	'arrow-right': () => arrowRight,
	'atoms': () => atoms,
	'code': () => code,
	'dark': () => dark,
	'dependencies': () => dependencies,
	'documentation': () => documentation,
	'ecospheres': () => ecospheres,
	'environment': () => environment,
	'folder': () => folder,
	'fullscreen': () => fullscreen,
	'globals': () => globals,
	'home': () => home,
	'light': () => light,
	'molecules': () => molecules,
	'organisms': () => organisms,
	'pattern': () => pattern,
	'patternplate': () => patternplate,
	'polymers': () => polymers,
	'reload': () => reload,
	'search': () => search,
	'checkers': () => checkers(),
	'checkers-inverted': () => checkers(true)
};

function checkers(inverted) {
	const length = 18;
	const count = 5;
	const dim = length / count;
	const offset = (24 - length) / 2;

	const fields = range(count * count)
		.map((_, i) => {
			const x = i % count;
			const y = (i - x) / count;
			const filled = !inverted && y % 2 === 0 ?
				x % 2 === 0 :
				x % 2 !== 0;

			if (!filled) {
				return null;
			}

			return rect({
				x: offset + x * dim,
				y: offset + y * dim,
				width: dim,
				height: dim
			});
		})
		.filter(Boolean);

	return join(fields);
}

function rect(props) {
	const {width, height, x, y, ...p} = props;
	return {
		...p,
		d: `M${x},${y}h${width}v${height}h-${width}z`
	};
}

function range(count) {
	return Array(count)
		.fill(true);
}

function join(paths) {
	const d = paths.map(path => path.d).join('');
	return [{
		d
	}];
}
