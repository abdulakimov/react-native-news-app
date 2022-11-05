import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import news from "./news";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([news]),
});
