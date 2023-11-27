import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useThemeProvider } from "../../theme/themeProvider";

import { ChatPlaceholder } from "./ChatPlaceholder";
import { ChatMessageItem } from "./ChatMessageItem";
import { ChatMessageLoaing } from "./ChatMessageLoaing";

export function ChatArea({ chat, loading }) {
  const { theme } = useThemeProvider();
  return (
    <View style={[styles.container, { backgroundColor: theme.Background }]}>
      {!chat || (Object.keys(chat).length === 0 && <ChatPlaceholder />)}
      <ScrollView>
        {chat &&
          Object.keys(chat).some((i) => i === "messages") &&
          chat.messages.map((item) => (
            <ChatMessageItem key={item.id} item={item} />
          ))}

        {loading && <ChatMessageLoaing />}
      </ScrollView>
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
  },
});
