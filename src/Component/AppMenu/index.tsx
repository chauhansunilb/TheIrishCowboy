import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../AppText';
import {FlatList} from 'react-native';
import {theme} from '../../Shared/theme';
import {AppButton} from '../AppButon';
import {MENU} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import {removeSpecialCharacter} from '../../Util/Const';

interface AppMenuProps {
  navigation: any;
}

export const AppMenu: FC<AppMenuProps> = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [ourMenuList, setOurMenuList] = useState<any>([]);

  useEffect(() => {
    fetchMenuList();
  }, []);

  const ourMenuPress = (item: any) => {
    navigation.push('Category', {item});
  };

  const renderOurMenuRow = ({item}: any) => (
    <View style={styles.ourMenuItemContainer}>
      <AppButton
        label={item.name}
        containerStyle={styles.ourMenuBtnContainer}
        labelStyle={styles.ourMenuBtnLabel}
        onPress={() => ourMenuPress(item)}
      />
    </View>
  );

  const fetchMenuList = async () => {
    try {
      let url = MENU;
      let menu: any = await getRequest(url);
      if (menu) {
        let tempOurMenu: any = menu.map((x: any) => ({
          // id: x.id,
          ...x,
          name: removeSpecialCharacter(x.our_menu_categories_name),
        }));
        setOurMenuList(tempOurMenu);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  return ourMenuList.length > 0 ? (
    <View style={styles.ourMenuContainer}>
      <AppText style={styles.title}>Our Menu</AppText>
      <FlatList
        contentContainerStyle={styles.ourContainerFlatList}
        showsHorizontalScrollIndicator={false}
        data={ourMenuList}
        horizontal={true}
        renderItem={renderOurMenuRow}
        keyExtractor={(item, index) => `menu_${index}`}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  ourMenuContainer: {
    marginTop: theme.padding.sm,
  },
  title: {
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.title,
    paddingHorizontal: theme.padding.sm,
  },
  ourContainerFlatList: {
    marginTop: theme.padding.sm,
    paddingLeft: theme.padding.sm,
  },
  ourMenuItemContainer: {
    marginEnd: theme.padding.xsm,
  },
  ourMenuBtnContainer: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  ourMenuBtnLabel: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
});
