import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles'
const Description = ({ image, description }) => {
    return (

        <View style={styles.project} >
            <ScrollView showsVerticalScrollIndicator={true}>
                <Image source={image} style={{ width: 170, height: 170, marginTop: 10, marginBottom: 10, }} />
                <Text style={styles.projectText}>{description}</Text>
</ScrollView>
        </View>
    )
}

export default Description