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
  token: string | null;
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

  const [createUser] = useMutation<relaySignUpMutation>(SIGN_UP_MUTATION, {
    onError: (err: any) => {

    },
    onCompleted: (res: relaySignUpMutationResponse) => {
      setUserStorage(res.createUserMutation?.token);
    },
  });

  const [logInUser] = useMutation<relayLogInMutation>(LOG_IN_MUTATION, {
    onError: (err: any) => {

    },
    onCompleted: (res: relayLogInMutationResponse) => {
      setUserStorage(res.loginMutation?.token);
    },
  });

  const [userStorage, setUserStorage, loading, clear] = useAsyncStorage(
    '@user'
  );

  useEffect(() => {
    //clear();
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
      value={{ token: userStorage, setAuthMutationInput }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export { AuthenticationProvider, AuthenticationContext };
