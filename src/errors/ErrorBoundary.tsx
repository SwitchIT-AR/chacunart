import React, { Component, ReactNode } from 'react';

import { ErrorPage } from './ErrorPage';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Caught an error:", error, errorInfo);
    // Log the error to an external service if desired
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      const errorMessage = `
        Ups... Algo esta pasando en la aplicación. ${error.message};
        }`
      return (
        <ErrorPage message={errorMessage} code={'Error en codigo'} refresh volver />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;