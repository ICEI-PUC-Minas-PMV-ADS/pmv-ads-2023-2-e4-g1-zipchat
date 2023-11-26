import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
<<<<<<< Updated upstream
=======
import { useThemeProvider } from "../../theme/themeProvider";
>>>>>>> Stashed changes

import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoaing } from "./ChatMessageLoaing";

export function ChatArea({ chat, loading }) {
<<<<<<< Updated upstream
  return (
    <View style={styles.container}>
=======
  const { theme } = useThemeProvider();
  return (
    <View style={[styles.container, { backgroundColor: theme.Background }]}>
>>>>>>> Stashed changes
      {!chat || (Object.keys(chat).length === 0 && <ChatPlaceholder />)}
      <ScrollView>
        {chat &&
          Object.keys(chat).some((i) => i === "messages") &&
          chat.messages.map((item) => (
            <ChatMessageItem key={item.id} item={item} />
          ))}

<<<<<<< Updated upstream
          {loading && <ChatMessageLoaing />}
      </ScrollView>
      
=======
        {loading && <ChatMessageLoaing />}
      </ScrollView>
>>>>>>> Stashed changes
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: "auto",
    margin: 3,
    flex: 1,
<<<<<<< Updated upstream
    backgroundColor: 'white'
  }
=======
  },
>>>>>>> Stashed changes
});
