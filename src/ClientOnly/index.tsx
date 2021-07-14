import React, { FC } from "react";
import { useClientOnly } from "../useClientOnly";

interface ClientOnlyProps {
  placeholder?: JSX.Element;
}

/**
 * A component that prevents server side rendering of its' children. Optionally accepts a `placeholder` prop which will be rendered in place of the children on the server.
 */
export const ClientOnly: FC<ClientOnlyProps> = ({
  children,
  placeholder = null,
}) => {
  const isClient = useClientOnly();
  return isClient ? <>{children}</> : placeholder;
};
