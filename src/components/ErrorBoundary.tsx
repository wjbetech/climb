import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center px-4">
            <h2 className="text-2xl font-montserrat font-bold mb-4 text-black">
              Something went wrong
            </h2>
            <p className="text-gray-700 mb-6 font-light tracking-wide">
              We're sorry, but something unexpected happened. Please refresh the
              page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 font-light tracking-wide"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
