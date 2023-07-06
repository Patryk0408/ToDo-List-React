import Input from "../../Input";
import searchQueryParam from "../../searchQueryParamName";
import { Wrapper } from "./styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParam);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParam,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
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
