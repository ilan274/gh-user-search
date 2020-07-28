const resultOk = (result, setUserDetails, setError) => {
  setUserDetails(result);
  setError(false);
};

const callApi = async (setUserDetails, setError, setLoading, username) => {
  setLoading(true);
  const url = `https://api.github.com/users/${username}`;
  const fetchResult = await fetch(url);
  const result = await fetchResult.json();
  fetchResult.ok && resultOk(result, setUserDetails, setError);
  !fetchResult.ok && setError(true);
  setLoading(false);
};

export default callApi;
