import {createAction, handleActions} from 'redux-actions';

const ident = i => i;
const asyncIdent = async i => i;

export function createPromiseThunkAction(name, rawCreator) {
	const creator = rawCreator || asyncIdent;
	const fn = payload => {
		return async dispatch => {
			payload.dispatch = dispatch;
			dispatch(createAction(`${name}_START`)(payload));
			const delayedTimer = global.setTimeout(() => {
				dispatch(createAction(`${name}_DELAYED`)(payload));
			}, 1000);
			try {
				const result = await creator(payload);
				result.dispatch = dispatch;
				global.clearTimeout(delayedTimer);
				dispatch(createAction(`${name}_SUCCESS`)(result));
				return result;
			} catch (error) {
				error.dispatch = dispatch;
				global.clearTimeout(delayedTimer);
				dispatch(createAction(`${name}_THROWS`)(error));
				return error;
			}
		};
	};
	fn.__name = name;
	return fn;
}

export function handlePromiseThunkAction(rawName, handler, defaults) {
	const name = rawName.__name || rawName;
	const reducer = handleActions({
		[`${name}_START`]: handler.start || ident,
		[`${name}_DELAYED`]: handler.delayed || ident,
		[`${name}_SUCCESS`]: handler.success || ident,
		[`${name}_THROWS`]: handler.throws || ident
	}, defaults);
	return reducer;
}
