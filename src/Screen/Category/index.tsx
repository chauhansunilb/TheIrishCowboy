import React, {useEffect, useState} from 'react';
import {
  AppHeader,
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
  const [isLoading, setLoading] = useState(true);
  const item = route.params;

  useEffect(() => {
    fetchMenuTitleImage();
    fetchMenuCat();
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
        {item.food_item_title ? (
          <AppText style={styles.subCatTitle}>{item.food_item_title}</AppText>
        ) : null}
        {item?.food_item_price ? (
          <AppText style={[styles.label, styles.noteLbl]}>
            ${Math.floor(item?.food_item_price)?.toFixed(2)}
          </AppText>
        ) : null}
      </View>
      {item.food_item_content ? (
        <AppText style={[styles.label, styles.subItemDes]}>
          {item.food_item_content}
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

  const renderCategoryMenuRow = ({item}: any) => (
    <View style={styles.menuList}>
      <AppText style={styles.categoryTitle}>{item?.title?.rendered}</AppText>
      {item.description ? (
        <AppText style={styles.label}>{item?.acf?.food_menu_note}</AppText>
      ) : null}
      <View>
        <FlatList
          data={item?.acf?.food_menu_list}
          renderItem={renderSubCatgoryRow}
          keyExtractor={(item, index) => `sub_category_${index}`}
        />
      </View>
    </View>
  );

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader
          render={
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>Our Food Menu</AppText>
              <AppText style={[styles.title, styles.subTitle]}>
                (11am to 8pm)
              </AppText>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
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
                {info?.acf?.menu_note_title}
                <AppText style={[styles.label]}>
                  {' '}
                  {info?.acf?.menu_note_details}
                </AppText>
              </AppText>
            </View>
            <View style={styles.imageContainer}>
              <FastImage
                source={{uri: info?.food_menu_image}}
                style={styles.imageMenu}
                resizeMode="cover"
              />
            </View>
            {/*style={styles.menuList}*/}
            <View>
              <FlatList
                contentContainerStyle={styles.menuFlatListContainer}
                // showsVerticalScrollIndicator={false}
                data={menuList}
                renderItem={renderCategoryMenuRow}
                keyExtractor={(item, index) => `category_${index}`}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Category;
