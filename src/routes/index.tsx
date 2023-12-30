import { component$ } from "@builder.io/qwik";
import { StaticGenerateHandler, routeLoader$ } from "@builder.io/qwik-city";
import { fetchOneEntry, Content, fetchEntries } from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "~/components/builder-registry";

// Define Builder's public API key and content model.
export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const BUILDER_MODEL = "page";

// Define a route loader function that loads 
// content from Builder based on the URL.
export const useBuilderContent = routeLoader$(async () => {
  // Fetch content for the specified model using the API key.
  const builderContent = await fetchOneEntry({
    model: BUILDER_MODEL,
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
  });

  // Return the fetched content.
  return builderContent;
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const entries = await fetchEntries({
    model: BUILDER_MODEL,
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
  })
  console.log('constonStaticGenerate:StaticGenerateHandler= ~ entries:', entries)
  if (!entries) return {}
  
  return {
    params: entries.results.map((e) => ({
      id: e.id!
    }))
  }
}

// Define a component that renders Builder content 
// using Qwik's Content component.
export default component$(() => {
  // Call the useBuilderContent function to get the content.
  const content = useBuilderContent();
  // Specify the content model, pass the fetched content,
  // and provide the Public API Key

  return (
    <Content
      customComponents={CUSTOM_COMPONENTS}
      model={BUILDER_MODEL}         
      content={content.value} 
      apiKey={BUILDER_PUBLIC_API_KEY} 
    />
  );
});
