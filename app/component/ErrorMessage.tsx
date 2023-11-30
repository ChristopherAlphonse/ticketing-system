import React, { PropsWithChildren } from 'react';
import { Text } from '@radix-ui/themes';

interface ErrorMessageProps extends PropsWithChildren<{}> {}

export default function ErrorMessage({ children }: ErrorMessageProps): JSX.Element | null {
  if (!children) return null;

  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
}
