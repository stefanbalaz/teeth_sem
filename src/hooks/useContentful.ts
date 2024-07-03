import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_API,
  });

  const getData = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "teeth",
        select: ["fields"],
      });
      return entries.items;
    } catch (error) {
      console.error("Error fetching data from Contentful:", error);
      return [];
    }
  };

  return { getData };
};

export default useContentful;
