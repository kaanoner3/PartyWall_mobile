import React, {
  createContext,
  useReducer,
  useEffect,
  FC,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';

interface AuthenticationProviderProps {
  children: FC;
}
interface AuthInputData {
  username: string;
  password: string;
  type: 'login' | 'register' | undefined;
}

interface AuthContextType {
  token: string;
  setAuthMutationInput: Dispatch<SetStateAction<AuthInputData>>;
}

const AuthenticationContext = createContext<AuthContextType>({
  token: '',
  setAuthMutationInput: () => {},
});

const AuthenticationProvider: FC<AuthenticationProviderProps> = ({
  children,
}) => {
  const [authMutationInput, setAuthMutationInput] = useState<AuthInputData>({
    username: '',
    password: '',
    type: undefined,
  });

  const [userStorage, setUserStorage, loading, clear] = useAsyncStorage(
    '@user',
    null
  );

  useEffect(() => {
    const { username, password, type } = authMutationInput;
    if (type && type === 'login') {
      //TODO: commit login mutation
    }
    if (type && type === 'register') {
      //TODO: commit signup mutation
    }
  }, [authMutationInput]);

  return (
    <AuthenticationContext.Provider
      value={{ token: userStorage, setAuthMutationInput }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };
