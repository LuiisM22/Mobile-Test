import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View>
        <Router>
          <Modal hideNavBar>
            <Stack key="root">
              <Tabs
                hideNavBar
                tabBarPosition="bottom"
                wrap
                upperCaseLabel
                activeTintColor={getUniversalColors().commons.tabIconEnable}
                inactiveTintColor={getUniversalColors().commons.tabIconDisable}
                tabBarStyle={[
                  styles.tabInvisible,
                  {
                    backgroundColor:
                      getUniversalColors().commons.footerBackground,
                  },
                ]}>
                <Scene
                  key="home"
                  title={this.state.titleHome}
                  component={Principal}
                  hideNavBar
                  icon={({focused}) => (
                    <Icon
                      size={35}
                      color={
                        focused
                          ? getUniversalColors().commons.tabIconEnable
                          : getUniversalColors().commons.tabIconDisable
                      }
                      name="home-outline"
                      textStyle={
                        focused
                          ? [styles.label, styles.activeLabel]
                          : styles.label
                      }
                    />
                  )}
                />
                <Scene
                  key="coffeeCard"
                  title="Coffee Card"
                  component={MyAccount}
                  hideNavBar
                  icon={({focused}) => (
                    <Icon
                      size={35}
                      color={
                        focused
                          ? getUniversalColors().commons.tabIconEnable
                          : getUniversalColors().commons.tabIconDisable
                      }
                      name="card-outline"
                      textStyle={
                        focused
                          ? [styles.label, styles.activeLabel]
                          : styles.label
                      }
                    />
                  )}
                />
                <Scene
                  key="products"
                  title={this.state.titleOrder}
                  component={Products}
                  hideNavBar
                  icon={({focused}) => (
                    <Icon
                      size={35}
                      color={
                        focused
                          ? getUniversalColors().commons.tabIconEnable
                          : getUniversalColors().commons.tabIconDisable
                      }
                      name="cafe-outline"
                      textStyle={
                        focused
                          ? [styles.label, styles.activeLabel]
                          : styles.label
                      }
                    />
                  )}
                />
                {/* <Scene
                  key="coupons"
                  title={'Promo'}
                  component={CouponsCatalog}
                  hideNavBar
                  icon={({focused}) => (
                    <Icon
                      size={35}
                      color={
                        focused
                          ? getUniversalColors().commons.tabIconEnable
                          : getUniversalColors().commons.tabIconDisable
                      }
                      name="ribbon-outline"
                      textStyle={
                        focused
                          ? [styles.label, styles.activeLabel]
                          : styles.label
                      }
                    />
                  )}
                /> */}
                <Scene
                  key="cafeterias"
                  component={Cafeterias}
                  title={this.state.titleStores}
                  hideNavBar
                  icon={({focused}) => (
                    <Icon
                      size={35}
                      color={
                        focused
                          ? getUniversalColors().commons.tabIconEnable
                          : getUniversalColors().commons.tabIconDisable
                      }
                      name="location-outline"
                      textStyle={
                        focused
                          ? [styles.label, styles.activeLabel]
                          : styles.label
                      }
                    />
                  )}
                />
                <Scene
                  key="menuOptions"
                  component={MenuOptions}
                  title={this.state.titleSettings}
                  hideNavBar
                  icon={({focused}) => (
                    <Icon
                      size={35}
                      color={
                        focused
                          ? getUniversalColors().commons.tabIconEnable
                          : getUniversalColors().commons.tabIconDisable
                      }
                      name="settings-outline"
                      textStyle={
                        focused
                          ? [styles.label, styles.activeLabel]
                          : styles.label
                      }
                    />
                  )}
                />
              </Tabs>
              <Scene key="webViewNew" component={WebViewNew} hideNavBar />
              <Scene key="share" component={ShareProduct} hideNavBar />
              <Scene key="seeCoupon" component={SeeCoupon} hideNavBar />
              <Scene
                key="couponsTermsConditions"
                component={CouponsTermsConditions}
                hideNavBar
              />
              <Scene key="menuOptions" component={MenuOptions} hideNavBar />
              <Scene
                key="recoveryPassword"
                component={RecoveryPassword}
                hideNavBar
              />
              <Scene
                key="initialTutorials"
                component={InitialTutorials}
                initial={this.state.againShowSceneInitial}
                hideNavBar
              />
            </Stack>
            <Scene key="myAccount" component={MyAccount} hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="loginPhone" component={LoginPhone} hideNavBar />
            <Scene key="register" component={Register} hideNavBar />
            <Scene key="myPlaces" component={MyPlaces} hideNavBar />
            <Scene key="MapPlaces" component={MapPlaces} hideNavBar />
            <Scene key="orderHistorial" component={OrderHistorial} hideNavBar />
            <Scene key="productDetails" component={ProductDetails} hideNavBar />
            <Scene key="productsModal" component={ProductsModal} hideNavBar />
            <Scene key="account" component={Account} hideNavBar />
            <Scene key="giftsDetails" component={GiftsDetails} hideNavBar />
            <Scene key="giveAway" component={GiveAway} hideNavBar />
            <Scene key="share" component={ShareProduct} hideNavBar />
            <Scene key="orders" component={Orders} />
            <Scene key="orderType" component={OrderType} />
            <Scene key="statusAccount" component={StatusAccount} hideNavBar />
            <Scene key="orderBoxDetails" component={OrderBoxDetails} />
            <Scene key="pickAndGoDelivery" component={PickAndGoDelivery} />
            <Scene
              key="internationalDelivery"
              component={InternationalDelivery}
            />
            <Scene key="homeDelivery" component={HomeDelivery} />
            <Scene key="gifts" component={Gifts} />
            <Scene key="productsMap" component={ProductsMap} />
            <Scene key="couponsTutorial" component={CouponsTutorial} />

            <Scene
              key="modalCafeteriaDescription"
              component={ModalCafeteriaDescription}
            />
            <Scene key="rechargeWallet" component={RechargeWallet} />
            <Scene key="successPay" component={SuccessPay} />
            <Scene key="myCreditCards" component={MyCreditCards} />
            <Scene key="survey" component={SurveyView} hideNavBar />
            <Scene
              key="contentNewExclusive"
              component={ContentNewExclusive}
              hideNavBar
            />
          </Modal>
        </Router>
        <Text> Mobile Test </Text>

        <Icon name="user" style={{fontSize: 50}} />
      </View>
    );
  }
}
