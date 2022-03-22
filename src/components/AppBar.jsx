import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function AppBar() {
    return (
        <View style={styles.appbar}>    
            <View style={styles.appbarInner}>
                <Text style={styles.appbarTitle}>Memo App</Text>
                <Text style={styles.appbarRight}>ログアウト</Text>
            </View>
        </View>   
    );
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#467FD3',
        width: '100%',
        height: 104,
        justifyContent: 'flex-end',
    },
    appbarInner: {
        alignItems: 'center',
    },
    appbarTitle: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 8,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    appbarRight: {
        position: 'absolute',
        right: 19,
        bottom: 16,
        color: 'rgba( 255, 255, 255, 0.8)',
    },
});
