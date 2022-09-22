import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// Importing the newly added schemas
import car from "./car";
import banner from "./banner";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([car, banner]),
});
