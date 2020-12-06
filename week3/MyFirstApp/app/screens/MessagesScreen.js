import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import { ListItem, ListItemSeparator, Screen, ListItemDeleteAction} from '../components'

const initialMessages = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus elit est, nec scelerisque ex molestie eget. Duis viverra iaculis scelerisque. Nulla facilisi. Sed egestas semper elit, auctor consequat odio posuere eget. Nulla facilisi. Vestibulum rutrum luctus sagittis. Etiam ipsum nunc, tempus eu sollicitudin a, lacinia ut arcu. In porta, magna a suscipit mollis, mauris leo volutpat nisl, vitae dapibus quam ligula id lectus. Donec porta arcu vel sem ullamcorper, quis commodo nulla convallis. Phasellus a diam ac tortor porta sollicitudin. Nunc diam turpis, interdum eu pretium ut, mattis vitae massa.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus elit est, nec scelerisque ex molestie eget. Duis viverra iaculis scelerisque. Nulla facilisi. Sed egestas semper elit, auctor consequat odio posuere eget. Nulla facilisi. Vestibulum rutrum luctus sagittis. Etiam ipsum nunc, tempus eu sollicitudin a, lacinia ut arcu. In porta, magna a suscipit mollis, mauris leo volutpat nisl, vitae dapibus quam ligula id lectus. Donec porta arcu vel sem ullamcorper, quis commodo nulla convallis. Phasellus a diam ac tortor porta sollicitudin. Nunc diam turpis, interdum eu pretium ut, mattis vitae massa.",
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 2,
        title: "Mijn tweede titel",
        description: "Mijn tweede beschrijving",
        image: require('../assets/mosh.jpg'),
    },
    {
        id: 3,
        title: "Mijn derde titel",
        description: "Mijn derde beschrijving",
        image: require('../assets/mosh.jpg'),
    },
]

export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // deletes a message
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }
    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item.title)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />
            }
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages(initialMessages)
            }}
            />
        </Screen>

    )
}