import * as React from 'react';
import {View, StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import CardView from 'react-native-cardview';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flatImages: [
        {
          url: 'https://quickride.in/images/web-docsapp.jpg',
        },
        {
          url:
            'https://www.netmeds.com/images/cms/offers/1580734728_m.Home_Banner-consult.jpg',
        },
        {
          url: 'https://miro.medium.com/max/2048/1*_UJiNQLiRk0418nUEuFrDg.png',
        },
        {
          url:
            'https://qph.fs.quoracdn.net/main-qimg-2ecdc0810ed6e6ba6e477f875bf10b92',
        },
      ],
      lowerflatData: [
        {
          text: 'BASIC',
          checkUpTpye: 'Zoylo Basic Health Checkup',
          tests: '59 tests included',
          strikeprice: 'INR 1750',
          price: 'INR 699',
          discount: '60% OFF',
        },
        {
          text: 'BASIC',
          checkUpTpye: 'Zoylo Vital Bone Care',
          tests: '2 tests included',
          strikeprice: 'INR 1800',
          price: 'INR 710',
          discount: '61% OFF',
        },
        {
          text: 'BASIC',
          checkUpTpye: 'Zoylo Body Care',
          tests: '29 tests included',
          strikeprice: 'INR 1870',
          price: 'INR 780',
          discount: '68% OFF',
        },
      ],
      medicineData: [
        {
          location: require('../assets/healthcareProduct.png'),

          data: 'Healthcare Products',
        },
        {
          location: require('../assets/ayurveda.png'),
          data: 'Ayurveda',
        },
        {
          location: require('../assets/homeopathy.png'),
          data: 'Homeopathy',
        },
        {
          location: require('../assets/allopathy.png'),

          data: 'Allopathy',
        },
      ],
    };
  }

  render() {
    const {flatImages, lowerflatData, medicineData} = this.state;

    return (
      <SafeAreaView style={{backgroundColor: 'C0C0C0'}}>
        <View style={style.headerbar}>
          <View style={{alignSelf: 'center', flex: 0.8}}>
            <TouchableOpacity>
              <Image
                source={require('../assets/Mobile.png')}
                style={{height: 70, width: 70, resizeMode: 'contain'}}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', flex: 0.2}}>
            <View>
              <TouchableOpacity>
                <Image
                  style={{height: 30, width: 30, resizeMode: 'contain'}}
                  source={require('../assets/gps.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={{height: 25, margin: 2, borderWidth: 0.5}}></Text>
            <View>
              <TouchableOpacity>
                <Image
                  style={{height: 40, width: 40, resizeMode: 'contain'}}
                  source={require('../assets/Cart.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView>
          <FlatList
            style={({marginBottom: 10, backgroundColor: '#fff'})}
            horizontal={true}
            data={flatImages}
            renderItem={({item}) => {
              return (
                <TouchableOpacity>
                  <Image
                    source={{uri: item.url}}
                    style={style.imageStart}></Image>
                </TouchableOpacity>
              );
            }}
          />
          <View style={{marginLeft: 8}}>
            <View style={[style.container]}>
                
              <View style={style.firstSection}>
                <View style={style.innerFirstSection}>
                  <Image
                    source={require('../assets/pill.png')}
                    style={{
                      resizeMode: 'contain',
                      height: 50,
                      marginTop: 15,
                      width: 50,
                    }}
                  />
                </View>

                <View style={{flex: 1, marginTop: 10}}>
                  <Text style={{fontSize: 15}}> Medicines</Text>
                </View>
              </View>
              

              <View style={style.firstSection}>
                <View style={style.innerFirstSection}>
                  <Image
                    style={{width: 70, height: 70}}
                    source={require('../assets/microscope3.png')}
                  />
                </View>

                <View style={{flex: 1, marginTop: 10}}>
                  <Text style={{fontSize: 15}}> Test and Packages</Text>
                </View>
              </View>

              <View style={style.firstSection}>
                <View style={style.innerFirstSection}>
                  <Image
                    style={{width: 70, height: 70}}
                    source={require('../assets/online2.png')}
                  />
                </View>

                <View style={{flex: 1, marginTop: 10}}>
                  <Text style={{fontSize: 15, textAlign: 'center'}}>
                    Online Consulation
                  </Text>
                </View>
              </View>
            </View>

            <View style={style.parentsection}>
              <View style={[style.innerparentSection]}>
                <View style={[style.innerpt1]}>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/sthetho.png')}
                      style={style.iconStyling}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={[style.textViewStyling]}>
                  <Text style={style.textStyling}>Doctor Appointment</Text>
                </View>
              </View>

              <View style={style.innerparentSection}>
                <View style={style.innerpt1}>
                  <TouchableOpacity>
                    <Image
                      style={style.iconStyling}
                      source={require('../assets/wellness.png')}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={style.textViewStyling}>
                  <Text style={style.textStyling}>Wellness Packages</Text>
                </View>
              </View>

              <View style={style.innerparentSection}>
                <View style={style.innerpt1}>
                  <TouchableOpacity>
                    <Image
                      style={style.iconStyling}
                      source={require('../assets/askzoy.png')}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={style.textViewStyling}>
                  <Text style={style.textStyling}>Ask Joy</Text>
                </View>
              </View>

              <View style={style.innerparentSection}>
                <View style={style.innerpt1}>
                  <TouchableOpacity>
                    <Image
                      style={style.iconStyling}
                      source={require('../assets/home.png')}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={style.textViewStyling}>
                  <Text style={style.textStyling}>Home Healthcare</Text>
                </View>
              </View>
              <View style={style.innerparentSection}>
                <View style={style.innerpt1}>
                  <TouchableOpacity>
                    <Image
                      style={style.iconStyling}
                      source={require('../assets/packages.png')}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={style.textViewStyling}>
                  <Text style={style.textStyling}>Hospital Packages</Text>
                </View>
              </View>
            </View>

            <View style={style.innerFirstSection}>
              <Text>Diagnostic Packages by Zoylo Labs</Text>

              <TouchableOpacity>
                <Text>View All</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              style={({margin: 5}, {backgroundColor: '#fff'})}
              horizontal={true}
              data={lowerflatData}
              renderItem={({item}) => {
                return (
                  <View style={style.lowerflatlist}>
                    <View style={style.zoyloUpper}>
                      <View style={style.flatListViewStyle}>
                        <Text style={style.flatListTextstyle}>{item.text}</Text>
                      </View>
                      <View style={{flex: 1.47}}>
                        <Text style={style.flatListTextStyle2}>
                          {item.checkUpTpye}
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={{margin: 15}}>{item.tests}</Text>
                      </View>
                    </View>
                    <View style={style.zoyloLower}>
                      <View style={style.previousPrice}>
                        <Text style={style.strikedPrice}>
                          {item.strikeprice}
                        </Text>
                      </View>
                      <View style={style.separator}>
                        <Text style={{fontSize: 14, color: 'green'}}>
                          {item.price}
                        </Text>
                        <View style={style.discountView}>
                          <Text style={style.discountText}>
                            {item.discount}
                          </Text>
                        </View>
                      </View>
                      <View style={{margin: 15}}>
                        <TouchableOpacity>
                          <Text style={style.bookingStyle}>BOOK NOW</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <Text style={{fontSize: 15, marginTop: 15}}>
              {' '}
              Medicine categories
            </Text>

            <FlatList
              horizontal={true}
              data={medicineData}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity>
                    <View style={style.medicineStyling}>
                      <View>
                        <Image
                          //   source={{uri: item.location}}
                          source={item.location}
                          style={style.medicineIconStyling}
                        />
                      </View>
                      <View>
                        <Text>{item.data}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
            <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={9}
              style={style.cardviewStyling}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text style={style.cardViewTextStyling}>
                    Order Medicine using prescription
                  </Text>
                  <Text style={{fontSize: 10, marginLeft: 10}}>
                    and get medicines delivered at home
                  </Text>
                </View>

                <View style={style.cardviewUpload}>
                  <TouchableOpacity>
                    <Text style={style.cardviewUploadBtn}>UPLOAD</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.cardviewLowerView}>
                <TouchableOpacity>
                  <Text style={style.cardViewlowerText}>
                    Don't have Prescription? Click here
                  </Text>
                </TouchableOpacity>
              </View>
            </CardView>

            <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={9}
              style={style.cardviewStyling}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text style={style.cardView2text}>
                    Online Doctor Consultation
                  </Text>
                  <Text style={style.cardView2Text2}>
                    Consult with the top medical practitioners in your city.
                    Recover from the comfort of your home.
                  </Text>
                </View>

                <View style={style.cardview2buttonstyling}>
                  <TouchableOpacity>
                    <Text style={style.cardview2buttontext}>CONSULT NOW</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginVertical: 40}}></View>
            </CardView>

            <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={9}
              style={style.cardviewStyling}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text style={[style.cardview3text, {marginTop: 35}]}>
                    Take Free{' '}
                  </Text>
                  <Text style={style.cardview3text}>
                    Online Health Assessment
                  </Text>
                  <Text style={style.cardview3LowerText}>
                    Know Your Health Status Now
                  </Text>
                </View>

                <View style={style.card2startBtn}>
                  <TouchableOpacity>
                    <Text style={style.startBtn}>START</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginVertical: 30}}></View>
            </CardView>

            <CardView
              cardElevation={2}
              cardMaxElevation={2}
              cornerRadius={9}
              style={style.cardviewStyling}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 2}}>
                  <Text style={[style.LastCardView, {marginTop: 35}]}>
                    Corporate health plans
                  </Text>
                  <Text style={style.LastCardView}>
                    Just for your workplace
                  </Text>
                </View>

                <View></View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image
                  source={require('../assets/right.png')}
                  style={style.forwardIcon}
                />
                <View style={{justifyContent: 'center'}}>
                  <TouchableOpacity>
                    <Text
                      style={{color: 'orange', fontSize: 11, marginLeft: 3}}>
                      Login To Your Corporate Account To Avail Multiple Benefits
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{marginVertical: 30}}></View>
            </CardView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    height: 150,

    flex: 1,
    marginVertical: 10,

    flexDirection: 'row',
  },
  innercontainer: {
    margin: 10,
    shadowOffset: {width: 1, height: 1},
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  LastCardView: {fontSize: 18, marginLeft: 10},
  card2startBtn: {
    backgroundColor: 'white',
    height: 35,
    borderWidth: 1,
    marginTop: 19,
    borderColor: 'orange',
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  cardviewUploadBtn: {fontWeight: '300', fontSize: 18, color: 'orange'},
  cardviewStyling: {
    backgroundColor: '#fff',
    marginTop: 25,
    marginHorizontal: 10,

    justifyContent: 'space-between',
  },
  strikedPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  startBtn: {fontWeight: '300', fontSize: 18, color: 'orange'},
  innerFirstSection: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  cardview3text: {fontSize: 18, marginLeft: 10},
  cardview3LowerText: {
    fontSize: 10,
    marginLeft: 12,
    marginTop: 10,
    fontWeight: '200',
  },
  cardview2buttontext: {fontWeight: '400', color: 'white', fontSize: 15},
  cardViewlowerText: {
    fontSize: 13,
    alignSelf: 'center',
    color: 'orange',
    marginRight: 10,
  },
  cardviewLowerView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 40,
    marginBottom: 28,
  },
  cardViewTextStyling: {fontSize: 18, marginLeft: 10, marginTop: 20},
  discountText: {fontSize: 16, color: 'green', paddingHorizontal: 5},
  discountView: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'green',
  },
  cardView2text: {fontSize: 18, alignSelf: 'center', marginTop: 20},
  cardView2Text2: {
    fontSize: 9,
    alignSelf: 'center',
    marginLeft: 12,
    marginTop: 10,
  },
  cardview2buttonstyling: {
    backgroundColor: 'orange',
    flex: 1,

    marginTop: 28,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  flatListTextStyle2: {
    fontSize: 14,
    margin: 15,
    fontWeight: '600',
  },
  firstSection: {
    flex: 1,
    backgroundColor: 'green',
    marginRight: 8,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',

    borderRadius: 7,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
  },
  bookingStyle: {fontSize: 17, color: 'orange', fontWeight: '600'},
  forwardIcon: {marginLeft: 10, height: 15, width: 15, resizeMode: 'contain'},
  medicineStyling: {
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    height: 110,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cardviewUpload: {
    backgroundColor: 'white',
    height: 35,
    borderWidth: 1,
    borderColor: 'orange',
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  imageStart: {
    height: 150,
    width: 350,
    resizeMode: 'stretch',
    marginLeft: 15,
    marginVertical: 20,
    borderRadius: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  medicineIconStyling: {height: 40, width: 40, resizeMode: 'contain'},
  parentsection: {
    height: 100,
    flex: 1,
    flexDirection: 'row',

    backgroundColor: '#fff',
  },
  flatListTextstyle: {
    fontSize: 15,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginVertical: 3,
  },
  headerbar: {
    height: 65,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  innerparentSection: {
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  innerpt1: {
    flex: 1.5,
    borderRadius: 30,

    borderWidth: 0.4,
    marginVertical:7,

    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyling: {
    fontSize: 9,
    alignSelf: 'center',
    textAlign: 'center',
  },
  textViewStyling: {flex: 1, justifyContent: 'center'},
  iconStyling: {
    height: 40,
    marginVertical: 13,
   
    width: 40,
  },
  lowerflatlist: {
    shadowOffset: {width: 1, height: 1},
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    margin: 10,
    width: 170,
    height: 310,
  },
  zoyloUpper: {
    flex: 1,
    backgroundColor: '#ddd3ee',
  },
  zoyloLower: {
    flex: 1,
    backgroundColor: 'white',
  },
  previousPrice: {
    height: 20,
    margin: 15,

    marginLeft: 15,
  },
  flatListViewStyle: {
    width: 70,
    flex: 0.6,
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 14,
  },
  separator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
  },
});
export default Home;
