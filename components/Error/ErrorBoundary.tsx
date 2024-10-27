import {Alert} from 'antd';
import {ReactNode} from "react";
import {AppContextType} from "@/context/PokemonContext";

const ErrorBoundary = ({error, children}: { error?: AppContextType['error'], children: ReactNode }) => {
  return (
    <>
      {error?.status ? (
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
        />
      ) : (
        children
      )}
    </>
  );
}

export default ErrorBoundary;
