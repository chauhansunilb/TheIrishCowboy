import React, {useState} from 'react';
import {
  AppHeader,
  AppMenu,
  AppProgressBar,
  AppSearchBox,
  AppText,
  MasterView,
} from '../../Component';
import {FlatList, ImageBackground, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Shared/theme';
import {SEARCH} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import {removeSpecialCharacter} from '../../Util/Const';

const Search = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [item, setItem] = useState([]);

  const onMenuPress = (_item: any) => {
    console.log('===>', _item);
    if (_item?.food_item_title) {
      const itemData = {
        food_item_title_mobile: _item?.food_item_title,
        food_menu_icon_mobile: _item?.food_menu_icon,
        food_item_price_mobile: _item?.food_item_price,
        food_item_content_mobile: _item?.food_item_content,
      };
      navigation.push('CategoryMenuDetail', {item: itemData});
    } else if(_item?.food_item_title_mobile){
      navigation.push('CategoryMenuDetail', {item: _item});
    }
  };

  const fetchResult = async () => {
    try {
      if (search) {
        let url = `${SEARCH}${search}`;
        setLoading(true);
        let result: any = await getRequest(url);
        setItem(result);
      }
    } catch (e) {
      console.log('===>api error', e);
    } finally {
      setLoading(false);
    }
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
            ${(+item?.food_item_price)?.toFixed(2)}
          </AppText>
        ) : null}
      </View>
      {item.food_item_content ? (
        <AppText style={[styles.label]}>
          {removeSpecialCharacter(item?.food_item_content)}
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

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader
          isBack={true}
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
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <AppSearchBox
              placeholder="Search Your Menu"
              value={search}
              onChangeText={setSearch}
              returnKeyType="search"
              onSubmitEditing={fetchResult}
              onSearch={fetchResult}
              onBack={() => setSearch('')}
            />
          </View>
          {search ? (
            <AppText style={styles.lbl}>
              Search Results For :{' '}
              <AppText
                style={[styles.lbl, styles.lblSearch]}>{`"${search}"`}</AppText>
            </AppText>
          ) : null}
          <AppMenu navigation={navigation} />
          <View style={[styles.flex1, styles.horizontailMargin]}>
            <FlatList
              data={item}
              showsVerticalScrollIndicator={false}
              renderItem={renderSubCatgoryRow}
              keyExtractor={(item, index) => `sub_category_${index}`}
            />
          </View>
        </View>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Search;
