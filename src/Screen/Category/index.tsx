import React, {useEffect, useState} from 'react';
import {
  AppHeader,
  AppMenu,
  AppProgressBar,
  AppSearchBox,
  AppText,
  MasterView,
} from '../../Component';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Shared/theme';
import {MENU, MENUCAT} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import FastImage from 'react-native-fast-image';
import VagitarianIcon from '../../../assets/images/vagitarian-icon.svg';

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
}

interface MenuList {
  id: number;
  title: string;
  description?: string;
  items: Array<Item>;
}

const Category = ({navigation, route}: any) => {
  const [search, setSearch] = useState('');
  const [menuList, setMenuList] = useState<Array<MenuList>>([]);
  const [info, setInfo] = useState<any>({});
  const [isLoading, setLoading] = useState(false);
  const {item: parentItem = {}} = route.params || {};

  useEffect(() => {
    // fetchMenuTitleImage();
    // fetchMenuCat();
    setMenuList(parentItem?.our_menu_categories_mobile || []);
  }, []);

  const fetchMenuTitleImage = async () => {
    try {
      let url = `${MENU}${item?.item?.id || 3}`;
      let menuInfo: any = await getRequest(url);
      if (menuInfo) {
        setInfo(menuInfo);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchMenuCat = async () => {
    try {
      let url = `${MENUCAT}${item?.item?.id || 3}`;
      let catList: any = await getRequest(url);
      setLoading(false);
      let sortList = catList.sort((a: any, b: any) => {
        const titleA = a.title.rendered.toUpperCase();
        const titleB = b.title.rendered.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      setMenuList(sortList);
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onMenuPress = (item: any) => {
    navigation.push('CategoryMenuDetail', {item});
  };

  const onSearchClick = () => {
    navigation.push('Search');
  };

  const renderSubCatgoryRow = ({item}: any) => (
    <TouchableOpacity
      style={styles.subCategoryContainer}
      activeOpacity={0.6}
      onPress={() => onMenuPress(item)}>
      <View style={styles.subItemTitleContaier}>
        {item.food_item_title_mobile ? (
          <View style={styles.titleIconContainer}>
            <AppText style={styles.subCatTitle}>
              {item.food_item_title_mobile}
            </AppText>
            {item?.food_menu_icon_mobile ? (
              <VagitarianIcon height={16} />
            ) : null}
          </View>
        ) : null}
        {item?.food_item_price_mobile ? (
          <AppText style={[styles.label, styles.noteLbl]}>
            ${(+item?.food_item_price_mobile)?.toFixed(2)}
          </AppText>
        ) : null}
      </View>
      {item.food_item_content_mobile ? (
        <AppText
          style={[styles.label, styles.subItemDes]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {item.food_item_content_mobile}
        </AppText>
      ) : null}
      <View style={styles.bottomButtonContainer}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={15}
          color={theme.color.primary}
          style={{transform: [{rotateY: '180deg'}]}}
        />
      </View>
    </TouchableOpacity>
  );

  const renderCategoryMenuRow = ({item}: any) => {
    return (
      <View style={styles.menuList}>
        <AppText style={styles.categoryTitle}>
          {item?.our_menu_main_title}
        </AppText>
        {item.our_menu_note_mobile ? (
          <AppText style={styles.label}>{item?.our_menu_note_mobile}</AppText>
        ) : null}
        <View>
          <FlatList
            data={item?.our_menu_list_mobile}
            renderItem={renderSubCatgoryRow}
            keyExtractor={(item, index) => `sub_category_${index}`}
          />
        </View>
      </View>
    );
  };

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader
          render={
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>
                Our Food Menu
                <AppText style={[styles.title, styles.subTitle]}>
                  {' '}
                  (11am to 8pm)
                </AppText>
              </AppText>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            <View style={styles.container}>
              <TouchableOpacity onPress={onSearchClick}>
                <AppSearchBox
                  placeholder="Search Your Menu"
                  value={search}
                  readOnly={true}
                  onChangeText={setSearch}
                />
              </TouchableOpacity>
              <View style={styles.noteContainer}>
                <AppText style={[styles.label, styles.noteLbl]}>
                  {parentItem.mobile__menu_note_title}
                  <AppText style={[styles.label]}>
                    {' '}
                    {parentItem.mobile_menu_note_details}
                  </AppText>
                </AppText>
              </View>
              <View style={styles.imageContainer}>
                <FastImage
                  source={{uri: parentItem?.mobile_food_menu_image}}
                  style={styles.imageMenu}
                  resizeMode="cover"
                />
              </View>
            </View>
            <AppMenu navigation={navigation} />

            {/*style={styles.menuList}*/}
            <View style={[styles.container, {marginTop: 0}]}>
              <FlatList
                contentContainerStyle={styles.menuFlatListContainer}
                // showsVerticalScrollIndicator={false}
                data={menuList}
                renderItem={renderCategoryMenuRow}
                keyExtractor={(item, index) => `category_${index}`}
              />
            </View>
          </>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Category;
