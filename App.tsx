/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import VideoCall from './src/videocall';
import VoiceCall from './src/voicecall';

const App = () => {
  const [activeCall, setActiveCall] = useState(null);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => setActiveCall('video')}>
        {!activeCall && (
          <>
            <TouchableOpacity>
              <Text>Start Video Call</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Start Voice Call</Text>
            </TouchableOpacity>
          </>
        )}

        {activeCall === 'video' && <VideoCall />}
        {activeCall === 'voice' && <VoiceCall />}
      </View>
    </SafeAreaView>
  );
};

export default App;
