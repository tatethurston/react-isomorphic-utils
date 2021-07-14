import { renderHook } from "@testing-library/react-hooks";
import { useJSEnabled } from ".";

describe(useJSEnabled, () => {
  it("true when on the client and JS is enabled", () => {
    const { result } = renderHook(useJSEnabled);
    expect(result.current).toEqual(true);
  });
});
