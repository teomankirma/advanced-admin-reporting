import { useState } from "react";
import { QueryBuilder, formatQuery, RuleGroupType } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.css";
import fields from "./fields";
import getOperators from "./getOperators";

function App() {
  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: [],
  });

  return (
    <>
      <QueryBuilder
        fields={fields}
        query={query}
        getOperators={getOperators}
        onQueryChange={(q) => setQuery(q)}
      />
      <pre>{formatQuery(query, "sql")}</pre>
      <pre>{formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;
