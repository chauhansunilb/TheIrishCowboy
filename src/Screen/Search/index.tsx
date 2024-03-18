import React, {useState} from 'react';
import {AppHeader, AppSearchBox, AppText, MasterView} from '../../Component';
import {FlatList, ImageBackground, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Shared/theme';

const Search = ({navigation}: any) => {
  const [search, setSearch] = useState('Search');
  const [item, setItem] = useState([
    {
      food_item_title: 'IRISH POUTINE*',
      food_item_content:
        'A traditional Irish dish of chips (fries) topped with shredded corned beef diced Irish cheddar, topped with a Guinness gravy.....',
      food_item_price: '11',
      menu_icon: false,
    },
    {
      food_item_title: 'IRISH VEGETARIAN POUTINE',
      food_item_content:
        'A traditional Irish dish of chips (fries) topped with diced Irish cheddar, spring onions, and smothered with vegetarian Guinness gravy......',
      food_item_price: '12',
      menu_icon: true,
    },
    {
      food_item_title: 'TEMPURA SHRIMP*',
      food_item_content:
        'A generous helping of Battered Tempura Jumbo shrimps, served with sweet chili\r\nsauce.....',
      food_item_price: '11',
      menu_icon: false,
    },
    {
      food_item_title: 'ONION RINGS',
      food_item_content:
        'A generous helping of freshly beer battered onion rings, and a Ranch dip (for alternative dips please ask our friendly staff)',
      food_item_price: '6.50',
      menu_icon: false,
    },
    {
      food_item_title: 'IRISH BOXTY POTATO CAKES*',
      food_item_content:
        'Traditional Irish potato pancakes served with Irish Black &amp; White Pudding, topped with a fresh fried egg...\r\n..',
      food_item_price: '11.50',
      menu_icon: false,
    },
    {
      food_item_title: 'DUBLIN CHICKEN WINGS X 6*',
      food_item_content:
        'Juicy chicken wings served with carrots and/or celery. Choose from Guinness Glazed Sauce, BBQ sauce, Ranch sauce or the Irish flamed hot sauce....',
      food_item_price: '8.50',
      menu_icon: false,
    },
    {
      food_item_title: 'DUBLIN CHICKEN WINGS X 12*',
      food_item_content:
        'Juicy chicken wings served with carrots and/or celery. Choose from Guinness Glazed Sauce, BBQ sauce, Ranch sauce or the Irish flamed hot sauce.........',
      food_item_price: '15',
      menu_icon: false,
    },
    {
      food_item_title: 'IRISH COLCANNON',
      food_item_content:
        'A traditional Irish dish consisting of creamy buttered mashed potatoes, mixed with fresh cabbage, topped with Bacon and Scallions. (If you require the vegetarian option, please ask your server, and we will serve without bacon)...',
      food_item_price: '10',
      menu_icon: false,
    },
  ]);

  const onMenuPress = (item: any) => {
    navigation.push('CategoryMenuDetail', {item});
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
        <AppText style={[styles.label]}>{item.food_item_content}</AppText>
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
              <AppText style={styles.title}>Our Food Menu</AppText>
              <AppText style={[styles.title, styles.subTitle]}>
                (11am to 8pm)
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
            />
          </View>
          <AppText style={styles.lbl}>
            Search Results For :{' '}
            <AppText
              style={[styles.lbl, styles.lblSearch]}>{`"${search}"`}</AppText>
          </AppText>
          <View style={styles.flex1}>
            <FlatList
              data={item}
              showsVerticalScrollIndicator={false}
              renderItem={renderSubCatgoryRow}
              keyExtractor={(item, index) => `sub_category_${index}`}
            />
          </View>
        </View>
      </ImageBackground>
    </MasterView>
  );
};

export default Search;
