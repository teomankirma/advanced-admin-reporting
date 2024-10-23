import { useState } from "react";
import { QueryBuilder, formatQuery, RuleGroupType } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.css";
import fields from "./fields";
import getOperators from "./getOperators";
import { Language } from "./types";
import translations from "./translations";
import combinators from "./combinators";
import CombinatorSelector from "./CombinatorSelector";
import ValueEditor from "./ValueEditor";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const [query, setQuery] = useState<RuleGroupType>({
    id: "root",
    combinator: "and",
    rules: [],
  });

  return (
    <>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
      >
        <option value="en">English</option>
        <option value="tr">Turkish</option>
      </select>
      <QueryBuilder
        fields={fields}
        query={query}
        getOperators={getOperators}
        onQueryChange={(q) => setQuery(q)}
        translations={translations[language]}
        combinators={combinators[language]}
        controlElements={{
          combinatorSelector: CombinatorSelector,
          valueEditor: ValueEditor,
        }}
      />
      <pre>{formatQuery(query, "sql")}</pre>
      <pre>{formatQuery(query, "json")}</pre>
    </>
  );
}

export default App;
