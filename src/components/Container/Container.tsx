import React from 'react'
import { styles } from '@styles/global'
import { View } from 'react-native'

const Container = ({children}:{children: React.JSX.Element}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default Container