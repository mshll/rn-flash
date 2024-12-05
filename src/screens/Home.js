import { ScrollView, View } from 'react-native';
import { defaultStyles } from '../components/GlobalStyles';
import { StatusBar } from 'expo-status-bar';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <View className="bg-white flex-1 items-center justify-between">
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};
export default Home;
