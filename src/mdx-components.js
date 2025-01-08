import { CodeHeader } from "./components/mdx/codeHeader";
import { ChartLine } from "./components/ui/chartLine";

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    pre: ({ children }) => (
      <pre style={{ marginTop: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>{children}</pre>
    ),
    CodeHeader,
    ChartLine,
    ...components,
  };
}
