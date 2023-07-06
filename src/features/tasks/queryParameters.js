import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return queryParams.get(key) || "";
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value !== undefined && value !== "") {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    history.replace({
      search: searchParams.toString(),
    });
  };

  return replaceQueryParameter;
};
