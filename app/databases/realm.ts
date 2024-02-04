import Realm from "realm";
import { ClientSchema } from "./schemas/ClientSchemas";

export const getRealm = async () =>
  await Realm.open({
    path: "vidyaCodeApp",
    schema: [ClientSchema],
  });
