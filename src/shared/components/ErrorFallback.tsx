// shared/components/ErrorFallback.tsx

import { FallbackProps } from 'react-error-boundary';
import Button from './Button';

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="p-4 text-center max-w-md">
      <h2 className="text-lg font-semibold text-red-600 mb-2">
        Something went wrong:
      </h2>
      <pre className="text-sm text-red-500 mb-4">{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  );
}
