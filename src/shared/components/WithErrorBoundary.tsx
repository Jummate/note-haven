import { ComponentType, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type WithErrorBoundaryOptions = {
  FallbackComponent: React.ComponentType<{
    error: Error;
    resetErrorBoundary: () => void;
  }>;
  suspenseFallback?: React.ReactNode;
  onError?: (error: Error, info: React.ErrorInfo) => void;
};

export function withErrorBoundary<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithErrorBoundaryOptions,
) {
  const {
    FallbackComponent,
    suspenseFallback = <div>Loading...</div>,
    onError = (error, info) => {
      if (import.meta.env.MODE === 'production') {
        // logToMonitoringService({ error, componentStack: info.componentStack });
      } else {
        console.error('Error caught by boundary:', error);
        console.error(info.componentStack);
      }
    },
  } = options;

  return function ErrorWrappedComponent(props: P) {
    return (
      <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
        <Suspense fallback={suspenseFallback}>
          <WrappedComponent {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };
}
