import { useHistory } from 'react-router';

const useGitHubAuthentication = () => {
	const history = useHistory();

	const handleAuthenticationRequest = () => {
		const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_REDIRECT_URI } = process.env;
		history.push(
			`https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${REACT_APP_GITHUB_REDIRECT_URI}`
		);
	};

	return { handleAuthenticationRequest };
};

export default useGitHubAuthentication;
