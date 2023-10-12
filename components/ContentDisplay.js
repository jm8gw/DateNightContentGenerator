import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const ContentDisplay = ({ content }) => {
    return (
        <Card>
            <Card.Title>{content}</Card.Title>
        </Card>
    );
  };
export default ContentDisplay;
