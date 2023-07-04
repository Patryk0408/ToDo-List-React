import Input from "../../Input";
import searchQueryParam from "../searchQueryParamName";
import { Wrapper } from "./styled";
import {
  useLocation,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParam);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParam);
    } else {
      searchParams.set(searchQueryParam, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
