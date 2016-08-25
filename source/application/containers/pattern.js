import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import md5 from 'md5';

import urlQuery from '../utils/url-query';
import navigate from '../utils/navigate';
import Pattern from '../components/pattern';
import getPatternData from '../actions/get-pattern-data';

export default connect(mapState, mapDispatch)(Pattern);

function mapState(state) {
	return {
		activeSource: state.sourceId || '',
		base: state.base,
		code: selectCode(state),
		dependencies: selectDependencies(state),
		dependents: selectDependents(state),
		display: selectDisplay(state),
		environment: state.environment,
		environments: selectEnvironments(state),
		flag: selectFlag(state),
		id: selectId(state),
		loading: selectLoading(state),
		location: selectLocation(state),
		name: selectName(state),
		reloading: selectReloading(state),
		sourceExpanded: state.sourceExpanded,
		tags: selectTags(state),
		version: selectVersion(state)
	};
}

function mapDispatch(dispatch, own) {
	const {location} = own;
	return bindActionCreators({
		onEnvironmentChange: e => {
			const parsed = urlQuery.parse(location.pathname);
			const pathname = urlQuery.format({
				...parsed,
				query: {
					environment: e.target.value
				}
			});
			return push({
				pathname,
				query: location.query
			});
		},
		reload: ({id, query, base}) => {
			return getPatternData({
				id,
				query,
				options: {
					base,
					loading: false,
					relading: true
				}
			});
		}
	}, dispatch);
}

function selectPattern(state) {
	return state.patterns ||
		navigate(state.id, state.navigation) ||
		{};
}

function selectManifest(state) {
	const pattern = selectPattern(state);
	return pattern.manifest || {};
}

function getManifestSelector(name, defaultValue) {
	return state => {
		const manifest = selectManifest(state);
		const value = manifest[name];
		return typeof value === 'undefined' ? defaultValue : value;
	};
}

function selectId(state) {
	return state.id || selectPattern(state).id;
}

function selectName(state) {
	const pattern = selectPattern(state);
	const name = getManifestSelector('name')(state);
	const displayName = getManifestSelector('displayName')(state);
	return name || displayName || pattern.id || '';
}

function selectEnvironments(state) {
	const environments = getManifestSelector('demoEnvironments', [])(state);
	return environments.map(env => {
		return {
			id: env.name,
			name: env.displayName || env.name
		};
	});
}

function selectFlag(state) {
	return getManifestSelector('flag', '')(state);
}

function selectTags(state) {
	return getManifestSelector('tags', [])(state);
}

function selectVersion(state) {
	return getManifestSelector('version', '')(state);
}

function selectDisplay(state) {
	return getManifestSelector('display', true)(state);
}

function selectDependentPatterns(state) {
	return getManifestSelector('dependentPatterns', {})(state);
}

function selectDependents(state) {
	return Object.values(selectDependentPatterns(state))
		.filter(pattern => pattern.display)
		.reduce((registry, pattern) => {
			const navPattern = navigate(pattern.id, state.navigation) || {manifest: {}};
			const patternEntries = Object.entries(navPattern.manifest.patterns);
			const localNames = patternEntries
				.filter(entry => entry[1] === state.id)
				.map(entry => entry[0]);

			const amend = localNames.map(localName => {
				return {
					id: pattern.id,
					name: pattern.displayName || pattern.name,
					localName,
					version: pattern.version
				};
			});

			return [...registry, ...amend];
		}, []);
}

function selectDependencies(state) {
	const rootPattern = selectPattern(state);
	return Object.entries(rootPattern.dependencies || {})
		.map(entry => {
			const [localName, pattern] = entry;
			const navPattern = navigate(pattern.id, state.navigation) || {manifest: {}};

			return {
				id: pattern.id,
				name: navPattern.manifest.displayName || navPattern.manifest.name,
				localName,
				version: navPattern.manifest.version
			};
		});
}

function selectLoading(state) {
	const pattern = selectPattern(state);
	return pattern.loading || true;
}

function selectReloading(state) {
	const pattern = selectPattern(state);
	return pattern.reloading || false;
}

function selectLocation(state) {
	return state.routing.locationBeforeTransitions;
}

function selectCode(state) {
	const pattern = selectPattern(state);
	const results = pattern.results || {};
	const envResults = results.index; // TODO: this is an atavism, remove it

	return Object.values(envResults || {})
		.map(result => {
			const sourceId = md5(result.source);
			const concern = result.concern || 'demo';
			const type = result.type || 'source';
			const typeName = type === 'source' ? 'Source' : 'Result';
			const language = type === 'source' ? result.in : result.out;

			return {
				active: state.sourceId === sourceId,
				id: sourceId,
				name: result.name,
				language,
				source: result[type],
				type: typeName,
				concern
			};
		});
}