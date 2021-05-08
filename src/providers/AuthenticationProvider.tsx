import React, {
  createContext,
  useEffect,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ReactChild,
} from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';
import SIGN_UP_MUTATION, {
  relaySignUpMutation,
  relaySignUpMutationResponse,
} from '../__generated__/relaySignUpMutation.graphql';
import LOG_IN_MUTATION, {
  relayLogInMutation,
  relayLogInMutationResponse,
} from '../__generated__/relayLogInMutation.graphql';
import { useMutation } from 'relay-hooks/lib';

interface AuthenticationProviderProps {
  children: ReactChild;
}
interface AuthInputData {
  username: string;
  password: string;
  type: 'login' | 'register' | undefined;
}

interface AuthContextType {
  userData: { token: string; userId: string };

  setAuthMutationInput: Dispatch<SetStateAction<AuthInputData>>;
}

const AuthenticationContext = createContext<AuthContextType>({
  userData: { token: '', userId: '' },
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
  const [userId, setUserId] = useState<string | null | undefined>('');
  const [createUser] = useMutation<relaySignUpMutation>(SIGN_UP_MUTATION, {
    onError: (err: any) => {},
    onCompleted: (res: relaySignUpMutationResponse) => {
      setUserStorage({
        token: res.createUserMutation?.token,
        userId: res.createUserMutation?.userId,
      });
    },
  });

  const [logInUser] = useMutation<relayLogInMutation>(LOG_IN_MUTATION, {
    onError: (err: any) => {},
    onCompleted: (res: relayLogInMutationResponse) => {

      setUserStorage({
        token: res.loginMutation?.token,
        userId: res.loginMutation?.userId,
      });
    },
  });

  const [userStorage, setUserStorage, loading, clear] = useAsyncStorage(
    '@user'
  );

  useEffect(() => {

    const { username, password, type } = authMutationInput;
    if (type && type === 'login') {
      logInUser({
        variables: {
          input: {
            username,
            password,
          },
        },
      });
    }
    if (type && type === 'register') {
      createUser({
        variables: {
          input: {
            username,
            password,
          },
        },
      });
    }
  }, [authMutationInput]);

  return (
    <AuthenticationContext.Provider
      value={{
        userData: userStorage,
        setAuthMutationInput,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };
