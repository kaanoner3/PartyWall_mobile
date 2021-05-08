import React, { FC, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { STORE_OR_NETWORK, useQuery } from 'relay-hooks/lib';
import USER_ITEMS_QUERY, {
  relayUserItemsQuery,
  relayUserItemsQueryResponse,
  relayUserItemsQueryVariables,
} from '../../__generated__/relayUserItemsQuery.graphql';
import { useFetchResult } from '../../hooks/useFetchResult';
import { AuthenticationContext } from '../../providers/AuthenticationProvider';
import ListItemMolecule from '../molecules/ListItemMolecule';
import ItemListOrganism from './ItemListOrganism';
import HeaderMolecule from '../molecules/HeaderMolecule';
import { useNavigation } from '@react-navigation/native';

interface UserProfileOrganismProps {}

const UserProfileOrganism: FC<UserProfileOrganismProps> = ({}) => {
  const [userItems, setUserItems] = useState<ItemType[]>([]);
  const { userData } = useContext(AuthenticationContext);
  const navigation = useNavigation();

  const { error, data } = useQuery<relayUserItemsQuery>(
    USER_ITEMS_QUERY,
    {
      userId: userData.userId,
    },
    { fetchPolicy: STORE_OR_NETWORK }
  );

  const { status, payload } = useFetchResult(error, data);

  useEffect(() => {
    if (payload && payload.userQuery?.person?.items.length > 0) {
      setUserItems(payload.userQuery?.person?.items);
    }
  }, [payload]);

  const redirectCreateItemPage = () => {};
  return (
    <View style={styles.container}>
      <HeaderMolecule
        onActionPress={redirectCreateItemPage}
        showActionButtons
        title={'My Items'}
        titleStyle={styles.titleStyle}
      />
      <ItemListOrganism listType={'userItems'} listData={userItems} />
    </View>
  );
};

export default UserProfileOrganism;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 32,
    color: '#fff',
  },
});
