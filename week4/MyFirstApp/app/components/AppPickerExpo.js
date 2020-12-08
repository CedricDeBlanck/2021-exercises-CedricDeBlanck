import React, { useState } from 'react'
import { Picker, StyleSheet, Text, View } from 'react-native'

export default function AppPickerExpo({ items, style }) {
    const [ selectedItem, setSelectedItem] = useState(null);
    return (
            <Picker
                selectedValue={selectedItem.value}
                style={styles.picker, style}
                onValueChange={(value, index) => {
                    setSelectedItem({ value });
                    onSelectItem(items[index]);
                }
                    
                }>
                    {items.map((item) =>
                        <Picker.Item label={item.label} value={item.value} />
                    )}
            </Picker>
    )
}

const styles = StyleSheet.create({
    picker: {
        width: "100%"
    }
})
