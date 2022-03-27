import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
    return (
        <View>
            <View style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2022年3月20日 16:00</Text>
                </View>
                <View>
                    <Feather name="x" size={16} color="#B0B0B0" />
                </View>
            </View>

            <View style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2022年3月20日 16:00</Text>
                </View>
                <View>
                    <Feather name="x" size={16} color="#B0B0B0" />
                </View>
            </View>

            <View style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2022年3月20日 16:00</Text>
                </View>
                <View>
                    <Feather name="x" size={16} color="#B0B0B0" />
                </View>
            </View>
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
});