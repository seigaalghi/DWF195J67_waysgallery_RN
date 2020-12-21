import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Button, Icon, Text, Avatar, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadPosts } from '../redux/action/post';
import { connect } from 'react-redux';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Moment from 'moment';
import colors from '../theme/colors';

const Home = ({ post, loadPosts }) => {
  useEffect(() => {
    loadPosts(8);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableHighlight>
      <Card containerStyle={{ padding: 10, paddingBottom: 10, borderRadius: 10 }} key={item.id}>
        <ListItem containerStyle={{ padding: 5 }}>
          <Avatar rounded source={{ uri: item.user.avatar }} title={item.user.name} />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: 'bold', fontSize: 20 }} numberOfLines={1}>
              {item.title}
            </ListItem.Title>
            <ListItem.Subtitle style={{ fontWeight: 'bold', fontSize: 13, color: colors.primary }}>
              {item.user.name}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <Card.Image
          source={{ uri: item.photos[0].photo }}
          style={{ width: '100%', height: 200 }}
          containerStyle={{ borderRadius: 5 }}
        />
        <Card.Divider />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: -10,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              icon={() => <Icon name='comment' type='font-awesome' size={20} color={colors.gray} />}
              title={item.comments.length.toString()}
              buttonStyle={{ backgroundColor: '#fff', flex: 1, width: 50 }}
              titleStyle={{ color: colors.gray }}
            />
            <Button
              icon={() => <Icon name='heart' type='font-awesome' size={20} color={colors.gray} />}
              title={item.comments.length.toString()}
              buttonStyle={{ backgroundColor: '#fff', flex: 1, width: 50 }}
              titleStyle={{ color: colors.gray }}
            />
          </View>
          <Text style={{ fontWeight: 'bold', color: colors.gray, fontSize: 15 }}>
            {Moment(item.createdAt).format('DD MMM YYYY')}
          </Text>
        </View>
      </Card>
    </TouchableHighlight>
  );
  return post.loading ? (
    <Text>Loading</Text>
  ) : (
    <SafeAreaView>
      <FlatList data={post.posts} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { loadPosts })(Home);
