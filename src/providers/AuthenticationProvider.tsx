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
  relaySignUpMutationVariables,
  relaySignUpMutationResponse,
} from '../__generated__/relaySignUpMutation.graphql';
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
      console.log({ err });
    },
    onCompleted: (res: relaySignUpMutationResponse) => {
      console.log({ res });
    },
  });
  const [userStorage, setUserStorage, loading, clear] = useAsyncStorage(
    '@user'
  );

  useEffect(() => {
    const { username, password, type } = authMutationInput;
    if (type && type === 'login') {
      //TODO: commit login mutation
      console.log(authMutationInput);
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
      console.log(authMutationInput);
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
