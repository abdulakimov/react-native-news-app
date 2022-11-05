import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "23b8g3xi",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skSTU8pdanbotdEu6WSWqIK3qIaiPrzUcdykmmSUK60wTkLbkhWs78rwLcDOyQqYYIPQAMqnSRsO9zjFkuBirbbx7nd4eFePFhGOknxsLm8uCoPs2lvvC9xNN0m82LpKN9TJQI8AtjTPDSwP9Ar13rxRKeMyLNdP6Uo1RlQwLndNTZN8nqVX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
