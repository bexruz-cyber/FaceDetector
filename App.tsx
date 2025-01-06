import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useCameraDevice, useCameraPermission, Camera } from 'react-native-vision-camera';

function PermissionsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Camera permission is required</Text>
    </View>
  );
}

function NoCameraDeviceError() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No camera device found</Text>
    </View>
  );
}

function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice('back');

  if (!hasPermission) return <PermissionsPage />;
  if (device == null) return <NoCameraDeviceError />;
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});