import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate('MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2022年3月20日 16:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert('Are you sure?'); 
                }}>
                    <Feather name="x" size={24} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate('MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2022年3月20日 16:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert('Are you sure?'); 
                }}>
                    <Feather name="x" size={24} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate('MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2022年3月20日 16:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert('Are you sure?'); 
                }}>
                    <Feather name="x" size={24} color="#B0B0B0" />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    memoListItem: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        color: '#848484',
        fontSize: 12,
        lineHeight: 16,
    },
    memoDelete: {
        padding: 8,
    },
});