import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Icon, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import HomeLoading from '../animations/HomeLoading';
import { userLogout } from '../redux/action/auth';
import { loadProfileById } from '../redux/action/profile';

const Profile = ({ auth, profile: { profile, loading }, loadProfileById, userLogout }) => {
  useEffect(() => {
    loadProfileById(auth.user.id);
  }, []);
  console.log(profile, auth.user.id);
  return loading ? (
    <HomeLoading />
  ) : (
    <SafeAreaView>
      <View>
        <Avatar
          rounded
          source={{ uri: profile.avatar }}
          title={profile.name}
          containerStyle={{
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 20,
          }}
          avatarStyle={{ borderRadius: 75 }}
        />
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{profile.name}</ListItem.Title>
            <ListItem.Subtitle>{profile.greeting}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
      <Button title='Logout' iconRight onPress={() => userLogout()} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { loadProfileById, userLogout })(Profile);

const styles = StyleSheet.create({});
